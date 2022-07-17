import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";

export const TripsDetailsPage = (props) => {
  const [detalhes, setDetalhes] = useState({})
  const [candidatos, setCandidatos] = useState([])
  const [aprovados, setAprovados] = useState([])


  useProtectedPage()
  const navigate = useNavigate()
  const pathParams = useParams()


  const goToPreviousPage = () => {
    navigate(-1)
  }

  useEffect(() => {

    pegaDetalhes();
  }, [])

  const pegaDetalhes = () => {

    const token = window.localStorage.getItem('token')

    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brunomonteiro/trip/${pathParams.tripId}`, {
        headers: {
          auth: token
        }
      })
      .then(response => {
        setDetalhes(response.data.trip)
        setCandidatos(response.data.trip.candidates)
        setAprovados(response.data.trip.approved)
        console.log(response.data.trip)
      })
      .catch(err => {
        alert("Um erro ocorreu!");
        console.log(err);
      });
  }

  const aprovaCandidato = (boolean, applicationId) => {
    const body = {
      approve: boolean,
    }

    const token = window.localStorage.getItem('token')

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/brunomonteiro/trips/${detalhes.id}/candidates/${applicationId}/decide`,
        body,
        {
          headers: {
            auth: token
          }
        }
      )
      .then(() => {
        if (boolean) {
          alert("Candidato aprovado");
        } else {
          alert("Candidato recusado");
        }
        pegaDetalhes();
      })
      .catch((err) => {
        console.log(err);
        alert("Ocorreu um erro!");
      });
  };


  return (
    <div>
      <div>
        <h3>Detalhes da Viagem</h3>
        <p>Nome: {detalhes.name}</p>
        <p>Descrição: {detalhes.description}</p>
        <p>Planeta: {detalhes.planet}</p>
        <p>Duração: {detalhes.durationInDays} dias</p>
        <p>Data: {detalhes.date}</p>
        <button onClick={goToPreviousPage}>Voltar</button>
      </div>
      <div>
        <h3>Candidatos Pendentes</h3>
      </div>
      {candidatos ? (
        candidatos.length === 0 ? (
          <div>
            <h4>
              Ainda não há nenhum candidato
            </h4>
          </div>
        ) : (
          candidatos.map((candidato) => {
            return (
              <div key={candidato.id}>

                <p>Nome: {candidato.name}</p>
                <p>País: {candidato.country}</p>
                <p>Idade: {candidato.age}</p>
                <p>Profissão: {candidato.profession} dias</p>
                <p>Texto: {candidato.applicationText}</p>
                <button onClick={() => { aprovaCandidato(true, candidato.id) }}>Aprovar</button>
                <button onClick={() => { aprovaCandidato(false, candidato.id) }}>Rejeitar</button>
              </div>
            );
          })
        )
      ) : (<div><p>Carregando...</p></div>)}
      <div>
        <h3>Candidatos Aprovados</h3>
      </div>
      <div>
      {aprovados ? (
        aprovados.length === 0 ? (
          <div>
            <h4>
              Ainda não há nenhum candidato aprovado.
            </h4>
          </div>
        ) : (
          aprovados.map((aprovado) => {
            return (
              <div key={aprovado.id}>

                <p>Nome: {aprovado.name}</p>
                <p>País: {aprovado.country}</p>
                <p>Idade: {aprovado.age}</p>
                <p>Profissão: {aprovado.profession} dias</p>
                <p>Texto: {aprovado.applicationText}</p>
              </div>
            );
          })
        )
      ) : (<div><p>Carregando...</p></div>)}
      </div>
    </div>
  );
}

export default TripsDetailsPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const CardViagem = styled.div`
    border: 2px solid black;
    padding: 15px;
    width: 25%;
    margin: 20px;
`

const ContainerViagens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`


const ListTripsPage = (props) => {

    const [viagens, setViagens] = useState([])
    const navigate = useNavigate()

    const goToApplicationPage = (id) => {
        navigate(`/application/${id}`)
    }

    const goToPreviousPage = () => {
        navigate(-1)
    }



  const pegaViagens = () => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brunomonteiro/trips`)
      .then(response => {
        setViagens(response.data.trips);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {

    pegaViagens();
  }, [])


    const listaViagens = viagens.map((viagem, index) => {
        return (
            <CardViagem key={viagem.id}>
                <p>Nome: {viagem.name}</p>
                <p>Descrição: {viagem.description}</p>
                <p>Planeta: {viagem.planet}</p>
                <p>Duração: {viagem.durationInDays} dias</p>
                <p>Data: {viagem.date}</p>
                <button onClick={() => { goToApplicationPage(viagem.id)} }>Inscrever-se</button>
            </CardViagem>
        )
    })


    return (
        <div>
            <h3>Lista de Viagens</h3>
            <button onClick={goToPreviousPage}>Voltar</button>
            <ContainerViagens>
                {listaViagens}
            </ContainerViagens>
        </div>
    );
}


export default ListTripsPage;

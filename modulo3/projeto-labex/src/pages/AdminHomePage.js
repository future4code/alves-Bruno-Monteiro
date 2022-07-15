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


const AdminHomePage = (props) => {

  const [viagens, setViagens] = useState([])
  const navigate = useNavigate()

  const goToCreateTripPage = () => {
    navigate("/create-trip")
  }

  const goToPreviousPage = () => {
    navigate(-1)
  }

  const logout = () => {
    navigate("/login")
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

  const removeViagem = (id) => {
    console.log(id)
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brunomonteiro/trips/$id`)
      .then(response => {
        setViagens(response.data.trips);
      })
      .catch(err => {
        console.log(err);
      });
  }


  const listaViagens = viagens.map((viagem, index) => {
    return (
      <CardViagem key={viagem.id}>
        <p>Nome: {viagem.name}</p>
        <button onClick={ () => { removeViagem(viagem.id) } }>Remover</button>
      </CardViagem>
    )
  })


  return (
    <div>
      <h3>Lista de Viagens</h3>
      <button onClick={goToPreviousPage}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button onClick={logout}>Log Out</button>
      <ContainerViagens>
        {listaViagens}
      </ContainerViagens>
    </div>
  );
}


export default AdminHomePage;

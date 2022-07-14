import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


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
    //   const [pokemon, setPokemon] = useState({})

    //   useEffect(() => {

    //     pegaPokemon(props.pokeName);
    //   }, [props.pokeName])

    //   const pegaPokemon = pokeName => {
    //     axios
    //       .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    //       .then(response => {

    //         setPokemon(response.data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   }

    const listaViagens = props.viagens.map((viagem, index) => {
        return (
            <CardViagem key={viagem.id}>
                <p>Nome: {viagem.name}</p>
                <p>Descrição: {viagem.description}</p>
                <p>Planeta: {viagem.planet}</p>
                <p>Duração: {viagem.durationInDays} dias</p>
                <p>Data: {viagem.date}</p>
                <button>Inscrever-se</button>
            </CardViagem>
        )
    })


    return (
        <div>
            <h3>Lista de Viagens</h3>
            <button>Voltar</button>
            <ContainerViagens>
                {listaViagens}
            </ContainerViagens>
        </div>
    );
}


export default ListTripsPage;

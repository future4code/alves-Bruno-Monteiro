import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TripsDetailsPage = (props) => {
    const navigate = useNavigate()

    const goToTripsPage = () => {
        navigate("/trips")
    }

    const goToLoginPage = () => {
        navigate("/login")
    }
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

  return (
    <div>
        <button onClick={goToTripsPage}>Ver Viagens</button>
        <button onClick={goToLoginPage}>Login</button>
    </div>
  );
}

export default TripsDetailsPage;

import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = (props) => {
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
        <button>Ver Viagens</button>
        <button>Login</button>
    </div>
  );
}


export default HomePage;

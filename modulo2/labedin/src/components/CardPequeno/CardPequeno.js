import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div>
            <div className="smallcard-container">
            <img src={ props.imagem }/>
            <p>email:{props.email}</p>
            </div>
            <div className="smallcard-container">
            <img src={ props.imagem } />
            <p>Endereço:{props.endereco}</p>
            
            </div>
       </div>
    )
}

export default CardPequeno;
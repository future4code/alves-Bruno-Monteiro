import React from 'react'
import CampoTexto from './CampoTexto';
import { Container } from "./styled";

class Etapa2 extends React.Component {


    render() {
        return <Container>
            <h3>
                ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
            </h3>
            <CampoTexto />
            <p>5. Qual curso?</p>
            <CampoTexto />
            <p>6. Qual a unidade de ensino?</p>
        </Container>
    }
}

export default Etapa2 
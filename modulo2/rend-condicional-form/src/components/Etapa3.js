import React from 'react'
import CampoTexto from './CampoTexto';
import { Container, SelectInput } from "./styled";

class Etapa3 extends React.Component {


    render() {
        return <Container>
            <h3>
                ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
            </h3>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <CampoTexto />
            
            <p>6. Você fez algum curso complementar?</p>
            <SelectInput>
                <option value="Nenhum">Nenhum</option>
                <option value="Curso Técnico">Curso Técnico</option>
                <option value="Curso de Inglês">Curso de Inglês</option>

            </SelectInput>


        </Container>
    }
}

export default Etapa3 
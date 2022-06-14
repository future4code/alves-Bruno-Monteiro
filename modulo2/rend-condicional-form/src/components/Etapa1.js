import React from 'react'
import CampoTexto from './CampoTexto';
import { Container, SelectInput,MainContainer } from "./styled";


class Etapa1 extends React.Component {

    render() {
        return <Container>
            <h3>
                ETAPA 1 - DADOS GERAIS
            </h3>
            
            <p>1. Qual o seu nome?</p>
            <CampoTexto />

            <p>2. Qual sua idade?</p>
            
            <CampoTexto />

            <p>3. Qual seu email?</p>
            <CampoTexto />

            <p>4. Qual a sua escolaridade?</p>
            <SelectInput>
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                <option value="Ensino Superior Completo">Ensino Superior Completo</option>
            </SelectInput>
        

        </Container>
    }
}

export default Etapa1 
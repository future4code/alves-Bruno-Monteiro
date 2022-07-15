import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const ContainerBotoesForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Form = styled.form`
    display: block;
    padding: 15px;
    width: 50%;
    margin: 20px;
`

const ContainerViagens = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
const Input = styled.input`
    width: 75%;
    margin: 10px;
    height: 1.5rem;
`


const CreateTripPage = (props) => {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [duracao, setDuracao] = useState("")
    const [planeta, setPlaneta] = useState("")
    const [data, setData] = useState("")

    const navigate = useNavigate()
    const pathParams = useParams()

    const goToPreviousPage = () => {
        navigate(-1)
    }

    const onChangeNome = (event) => {
        setNome(event.target.value);
    }

    const onChangeDescricao = (event) => {
        setDescricao(event.target.value);
    }

    const onChangeDuracao = (event) => {
        setDuracao(event.target.value);
    }

    const onChangePlaneta = (event) => {
        setPlaneta(event.target.value);
    }

    const onChangeData = (event) => {
      setData(event.target.value);
  }


    const enviarInscricao = () => {
        const body = {
          "name": nome,
          "planet": planeta,
          "date": data,
          "description": descricao,
          "durationInDays": duracao
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips`, body)
            .then(response => {
                alert("Viagem criada com sucesso!")
                goToPreviousPage()
            })
            .catch(err => {
                alert("Um erro ocorreu, verifique seus dados!");
                console.log(err);
            });
    }



    return (
        <div>
            <h3>Inscrever-se</h3>
            <Form>
                <Input type="text" onChange={onChangeNome} placeholder="Nome da viagem" value={nome}
                    name={"name"} required></Input>
                <select placeholder="Planeta" name="planeta" required="" onChange={onChangePlaneta}>
                    <option value="" disabled="">Escolha um Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Venus">Venus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>                   
                </select>
                <Input type="text" onChange={onChangeDescricao} placeholder="Descrição" value={descricao}
                    name={"descricao"} required></Input>
                <Input type="text" onChange={onChangeDuracao} placeholder="Duração em dias" value={duracao}
                    name={"duracao"} required></Input>
               <Input label="Escolha um a data" type="date" value={data} onChange={onChangeData}></Input>
                <ContainerBotoesForm>
                    <button onClick={goToPreviousPage}>Voltar</button>
                    <button onClick={enviarInscricao}>Enviar</button>
                </ContainerBotoesForm>
            </Form>
        </div>
    );
}


export default CreateTripPage;

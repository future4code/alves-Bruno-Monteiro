import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ContainerBotaoContinuar = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
gap: 10px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
width: 91px;
height: 25px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
margin-bottom: 10px;

`
const ContainerBotaoCriarConta = styled.div`
background: #E5E5E5;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
gap: 10px;
border-radius: 27px;
width: 91px;
height: 25px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
`
const Input = styled.input`
    width: 75%;
    margin: 10px;
    height: 1.5rem;
`


const LoginPage = (props) => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()
    const pathParams = useParams()


    const goToSignUpPage = () => {
      navigate('/signup')
  }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    const login = () => {
    
      const body = {
            "email": email,
            "password": senha,
        }

        axios
            .post(`{{baseURL}}/users/login
            `, body)
            .then(response => {
               window.localStorage.setItem("token",response.data.token) 
               navigate('/admin')
            })
            .catch(err => {
                alert("Email ou senha incorretos!");
                console.log(err);
            });
    }

    return (
        <div>
            
            <h1>LabEddit</h1>
            <p> O Projeto de rede social da Labenu</p>
            <div>
                <Input type="text" onChange={onChangeEmail} placeholder="Email*" value={email}
                    name={"email"} required></Input>
                <Input type="text" onChange={onChangeSenha} placeholder="Senha*" value={senha}
                    name={"senha"} required></Input>
                <ContainerBotaoContinuar onClick={login}>Continuar</ContainerBotaoContinuar>

                <ContainerBotaoCriarConta onClick={goToSignUpPage}>Crie uma conta!</ContainerBotaoCriarConta>
            </div>
        </div>
    );
}


export default LoginPage;
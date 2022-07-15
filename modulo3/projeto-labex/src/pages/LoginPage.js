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

    const goToPreviousPage = () => {
        navigate(-1)
    }

    const goToAdminPage = () => {
      navigate("/admin")
  }


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    const logar = () => {
        // const body = {
        //     "email": email,
        //     "senha": senha,
        // }
        // axios
        //     .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brunomonteiro/trips/${pathParams.tripId}/apply`, body)
        //     .then(response => {
        //         alert("Candidatura enviada com sucesso!")
        //         goToPreviousPage()
        //     })
        //     .catch(err => {
        //         alert("Something is wrong, check your data!");
        //         console.log(err);
        //     });
        goToAdminPage()
    }



    return (
        <div>
            <h3>Login</h3>
            <div>
                <Input type="text" onChange={onChangeEmail} placeholder="Email" value={email}
                    name={"email"} required></Input>
                <Input type="text" onChange={onChangeSenha} placeholder="Senha" value={senha}
                    name={"senha"} required></Input>
                <ContainerBotoesForm>
                    <button onClick={goToPreviousPage}>Voltar</button>
                    <button onClick={logar}>Entrar</button>
                </ContainerBotoesForm>
            </div>
        </div>
    );
}


export default LoginPage;

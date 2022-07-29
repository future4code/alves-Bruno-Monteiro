import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseURL } from '../../Constants/baseURL'

const SignUpPage = (props) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [username, setUserName] = useState("");

  const navigate = useNavigate();
  const pathParams = useParams();

  const goToLoginPage = () => {
    navigate("/login");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const signup = () => {
    const body = {
        "email": email,
        "password": senha,
        "username": username
    }
    axios
      .post(`${baseURL}/users/signup`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert("Email ou senha incorretos!");
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Olá, boas vindas ao LabEddit</h1>
      
      <div>
        <input
          type="text"
          onChange={onChangeEmail}
          placeholder="Email*"
          value={email}
          name={"email"}
          required
        ></input>
        <input
          type="text"
          onChange={onChangeSenha}
          placeholder="Senha*"
          value={senha}
          name={"senha"}
          required
        ></input>
        <input
          type="text"
          onChange={onChangeUserName}
          placeholder="Nome do usuário*"
          value={username}
          name={"username"}
          required
        ></input>

        <div onClick={signup}>
          cadastrar
        </div>

        <div onClick={goToLoginPage}>
          Entrar
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

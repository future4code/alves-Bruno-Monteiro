import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseURL } from "../../Constants/baseURL";
import logo from "../../Assets/nav-logo.png";
import {
  ContainerSignup,
  ContainerLogo,
  ContainerInputs,
  ContainerButtons,
  ButtonContinue,
  ButtonSignup,
  Input,
  Line,
  Subhead,
  Logo,
  ButtonLogin,
  Header,
  TitleSignup,
  DisclaimerText,
  DisclaimerCheck
} from "./styled";

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
      email: email,
      password: senha,
      username: username,
    };
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
    <ContainerSignup>
      <Header>
        <Logo src={logo} alt="logo labeddit" />

        <ButtonLogin onClick={goToLoginPage}>Entrar</ButtonLogin>
      </Header>
      <TitleSignup>Olá, boas vindas ao LabEddit!</TitleSignup>

      <ContainerInputs>
        <Input
          type="text"
          onChange={onChangeUserName}
          placeholder="Nome do usuário"
          value={username}
          name={"username"}
          required
        ></Input>
        <Input
          type="text"
          onChange={onChangeEmail}
          placeholder="Email"
          value={email}
          name={"email"}
          required
        ></Input>
        <Input
          type="text"
          onChange={onChangeSenha}
          placeholder="Senha"
          value={senha}
          name={"senha"}
          required
        ></Input>
      </ContainerInputs>
      <ContainerButtons>
        <DisclaimerText>
          Ao continuar, você concorda com o nosso Contrato de usuário e nossa
          Política de Privacidade
        </DisclaimerText>
        <DisclaimerCheck class="container">
          <input type="checkbox"></input>
          <span class="checkmark"></span>
          Eu concordo em receber emails sobre coisas legais no Labeddit
        </DisclaimerCheck>
        <ButtonSignup onClick={signup}>Cadastrar</ButtonSignup>
      </ContainerButtons>
    </ContainerSignup>
  );
};

export default SignUpPage;

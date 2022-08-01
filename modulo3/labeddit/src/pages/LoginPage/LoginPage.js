import React, { useState } from "react";
import axios from "axios";
import { ContainerLogin, ContainerLogo, ContainerInputs, ContainerButtons, 
 ButtonContinue, ButtonSignup, Input, Line, Subhead, Logo} from "./styled";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Constants/baseURL";
import logo from "../../Assets/logo.png";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/signup");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: senha,
    };

    axios
      .post(
        `${baseURL}/users/login
            `,
        body
      )
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
    <ContainerLogin>
      <ContainerLogo>
        <Logo src={logo} alt="logo labeddit" />
        <Subhead> O Projeto de rede social da Labenu</Subhead>
      </ContainerLogo>
      <ContainerInputs>
        <Input
          type="text"
          onChange={onChangeEmail}
          placeholder="Email*"
          value={email}
          name={"email"}
          required
        ></Input>
        <Input
          type="text"
          onChange={onChangeSenha}
          placeholder="Senha*"
          value={senha}
          name={"senha"}
          required
        ></Input>
      </ContainerInputs>
      <ContainerButtons>
        <ButtonContinue onClick={login}>
          Continuar
        </ButtonContinue>
        <Line/>
        <ButtonSignup onClick={goToSignUpPage}>
          Crie uma conta!
        </ButtonSignup>
      </ContainerButtons>
    </ContainerLogin>
  );
};

export default LoginPage;

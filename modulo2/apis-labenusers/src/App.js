import React from "react";
import axios from "axios";
import ListScreen from "./components/ListScreen";
import styled from "styled-components"

const FormContainer = styled.div`
padding: 30px;
padding-top: 2%;
border: 2px solid black;
margin:5% auto;
width: 30%;
display:block;
flex-direction: column;

`


export default class App extends React.Component {
  state = {
    userName: "",
    userEmail: "",
    listScreen: false
  };


  createUser = () => {
    const newUser = {
      name: this.state.userName,
      email: this.state.userEmail
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        newUser,
        {
          headers: {
            Authorization: "bruno-monteiro-alves"
          }
        }
      )
      .then((response) => {
        console.log(response);
        response.status === 201 && alert("o usuario foi criado com sucesso");
        // this.pegarPlaylists();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  onChangeUserEmail = (e) => {
    this.setState({ userEmail: e.target.value });
  };

  changeScreen = () => {
    this.setState({ listScreen: !this.state.listScreen });
  };

  render() {
    return (
      <FormContainer>
        <button onClick={this.changeScreen}>Trocar de Tela</button>
        {this.state.listScreen ? (
          <ListScreen/>
        ) : (
          <div>
            <input
              value={this.state.userName}
              onChange={this.onChangeUserName}
              placeholder="Nome"
            />
            <input
              value={this.state.userEmail}
              onChange={this.onChangeUserEmail}
              placeholder="Email"
            />
             <button onClick={this.createUser}>Criar Usuario</button>
          </div>
        )}
      </FormContainer>
    );
  }
}

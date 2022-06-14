import './App.css';
import React from 'react';
import styled from 'styled-components'
import Message from './components/Message/Message';
import Form from './components/Form/Form';

const MainContainer = styled.div`
  max-width: 600px;
  margin: auto;
  height: 100vh;
  border: 1px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`

const ContainerLista = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 20px;
`



class App extends React.Component {
  state = {
    messages: [],
    valorInputRemetente: "",
    valorInputMensagem: "",

  };

  onChangeInputRemetente = (event) => {

    this.setState({ valorInputRemetente: event.target.value });
  };

  onChangeInputMensagem = (event) => {

    this.setState({ valorInputMensagem: event.target.value });
  };

  enviaMensagem = (event) => {
    let novaMensagem = {
      remetente: this.state.valorInputRemetente,
      mensagem: this.state.valorInputMensagem
    }

    let novoArray = [...this.state.messages, novaMensagem]
    this.setState({ valorInputRemetente: "" })
    this.setState({ valorInputMensagem: "" })


    this.setState({ messages: novoArray })

  };

  onKeyPressInput = (event) => {
    console.log("chegou")
    if (event.key === 'Enter') {
      this.enviaMensagem();
    }

  }

  render() {
    const listaDeComponentes = this.state.messages.map((message) => {

      return (
        <Message
          remetente={message.remetente}
          mensagem={message.mensagem}
        />
      );
    });
    return (
      <MainContainer>
        <ContainerLista>
          {listaDeComponentes}
        </ContainerLista>
        <Form
          valorInputRemetente={this.state.valorInputRemetente}
          valorInputMensagem={this.state.valorInputMensagem}
          onChangeInputRemetente={this.onChangeInputRemetente}
          onChangeInputMensagem={this.onChangeInputMensagem}
          onKeyPressInput={this.onKeyPressInput}
          enviaMensagem={this.enviaMensagem}
        />
      </MainContainer>
    );
  }
}

export default App;
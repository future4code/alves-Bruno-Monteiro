import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const CampoTexto = styled.input`
  margin: 10px;
  width: 100%;
  height: 20px;
`

const Botao = styled.button`
  margin: 10px;
  width: 80%;
  height: 30px;
  background-color: plum;
  border: 2px solid black;
  border-radius: 8px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Bruninho",
        fotoUsuario: 'https://picsum.photos/60',
        fotoPost: "https://picsum.photos/250"
      },
      {
        nomeUsuario: "Mari",
        fotoUsuario: 'https://picsum.photos/50',
        fotoPost: "https://picsum.photos/300"
      }

    ],
    valorInputNomeInsta: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  onChangeInputNomeInsta = (event) => {

    this.setState({ valorInputNomeInsta: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {

    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {

    this.setState({ valorInputFotoPost: event.target.value });
  };

  adicionaPost = (event) => {
    let novoPost = {
      nomeUsuario: this.state.valorInputNomeInsta,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    let novoArray = [...this.state.posts, novoPost]
    this.setState({ valorInputNomeInsta: "" })
    this.setState({ valorInputFotoUsuario: "" })
    this.setState({ valorInputFotoPost: "" })


    this.setState({ posts: novoArray })

  };

  render() {
    const listaDeComponentes = this.state.posts.map((pessoa) => {

      return (
        <Post
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        <Formulario>
          <h2>Adicionar Post</h2>
          <CampoTexto

            value={this.state.valorInputNomeInsta}

            onChange={this.onChangeInputNomeInsta}
            placeholder={"Nome do Usuario"}
          />
          <CampoTexto

            value={this.state.valorInputFotoUsuario}

            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do Usuario"}
          />

          <CampoTexto

            value={this.state.valorInputFotoPost}

            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do Post"}
          />

          <Botao onClick={this.adicionaPost}>Enviar</Botao>
        </Formulario>
        {listaDeComponentes}
      </MainContainer>
    );
  }
}

export default App;

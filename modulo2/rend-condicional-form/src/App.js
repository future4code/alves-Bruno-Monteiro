import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';

const MainContainer = styled.div`
  margin: auto;
  flex: 1 1 0%;
  font-family: sans-serif;
  text-align:center; 
  display: block;

`

class App extends React.Component {

  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    console.log(this.state.etapa)
    switch (this.state.etapa) {
      case 1: return <Etapa1/>;
      case 2: return <Etapa2/>;
      case 3: return <Etapa3/>;
      case 4: return <EtapaFinal/>;
      default: return <Etapa1/>
    }

  };

  irParaProximaEtapa = () =>{
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {
    return (
      <MainContainer>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      </MainContainer>
    )
  }
};



export default App;

import React, { Component } from 'react'
import GetPlaylist from './components/GetPlaylist'
import CreatPlaylist from './components/CreatePlaylist'
import styled from 'styled-components'


export default class App extends Component {
  render() {
    return (
      <TelaPrincipal>
        <Container>
          <CreatPlaylist />
          <GetPlaylist/>
        </Container>
      </TelaPrincipal>
    )
  }
}

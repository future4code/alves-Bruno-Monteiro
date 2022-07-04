import React, { Component } from 'react'
import CreatePlaylist from './components/CreatePlaylist'
import GetPlaylist from './components/GetPlaylist'
import styled from 'styled-components'

const MainScreen = styled.div`
  background-color: #1DB954;
  display: flex;
  align-items: center;
  margin-top: 20px;
  `

const Container = styled.div`
  width: 1120px;
  margin: 50px auto;
  padding: 50px;
  text-align: center;
  border-radius: 10px;
  background-color: white;
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
`

export default class App extends Component {
  render () {
    return (


        <MainScreen>
          <Container>
            <CreatePlaylist />
            <GetPlaylist />
          </Container>
        </MainScreen>
    )
  }
}
import React, { Component } from 'react'
import CreatePlaylist from './components/CreatePlaylist'
import GetPlaylist from './components/GetPlaylist'
import styled from 'styled-components'

export default class App extends Component {
  render() {
    return (
      
        <div>
          <CreatePlaylist />
          <GetPlaylist />
        </div>
      
    )
  }
}
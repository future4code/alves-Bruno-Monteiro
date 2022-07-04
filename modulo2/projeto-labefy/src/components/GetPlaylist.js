import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const InsertText = styled.label`
    font-size: 18px;
`

const MainContainer = styled.div`
    text-align: center;
    
`
const TextField = styled.input`
    border-radius: 20px;
    text-align: center;
    height: 25px;
    font-size: 20px;
    margin-right: 10px;
    &:focus {
        outline: none;
        box-shadow: 2px 2px 2px #1DB954;
    }
`
const Button = styled.button`
    margin: 10px;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background-color: #1DB954;
    border-color: #1DB954;
    color: black;
    :hover{
        top:-4px;
        box-shadow:0 4px 3px #999;
        background-color: white;
        color: #1DB954;   
  }
`

export default class GetPlaylist extends Component {
  state = {
      playlist: [],
      musicas: [],
      telas: 1,
      nome: '',
      artista: '',
      url: '',
      idPlaylist: '',
      title: ''
  }

  componentDidUpdate() {
      this.getAllPlaylists()
  }

  getAllPlaylists = () => {

      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
          headers: {
              Authorization: 'bruno-monteiro-alves'
          }
      }).then(response => {
          this.setState({ playlist: response.data.result.list })
      }).catch(error => {
          console.log(error.response.data.message)
      })
  }

  deletePlaylist = (id) => {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
          headers: {
            Authorization: 'bruno-monteiro-alves'
          }
      }).then(response => {
          let novasMusicas = this.state.playlist.filter((musicas) => {
              return id !== musicas.id
          })

          this.setState({ playlist: novasMusicas, })
      }).catch(error => {
          console.log(error.response.data.message)
      })
  }

  getPlaylistTracks = (id, title) => {
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
          headers: {
            Authorization: 'bruno-monteiro-alves'
          }
      }).then(response => {
          this.setState({ musicas: response.data.result.tracks, telas: 2, idPlaylist: id, title: title})
      }).catch(error => {
          console.log(error.response.data.message)
      })
  }

  addTrackToPlaylist = (id) => {

      let body = {
          'name': this.state.nome,
          'artist': this.state.artista,
          'url': this.state.url
      }

      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
          headers: {
            Authorization: 'bruno-monteiro-alves'
          }
      }).then(() => {
          this.setState({ nome: '', artista: '', url: '' })
      }).catch(error => {
          console.log(error.response.data.message)
      })
  }

  removeTrackFromPlaylist = (id) => {
      let idPlaylist = this.state.idPlaylist
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${id}`, {
          headers: {
            Authorization: 'bruno-monteiro-alves'
          }
      }).then(() => {
          let novaLista = this.state.musicas.filter((musica) => {
              return id !== musica.id
          })

          this.setState({ musicas: novaLista })
      }).catch(error => {
          console.log(error.response.data.message)
      })
  }

  telaAdicionarMusicas = () => {
      this.setState({ telas: 3 })
  }

  telaLista = () => {
      this.setState({ telas: 1 })
  }

  campoNome = (e) => {
      this.setState({ nome: e.target.value })
  }
  campoArtista = (e) => {
      this.setState({ artista: e.target.value })
  }
  campoURL = (e) => {
      this.setState({ url: e.target.value })
  }

  render() {

      const listaMusicas = this.state.playlist.map((playlist) => {
          return <div key={playlist.id}>
              <h3>{playlist.name}</h3>
              <Button onClick={() => { this.deletePlaylist(playlist.id) }}>Delete</Button>
              <Button onClick={() => { this.getPlaylistTracks(playlist.id, playlist.name) }}>View Songs</Button>
          </div>
      })

      const musica = this.state.musicas.map((musicas) => {
          return <div key={musicas.id}>
              <h3>{this.state.title}</h3>
              <p><strong>Song: </strong>{musicas.name}</p>
              <p><strong>Artist: </strong>{musicas.artist}</p>
              <a href={musicas.url} target="_blank"><Button>Play</Button></a>
              <Button onClick={() => { this.removeTrackFromPlaylist(musicas.id) }}>Delete</Button>
          </div>
      })

      let titulo = this.state.title
      let AddLogic
      if (this.state.telas === 1) {
          AddLogic = <div>
              <Button onClick={() => this.getAllPlaylists()}>Search</Button>
              {listaMusicas}
          </div>
      } else if (this.state.telas === 2) {
          AddLogic = <div>
              {musica}
              <Button onClick={() => this.telaLista()}>Back</Button>
              <Button onClick={() => this.telaAdicionarMusicas()}>Add Song</Button>
          </div>
      } else {
          AddLogic = <div>
              <h3>{titulo}</h3>
              <p>Add a song to the playlist {titulo} by filling out the details below</p>
              <InsertText>Name: </InsertText>
              <TextField value={this.state.nome} onChange={this.campoNome} placeholder='' />
              <InsertText>Artist: </InsertText>
              <TextField value={this.state.artista} onChange={this.campoArtista} placeholder='' />
              <InsertText>URL: </InsertText>
              <TextField value={this.state.url} onChange={this.campoURL} placeholder='' />
              <Button onClick={() => { this.addTrackToPlaylist(this.state.idPlaylist) }}>Add</Button>
              <Button onClick={() => this.telaLista()}>Back</Button>
          </div>
      }

      return (
          <MainContainer>
              {AddLogic}
          </MainContainer>
      )
  }
}
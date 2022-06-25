import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


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
              <button onClick={() => { this.deletePlaylist(playlist.id) }}>Delete</button>
              <button onClick={() => { this.getPlaylistTracks(playlist.id, playlist.name) }}>View Songs</button>
          </div>
      })

      const musica = this.state.musicas.map((musicas) => {
          return <div key={musicas.id}>
              <h3>{this.state.title}</h3>
              <p><strong>Song: </strong>{musicas.name}</p>
              <p><strong>Artist: </strong>{musicas.artist}</p>
              <a href={musicas.url} target="_blank"><button>Play</button></a>
              <button onClick={() => { this.removeTrackFromPlaylist(musicas.id) }}>Delete</button>
          </div>
      })

      let titulo = this.state.title
      let testeLogico
      if (this.state.telas === 1) {
          testeLogico = <div>
              <button onClick={() => this.getAllPlaylists()}>Search</button>
              {listaMusicas}
          </div>
      } else if (this.state.telas === 2) {
          testeLogico = <div>
              {musica}
              <button onClick={() => this.telaLista()}>Back</button>
              <button onClick={() => this.telaAdicionarMusicas()}>Add Song</button>
          </div>
      } else {
          testeLogico = <div>
              <h3>{titulo}</h3>
              <p>Add a song to the playlist {titulo} by filling out the details below</p>
              <label>Name: </label>
              <input value={this.state.nome} onChange={this.campoNome} placeholder='Name' />
              <label>Artist: </label>
              <input value={this.state.artista} onChange={this.campoArtista} placeholder='Artist' />
              <label>URL: </label>
              <input value={this.state.url} onChange={this.campoURL} placeholder='URL' />
              <button onClick={() => { this.addTrackToPlaylist(this.state.idPlaylist) }}>Add</button>
              <button onClick={() => this.telaLista()}>Back</button>
          </div>
      }

      return (
          <div>
              {testeLogico}
          </div>
      )
  }
}
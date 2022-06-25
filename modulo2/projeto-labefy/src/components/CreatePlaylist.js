import React from "axios"
import styled from "styled-components"
import React, { Component } from 'react'

export default class CreatePlaylist extends Component {

    state = {
        name: ""
    }

    CriarPlaylist = (event) => {
        this.setState({ name: event.target.value })
    }

}
    AdicionarMusica = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
        name: this.state.name,

    }
    axios.post(url, body, {
        headers: {
            Authorization: "bruno-monteiro-alves"
        }
    }.then((response => {
        console.log(response.data)
        this.setState({ name: "" })

    }))).catch((error) => {
        console.log(error.response.data.message)
    }
    )

    campoDados = (event) => {
        this.setState({ name: event.target.value })
    }
    render()
    
    return (

        <Container>
            <h2>Labefy</h2>
            <p>Give your playlist a name</p>
            <LeituraTexto>Name:</LeituraTexto>
            <CampoTexto value={this.state.name} onChange={this.campoDados} placeholder='Name'></CampoTexto>
            <Button onClick={() => this.createPlaylist()}>Create</Button>
        </Container>
    )
}







import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


export default class CreatePlaylist extends Component {
    state = {
        name: ''
    }

    createPlaylist = () => {

        let body = {
            name: this.state.name
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {
            headers: {
                Authorization: 'bruno-monteiro-alves'
            }
        }).then((response) => {
            console.log(response.data)
            this.setState({name: ''})
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }

    addData = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        return (
            <div>
                <h2>Labefy</h2>
                <p>Give your Playlist a name</p>
                <label>Name:</label>
                <input value={this.state.name} onChange={this.addData} placeholder="Name"></input>
                <button onClick={() => this.createPlaylist()}>Add</button>
            </div>
        )
    }
}   
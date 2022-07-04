import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import styledComponents from 'styled-components'

const InsertText = styled.label`
    font-size: 18px;
    `

const MainContainer = styled.div`
    text-align: center;
    color:black ;

`

const TextField = styled.input`
    border-radius: 20px;
    text-align: center;
    height: 25px;
    font-size: 20px;
    &:focus {
        outline: none;
        box-shadow: 2px 2px 2px #1DB954;
    }
`

const Button = styled.button`
    margin: 10px;
    width: 50px;
    height: 35px;
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

const Text = styled.div`
   color: #1DB954; 
    font-size: 40px;

`

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
            this.setState({ name: '' })
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }

    addData = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        return (
            <MainContainer>
                <Text>Labefy</Text>
                <p>Give your Playlist a name</p>
                <InsertText>Name: </InsertText>
                <TextField value={this.state.name} onChange={this.addData} placeholder="E.g. Rock"></TextField>
                <Button onClick={() => this.createPlaylist()}>Add</Button>
            </MainContainer>
        )
    }
}   
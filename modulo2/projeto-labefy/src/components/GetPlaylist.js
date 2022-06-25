import React, { Component } from 'react'
import styled from "styled-components"
import axios from "axios"
import { render } from "@testing-library/react"

export default class GetPlaylist extends Component {

    state = {
        songs: [],
        playlist: [],
        title: "",
        screen: 1,
        name: "",
        idPlaylist: "",
        url: "",
        artist: ""
    }

    componentDidUpdate() {
        this.getAllPlaylist()
    }

}
getAllPlaylist = () => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {
        headers: {
            Authorization: "bruno-monteiro-alves"
        }
    }).then(response => {
        this.setState({ playlist: response.data.result.list })
    }).catch(error => {
        console.log(error.response.data.message)
    })
}

deletePlaylist = (id) => {

}
axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {

    headers: {
        Authorization: "bruno-monteiro-alves"
    }
}).then(response => {
    let addNewSongs = this.state.playlist.filter((songs) => {
        return id !== songs.id
    })

    this.setState({ playlist: addNewSongs, })
}).catch(error => {
    console.log(error.response.data.message)
})

getPlaylistTracks = (id, title) => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks", {
        headers: {
            Authorization: "bruno-monteiro-alves"
        }
    }).then(response => {
        this.setState({ songs: response.data.result.tracks, screen: 2, idPlaylist: id, title: title })
    }).catch(error => {
        console.log(error.response.data.message)
    })
}

addTrackToPlaylist = (id) => {

    let body = {

        "name": this.state.name,
        "artist": this.state.artist,
        "url": this.state.url
    }

}
axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {

    headers: {
        Authorization: "bruno-monteiro-alves"
    }
}).then(() => {
    this.setState({ name: '', artist: '', url: '' })
}).catch(error => {
    console.log(error.response.data.message)
})


removeTrackFromPlaylist = () => {

    let idPlaylist = this.state.idPlaylist
    axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${id}', {
        headers: {
            Authorization: 'bruno-monteiro-alves'
        }
    }).then(() => {
        let newSongList = this.state.songs.filter((songs) => {
            return id !== songs
        })

        this.setState({ songs: newSongList })
    }).catch(error => {
        console.log(error.response.data.message)
    })
}

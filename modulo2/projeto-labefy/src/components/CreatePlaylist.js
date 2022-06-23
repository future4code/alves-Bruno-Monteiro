import React from "react"
import React from "axios"

export default class CriarPlaylist extends React.Component {

    state = {
        nome: ""
    }
    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    MusicaCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome,

        }
        axios.post(url, body, {
            headers: {
                Authorization: "bruno-monteiro-alves"
            }
        })

    }
    render() {
        return (
            <div>CriarPlaylist</div>
        )
    }

}
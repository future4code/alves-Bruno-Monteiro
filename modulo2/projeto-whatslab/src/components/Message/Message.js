import React from 'react'
import styled from 'styled-components'

const TextoNegrito = styled.span`
   font-weight: bold;
`

class Message extends React.Component {
    render() {
        return  <p><TextoNegrito>{this.props.remetente}</TextoNegrito>: {this.props.mensagem}</p>
    }
}

export default Message

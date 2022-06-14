import React from 'react'

class CampoTexto extends React.Component {

    render() {
        return <input
        value={this.props.valorInput}
        onChange={this.props.onChangeInput}
        placeholder={this.props.placeholder}
        style={this.props.style}
        onKeyPress={this.props.onKeyPressInput}   
        />
    }
}

export default CampoTexto 

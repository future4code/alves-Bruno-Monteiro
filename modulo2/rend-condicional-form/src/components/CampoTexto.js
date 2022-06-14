import React from 'react'

class CampoTexto extends React.Component {

    render() {
        return <input
        value={this.props.valorInput}
        onChange={this.props.onChangeInput}

        />
    }
}

export default CampoTexto 
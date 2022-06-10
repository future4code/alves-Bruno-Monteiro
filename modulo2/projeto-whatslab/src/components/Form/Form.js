import React from 'react'
import CampoTexto from '../CampoTexto/CampoTexto';

class Form extends React.Component {

    render() {
        return <div>
            <CampoTexto

                valorInput={this.props.valorInputRemetente}
                onChangeInput={this.props.onChangeInputRemetente}
                placeholder={"Usuário"}
                style={{ width: '18%'}}
            />
            <CampoTexto
                valorInput={this.props.valorInputMensagem}
                onChangeInput={this.props.onChangeInputMensagem}
                placeholder={"Mensagem"}
                style={{ width: '70%'}}
                onKeyPressInput={this.props.onKeyPressInput}
            />
            <button onClick={this.props.enviaMensagem}>Enviar</button>
        </div>
    }
}

export default Form 

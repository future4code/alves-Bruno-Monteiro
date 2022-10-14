import React from 'react'
import { useNavigate } from 'react-router-dom'
import Erro from "../../img/Error.png"
import { DivContainer, DivText, Img } from './styled'

const ErrorPage = ()=>{
    const navigate = useNavigate()

    const onClickHome = () =>{
        navigate("/")
    }

    return (
        <DivContainer>
            <DivText>
                <h1>This page could not be found</h1>
                <p>Unfortunately we couldn't find this page! Return to home page.</p>
                <button onClick={onClickHome}>Home Page</button>
            </DivText>
            <div>
                <Img src={Erro} alt={"astronaut error"}/>
            </div>
        </DivContainer>
       
    )
}

export default ErrorPage
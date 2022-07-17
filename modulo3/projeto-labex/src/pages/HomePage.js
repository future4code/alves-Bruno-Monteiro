import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: block;
    margin: auto;
    width: 40%;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    margin: 20px;
    margin-top: 50px;
    justify-content: space-between;
`

export const HomePage = (props) => {
    const navigate = useNavigate()

    const goToTripsPage = () => {
        navigate("/trips")
    }

    const goToLoginPage = () => {
        navigate("/login")
    }

    const goToAdminPage = () => {
        navigate("/admin")
    }

    const token = window.localStorage.getItem('token')

    return (
        <HomeContainer>
            <h2>Labex</h2>
        <ButtonContainer>
            <button onClick={goToTripsPage}>Ver Viagens</button>
            {token ? (<button onClick={goToAdminPage}>Admin</button>) : (<button onClick={goToLoginPage}>Login</button>) }
        </ButtonContainer>
        </HomeContainer>
    );
}

export default HomePage;

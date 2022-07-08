import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { IconButton, Heading, Image } from '@chakra-ui/react'
import { BiMessageDetail } from 'react-icons/bi'
import { IoPeople } from 'react-icons/io5'
import ProfileScreen from "./components/ProfileScreen";
import ListScreen from "./components/ListScreen";
import styled from "styled-components"
import logoImg from "./img/astrologo.png"
import astroMatchLogo from "./img/AstroMatch3.png"



const BoxMainContent = styled.div`
  display: flex;
  padding: 20px 20px 0px;
  flex-direction: column;
  justify-content: flex-end;
  
`

const Header = styled.div`
    height: 55px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
    background: #F2F2F2;
    -moz-border-radius: 0px;
    -webkit-border-radius: 5px 7px 0px 0px;
    border-radius: 5px 7px 0px 0px; 
    
`

const MainContainer = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 7px;
    background: #F2F2F2;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 5px;
   
`


function App() {

  const [screenProfile, setScreenProfile] = useState(true)

  const changeIcon = () => {
    setScreenProfile(!screenProfile)
  };

  return (

    <ChakraProvider>
      <MainContainer>

        <Header>
          <Image src={logoImg} w={30}></Image>
          <Image src={astroMatchLogo} w={200}></Image>
          {screenProfile ? <IconButton cursor="pointer" aria-label='profile screen' color="#F26666" size='md' onClick={changeIcon} as={BiMessageDetail} /> : <IconButton aria-label='match screen' color="#F26666" size='md' cursor="pointer" onClick={changeIcon} as={IoPeople} />}
        </Header>
        <BoxMainContent>
          {screenProfile ? <ProfileScreen></ProfileScreen> : <ListScreen> </ListScreen>}
        </BoxMainContent>
      </MainContainer>
    </ChakraProvider>
  );
}

export default App;

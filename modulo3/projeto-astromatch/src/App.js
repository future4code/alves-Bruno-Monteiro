import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from '@chakra-ui/react'
import { FaListUl } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'
import ProfileScreen from "./components/ProfileScreen";

function App() {

  const [screenProfile, setScreenProfile] = useState(true)

  const changeIcon = () => {
    setScreenProfile(!screenProfile)
  };

  return (

    <ChakraProvider>
      <header>
        {screenProfile ? <Icon onClick={changeIcon} as={FaListUl} /> : <Icon onClick={changeIcon} as={IoPeople} />}
      </header>
      <ProfileScreen>

      </ProfileScreen>
    </ChakraProvider>
  );
}

export default App;

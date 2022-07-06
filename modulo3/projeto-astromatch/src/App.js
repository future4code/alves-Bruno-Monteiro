import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { Icon } from '@chakra-ui/react'
import { FaListUl } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'
import ProfileScreen from "./components/ProfileScreen";
import ListScreen from "./components/ListScreen";
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
      {screenProfile ? <ProfileScreen></ProfileScreen> : <ListScreen> </ListScreen>}
    </ChakraProvider>
  );
}

export default App;

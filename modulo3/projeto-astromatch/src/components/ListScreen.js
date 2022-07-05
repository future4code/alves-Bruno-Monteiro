import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from '@chakra-ui/react'
import { FaListUl } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'

function ListScreen(props) {

  const [screenProfile, setScreenProfile] = useState(true)

  const changeIcon = () => {
    setScreenProfile(!screenProfile)
  };

  return (

    <div>
    </div>
  );
}

export default ListScreen;

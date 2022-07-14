import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import React, { useState, useEffect } from "react";
import axios from "axios";
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';

function App() {
  const [viagens, setViagens] = useState([])


  const pegaViagens = () => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/brunomonteiro/trips`)
      .then(response => {

        setViagens(response.data.trips);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {

    pegaViagens();
  }, [])



  return (
    <div>
      <HomePage></HomePage>
      <ListTripsPage viagens={viagens}></ListTripsPage>
      <ApplicationFormPage></ApplicationFormPage>
    </div>
  );
}

export default App;

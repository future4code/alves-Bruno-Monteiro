import logo from './logo.svg';
import './App.css';
import {HomePage} from './pages/HomePage';
import React, { useState, useEffect } from "react";
import axios from "axios";
import ListTripsPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import { Router } from "./routes/Router";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;

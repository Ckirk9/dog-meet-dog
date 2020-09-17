import React from "react";
import Header from "./components/Header"
import Routes from './config/routes'
import PetModel from './models/pet'
import { useHistory } from "react-router-dom"

import { useState } from 'react';
import "./App.css";

function App(props) {
  const [currentPet, setCurrentPet] = useState(localStorage.getItem('uid'))
  const [showBackButton, setShowBackButton] = useState(false)

  const storePet = petId => {
    setCurrentPet({ currentPet: petId })
    localStorage.setItem('uid', petId)
  }
  const logout = event => {
    event.preventDefault()
    localStorage.removeItem('uid')
    PetModel.signOut()
    .then(data => {
      setCurrentPet(null)
      props.history.push('/')
    })
  }
  const history = useHistory()
  history.listen((location) => {
    setShowBackButton(location.pathname === "/message")
});
  console.log('History: ', history);
  return (
    <div className="App">
      <div>
      <Header
      backButton={ showBackButton }
      currentPet={ currentPet }
      logout={ logout } 
      />
      </div>
      <Routes
      currentPet={ currentPet }
      storePet={ storePet }
      />
    </div>
  );
}

export default App;

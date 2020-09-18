import React from "react";
// import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"
import { useState } from 'react';
import Header from "./components/Header"
import Routes from './config/routes'
import PetModel from './models/pet'
import "./App.css";

function App(props) {
  const [currentPet, setCurrentPet] = useState(localStorage.getItem('uid'))
  const [showBackButton, setShowBackButton] = useState(false)
  const history = useHistory();
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
      history.replace('/')
    })
  }
  history.listen((location) => {
    setShowBackButton(location.pathname === "/message")
});
  console.log('Current Pet: ', currentPet);
  return (
    <div className="App">
      { currentPet 
        ? <Header backButton={ showBackButton }
          currentPet={ currentPet }
          logout={ logout }/>
        : null }
      <Routes currentPet={ currentPet }
        storePet={ storePet }/>
      { currentPet 
        ?
        <div style={ { position: "absolute", bottom: 0, color: 'whitesmoke', cursor: 'grab',}} onClick={ logout }>Logout</div> 
        : null}
    </div>
  );
}

export default App;

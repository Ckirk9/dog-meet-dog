import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import PetCards from './components/PetCards'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Switch/>
      <Route path="/chat">
          <h1>chat page</h1>
        </Route>
        <Route exact path="/">
          <h1>homepage</h1>
        </Route>
        <PetCards />
      </Router>
      {/* pet profile cards  */}
      {/* buttons below profile cards  */}

      {/* messaging screen */}
      {/* individual messaging screen */}

    </div>
  );
}

export default App;

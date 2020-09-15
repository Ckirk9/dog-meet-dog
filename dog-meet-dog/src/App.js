import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import PetCards from './components/PetCards'
import SwipeButtons from './SwipeButtons'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/message">
          <Header backButton="/" />
          <h1>chat page</h1>

        </Route>
        <Route exact path="/">
          <Header/>
          <PetCards />
          <SwipeButtons />
        </Route>
        </Switch>
      </Router>

      {/* messaging screen */}
      {/* individual messaging screen */}

    </div>
  );
}

export default App;

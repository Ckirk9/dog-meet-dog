import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import PetCards from './components/PetCards'
import LikeButtons from './LikeButtons'
import Messages from './components/Messages'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/message">
          <Header backButton="/" />
          <Messages />

        </Route>
        <Route exact path="/">
          <Header/>
          <PetCards />
          <LikeButtons />
        </Route>
        </Switch>
      </Router>

      {/* messaging screen */}
      {/* individual messaging screen */}

    </div>
  );
}

export default App;

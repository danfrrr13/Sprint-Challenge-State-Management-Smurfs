import React, { Component } from "react";

import "./App.css";
import 'semantic-ui-css/semantic.min.css'

import Smurfs from '../Smurfs/';
import SmurfForm from '../SmurfForm/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

export default App;

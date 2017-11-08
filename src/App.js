import React, { Component } from 'react';
import './App.css';
import Hangman from './components/Hangman.js'
import Pirateslogo from './images/pirateslogo.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Hangman</h1>
          <h2 >Guess the four letter pirate word</h2>
          <img src = {Pirateslogo} alt="pirates"/>
          <hr />
          <Hangman />
      </div>
    )
  }
}

export default App;

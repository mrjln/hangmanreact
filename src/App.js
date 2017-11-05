import React, { Component } from 'react';
import './App.css';
import Hangman from './components/Hangman.js'
import Addguess from './components/AddGuess.js'
import Pirateslogo from './images/pirateslogo.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Hangman</h1>
          <img src = {Pirateslogo} />

            <label>
              Take a guess, write a letter and hit `Guess`
            </label>
            <h1>Add a guess </h1>
            <Addguess />
          <Hangman />
      </div>
    )
  }
}

export default App;

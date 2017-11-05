import React, { Component } from 'react';
import './App.css';
import Hangman from './components/Hangman.js'
import Addguess from './components/AddGuess.js'
import Pirateslogo from './images/pirateslogo.jpg'
import Pirateslife from './images/piratelife.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Hangman</h1>
          <img src = {Pirateslogo} />
          <hr />
            <label>
              Take a guess, write a letter and hit `Guess`
            </label>
            <h1>Add a guess </h1>
          <Hangman />
          <h1>Lifes left </h1>
          <img class="life" src = {Pirateslife} alt= "life"/>
          <img class="life" src = {Pirateslife} alt= "life" />

      </div>


    )
  }
}

export default App;

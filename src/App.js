import React, { Component } from 'react';
import './App.css';
import Hangman from './components/Hangman.js'
import WrongGuessCount from './components/Wrongguesscount.js'
import Showguess from './components/Showguess.js'
import Pirateslogo from './images/pirateslogo.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Hangman</h1>
          <img src = {Pirateslogo} />
          <form>
            <label>
              Guess:
              <input type="text" name="name" pattern="[A-Za-z]{1}"  />
            </label>
            <input type="Guess" value="Guess" />
          </form>
          <h1>Wrong Guess Count: </h1>
          <WrongGuessCount  />
          <Showguess />
      </div>
    );
  }
}

export default App;

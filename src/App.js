import React, { Component } from 'react';
import './App.css';
import Hangman from './components/hangman.js'
import WrongGuessCount from './components/wrongguesscount.js'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Hangman</h1>
          <form>
            <label>
              Guess:
              <input type="text" name="name" pattern="[A-Za-z]{1}"  />
            </label>
            <input type="Guess" value="Guess" />
          </form>
          <Hangman />
          <WrongGuessCount amountofwrongguesses = "3" />
      </div>
    );
  }
}

export default App;

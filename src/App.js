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
              Take a guess, write a letter and hit `Guess`
              <hr />

              <input type="text" name="name" pattern="[A-Za-z]{1}" value="your letter here" />
            </label>

          </form>

          <Hangman />

      </div>
    )
}
}

export default App;

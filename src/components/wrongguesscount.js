/* import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class wrongGuessCount extends PureComponent {

   wrongGuessCount(word, guesses) {
      var amountOfWrongGuesses = 0
      var i = 0
      for(i=0; i < guesses.length; i++ ) {
          if(word.indexOf(guesses[i]) === -1){
          amountOfWrongGuesses += 1
        }
      }
      amountOfWrongGuesses.toString()
      return  amountOfWrongGuesses
  }

    render() {
      return (
            <h1> { this.state.amountofwrongguesses} </h1>
              )
    }

}

export default wrongGuessCount */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

  class wrongGuessCount extends PureComponent {
    static propTypes = {
    amountofwrongguesses: PropTypes.string.isRequired,
  }

    render(){
        const { amountOfWrongGuesses } = this.props

        function wrongGuessCount(word, guesses) {
        var amountOfWrongGuesses = 0;
        var i = 0;
        for(i=0; i < guesses.length; i++ ) {
            if(word.indexOf(guesses[i]) === -1){
            amountOfWrongGuesses += 1;
          };
      }
      return amountOfWrongGuesses
  }
  return (
    <h1>Amount of wrong guesses: { this.props.amountofwrongguesses } </h1> )
}
}

export default wrongGuessCount

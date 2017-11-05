 import React, { PureComponent } from 'react'
 import Showguess from './components/Showguess'
 import WrongGuessCount from './components/Wrongguesscount'

class Hangman extends PureComponent {
  static propTypes = {
  word: PropTypes.string,
  guesses:PropTypes.array,
  isWinner: PropTypes.bool
}

  isWinner(word, guesses) {
  var lettercollection = word.split("");
    var filteredWord = lettercollection.filter(function(letter){
        return (guesses.indexOf(letter) === -1 )
    }
    if (filteredWord.length === 0) return true;
    else return false;
}


          function next(word, guesses) {

            word = word.toLowerCase()
              // check if lost
              console.log("Guesscount", wrongGuessCount(word,guesses))
              // check if won
              if (isWinner(word,guesses)) return;

              // ask for the next letter
              function question(answer) {
                  console.log("player wrote:", answer)
                  // do something with answer
                  var trimmedAnswer = answer.trim();
                  var lowerCasedAnswer = trimmedAnswer.toLowerCase();
                  guesses.push(lowerCasedAnswer);
                  showGuess(word, guesses);
                  next(word,guesses);
              }
            }



  return (
          )

}


export default Hangman */

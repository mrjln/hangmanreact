import React, { PureComponent } from 'react'

class Hangman extends PureComponent {
  render(){
    const { content } = this.props



    var joined = result.join(" ")
    console.log(joined)
    return joined
}

function isWinner(word, guesses) {
  var lettercollection = word.split("");
    var filteredWord = lettercollection.filter(function(letter){
       return (guesses.indexOf(letter) === -1 )
    })

    if (filteredWord.length === 0) return true;
    else return false;
}


function next(word, guesses) {

  word = word.toLowerCase()
    // check if lost
    console.log("Guesscount", wrongGuessCount(word,guesses))
    // check if won
    if (isWinner(word,guesses)) return console.log("winner!");


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
      <h1>{ content }</h1>
    )

}

}

export default Hangman

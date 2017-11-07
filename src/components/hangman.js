import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Showguess from './Showguess.js'

class Hangman extends PureComponent {
    render() {
      return(
              <div>
                    <Showguess />
              </div>
            )
    }
}

export default Hangman

 /*

 var letter = document.getElementById("userInput").value
 import React, { PureComponent } from 'react'
 import Showguess from './components/Showguess'
 import WrongGuessCount from './components/Wrongguesscount'
 import Showguess from '/components/Showguess'

class Hangman extends PureComponent {
  static propTypes = {
  word: PropTypes.string,
  guesses:PropTypes.array,
  iswinner: PropTypes.bool
}

    isWinner(word, guesses) {
    var lettercollection = word.split("");
      var filteredWord = lettercollection.filter(function(letter){
          return (guesses.indexOf(letter) === -1 )
      }
      if (filteredWord.length === 0), this.setState({iswinner: true})
      else, this.setState({iswinner: false})

  }

    /*next(word, guesses) {
    word = word.toLowerCase()
    if (isWinner(word,guesses))
    return <{alert('YOU WON!')}/>
  }


  getinputfromuser(answer) {
        console.log("player wrote:", answer)
        var trimmedAnswer = answer.trim();
        var lowerCasedAnswer = trimmedAnswer.toLowerCase();
        guesses.push(lowerCasedAnswer);
        this.setState({guesses: guesses});
        next(word,guesses);
    }

  return (

    <div> {this.state.iswinner} </div>
  )

}


export default Hangman */

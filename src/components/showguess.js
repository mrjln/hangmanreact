import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import AddGuess  from '../components/AddGuess.js'

class showGuess extends PureComponent {

 showGuessTekst(word, guesses) {
    word = "blob"
    guesses = ["w", "t", "o"]
  var lettercollection = word.split("");
  var dash = "_";

  var result = lettercollection.map(function(letter){
        if(guesses.indexOf(letter) === -1){
         return dash
       } else {
         return letter
       }
     })

     var joined = result.join(" ")
     console.log(joined)
     return joined
 }

 wrongGuessCount(word, guesses) {
    word = "blob"
    guesses = ["w", "t", "o"]
    let amountOfWrongGuesses = 0
    let i = 0
    for(i=0; i < guesses.length; i++ ) {
        if(word.indexOf(guesses[i]) === -1){
        amountOfWrongGuesses += 1
      }
    }
     amountOfWrongGuesses.toString()
     return amountOfWrongGuesses
     console.log(amountOfWrongGuesses)
}

 isWinner(word, guesses) {
    word = "blob"
    guesses = ["w", "t", "o"]

  var result
  var lettercollection = word.split("");
    var filteredWord = lettercollection.filter(function(letter){
       return (guesses.indexOf(letter) === -1 )
    })

    if (filteredWord.length === 0) return result = "WINNER" ;
    else return result= "You did not win yet, try again...";
}


 play(letter) {
   var word = "blob"
   var guesses = ["w", "t", "o"]
   var trimmedAnswer = letter.trim()
   var lowerCasedAnswer = trimmedAnswer.toLowerCase()
   guesses.push(lowerCasedAnswer)
   console.log(letter)

   this.isWinner(word,guesses)
   this.showGuessTekst(word, guesses)
   this.wrongGuessCount(word,guesses)

    }

 constructor(props) {
   super(props);
   this.state = {
     showguess: this.showGuessTekst(),
     wrongguesscount: this.wrongGuessCount(),
     iswinner: this.isWinner(),
     play: this.play(""),
   }
 }

render() {
  let input
  return (
    <div>
        <h1> Score: { this.state.showguess} </h1>
        <h1> Guess Count: {this.state.wrongguesscount} </h1>
        <h2> {this.state.iswinner} </h2>

        <AddGuess />
      </div>
          )
}

}

export default showGuess

import React, { PureComponent } from 'react'

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
var lettercollection = word.split("");
  var filteredWord = lettercollection.filter(function(letter){
      return (guesses.indexOf(letter) === -1 )
  }
  if (filteredWord.length === 0), this.setState({iswinner: true})
  else, this.setState({iswinner: false})

}

 constructor(props) {
   super(props);
   this.state = {
     showguess: this.showGuessTekst(),
     wrongguesscount: this.wrongGuessCount(),
   }
 }

render() {
  return (
    <div>
        <h1> Score: { this.state.showguess} </h1>
        <h1> Guess Count: {this.state.wrongguesscount} </h1>
    </div>
          )
}

}

export default showGuess

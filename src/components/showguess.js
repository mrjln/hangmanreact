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
     let showguess = this.state.showguess
     this.setState(showguess: showguess)
 }

 constructor(props) {
   super(props);
   this.state = {
     showguess: this.showGuessTekst(),
   }
 }

render() {
  return (
        <h1> Show guess { this.state.showguess} </h1>
          )
}

}

export default showGuess

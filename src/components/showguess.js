import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GuessForm  from '../components/GuessForm.js'
import PropTypes from 'prop-types'
import Pirateslife from '../images/piratelife.jpg'
import Fail from '../images/fail.jpg'

class showGuess extends PureComponent {
  static propTypes = {
    showguess: PropTypes.string,
    wrongguesscount: PropTypes.number,
    iswinner: PropTypes.string,
    guesses:PropTypes.array,
  }

render() {

  if(this.props.wrongguesscount === 5) {
    var fail =  <img className="life" src = {Fail} alt= "life"/>
  }
  if(this.props.wrongguesscount < 5) {
    var life1 =  <img className="life" src = {Pirateslife} alt= "life"/>
  }
  if(this.props.wrongguesscount < 4) {
    var life2 =  <img className="life" src = {Pirateslife} alt= "life"/>
  }
  if(this.props.wrongguesscount < 3) {
    var life3 =  <img className="life" src = {Pirateslife} alt= "life" />
  }
  if(this.props.wrongguesscount < 2) {
    var life4 =  <img className="life" src = {Pirateslife} alt= "life"/>
  }
  if(this.props.wrongguesscount < 1) {
    var life5 = <img className="life" src = {Pirateslife} alt= "life"/>
  }


  return (
        <div>
            <h1> Score: { this.props.showguess} </h1>
            <GuessForm />
            <h1> Wrong Guesses: {this.props.wrongguesscount} </h1>
            <h2> You Guessed: {this.props.guesses} </h2>
            <h1>Lifes left </h1>
            <h2> {this.props.iswinner} </h2>
            {fail}
            {life1}
            {life2}
            {life3}
            {life4}
            {life5}
        </div>
          )
}

}

const mapStateToProps =  function(state){
  return {
        showguess: state.guess.showguess,
        wrongguesscount: state.guess.wrongguesscount,
        iswinner: state.guess.iswinner,
        guesses: state.guess.guesses
    }
}

export default connect(mapStateToProps)(showGuess)



  /*constructor(props) {
    super(props);
    this.state = {
      showguess: this.showGuessTekst(),
      wrongguesscount: this.wrongGuessCount(),
      iswinner: this.isWinner(),
      play: this.play(""),
    }
  } */

 /* showGuessTekst(word, guesses) {
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

 } */

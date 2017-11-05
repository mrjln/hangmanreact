import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class showGuess extends PureComponent {
  static propTypes = {
  word: PropTypes.string,
  guesses:PropTypes.array,
  showguess: PropTypes.string.isRequired,
}

constructor(props) {
  super(props)
  this.state = {
    showguess: "h _ l l _",
  }
}

 showGuess(word, guesses) {
  var lettercollection = word.split("");
  var dash = "_";

  var result = lettercollection.map(function(letter){
        if(guesses.indexOf(letter) === -1){
         return dash
       } else {
         return letter
       };
     });

     var joined = result.join(" ")
     console.log(joined)
     return joined
 }

render() {
  return (
        <h1> { this.state.showguess} </h1>
          )
}

}

export default showGuess

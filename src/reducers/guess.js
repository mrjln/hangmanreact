import {ADD_GUESS} from '../actions/addguess'
//ik wil de variabele hebben die ADD_GUESS heet uit deze file

function showGuessTekst(word, guesses) {
 var lettercollection = word.split("")
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

function wrongGuessCount(word, guesses) {
   var amountOfWrongGuesses = 0
   let i = 0
   for(i=0; i < guesses.length; i++ ) {
       if(word.indexOf(guesses[i]) === -1){
       amountOfWrongGuesses += 1
     }
   }
    console.log(amountOfWrongGuesses)
    return amountOfWrongGuesses

}

function isWinner(word, guesses) {
 var result
 var lettercollection = word.split("");
   var filteredWord = lettercollection.filter(function(letter){
      return (guesses.indexOf(letter) === -1 )
   })

   if (filteredWord.length === 0) return result = "WINNER" ;
   else return result= "You did not win yet, try again...";
}

const initialState = {
  word: "bier",
  guesses: [],
  showguess: "_ _ _ _ ",
  wrongguesscount: 0,
  iswinner: "",
}

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case ADD_GUESS:
        return {
          word: state.word,
          guesses: state.guesses.concat(payload),
          wrongguesscount: wrongGuessCount(state.word, state.guesses),
          iswinner: isWinner(state.word, state.guesses),
          showguess: showGuessTekst(state.word, state.guesses),
        }
    default:
      return state

    }
  }

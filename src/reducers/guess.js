import ADD_GUESS from '../actions/addguess'

const word = "blob"
const guesses = ["k","o","b"]

export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_GUESS:
        return [payload]
      //de payload is 1 letter.

    default:
      return currentState
    }
  }

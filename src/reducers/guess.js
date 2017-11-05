import NEXT_GUESS from '../actions/nextguess'

const word = "blob"
const guesses = ["k","o","b"]

export default (currentState = [], { type, payload } = {}) => {
  switch(type) {
    case NEXT_GUESS:
        return [payload]
      //de payload is 1 letter.

    default:
      return currentState
    }
  }

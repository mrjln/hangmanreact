export const NEXT_GUESS = 'NEXT_GUESS'

let answer = "f"

export default (answer) => ({
  type: NEXT_GUESS,
  payload: answer
  }
)

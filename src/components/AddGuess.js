import React from 'react'
import { connect } from 'react-redux'
import addGuess  from '../actions/addguess.js'

let AddGuess = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addGuess(input.value))
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add letter
        </button>
      </form>
    </div>
  )
}
AddGuess = connect()(AddGuess)

export default AddGuess

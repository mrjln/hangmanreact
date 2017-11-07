
import { connect } from 'react-redux'
import addGuess  from '../actions/addguess.js'
import React, { PureComponent } from 'react'

class GuessForm extends PureComponent {


onChange(event){
  this.props.addGuess(event.target.value)
  event.target.value = ""
}

render() {
    return (
      <div>
        <form>
          <input onChange= {this.onChange.bind(this)}  />
          <button type="submit">
            Add letter
          </button>
        </form>
      </div>
    )
  }

}

export default connect(null, {addGuess})(GuessForm)

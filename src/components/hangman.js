import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Showguess from './Showguess.js'

class Hangman extends PureComponent {
    render() {
      return(
      <div>
      <Showguess />
      </div>
    )
    }
}

export default Hangman

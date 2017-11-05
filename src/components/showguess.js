import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


function showGuess(word, guesses) {
  var lettercollection = word.split("");
  var dash = "_";

  var result = lettercollection.map(function(letter){
        if(guesses.indexOf(letter) === -1){
         return dash
       } else {
         return letter
       };
     });

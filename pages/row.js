import React from 'react'
import wordlStyles from '../styles/Wordl.module.css'

const answerString = 'pants'
const answer = answerString.split('');

export default function Row({guess}) {
  return (
    <div className={`flex flex-row ${wordlStyles.row}`} >
      {guess.map((guessObj, i) => {
          return (
          <span key={i} className={`flex justify-center align-center ${guessObj?.color} ${wordlStyles.letter}`}>{guessObj?.letter}</span>
        )
      })}
    </div>

  )
}

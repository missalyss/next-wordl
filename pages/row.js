import React from 'react'
import wordlStyles from '../styles/Wordl.module.css'

const answerString = 'pants'
const answer = answerString.split('');

export default function Row({guess}) {

  console.log(': ',);
  // const guess = guessArr.map((gObj) => {
  //   if (answer.includes(gObj.letter)) {
  //     // console.log('GUESS INCLUDES LETTER: ', );
  //      gObj?.color = 'yellow';
  //   }
  //   answer.forEach((aLetter) => {
  //     if (aLetter === gObj.letter) {
  //       // console.log('LETTERS SAME: ', );
  //       console.log(aLetter, ' ', gObj);
  //       gObj?.color = 'green';
  //       return;
  //     }
  //       return;
  //   });
  //       return;
  // });

  console.log('ROWOWOcolor: ', guess);
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

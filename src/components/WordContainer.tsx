import { use, useState, type JSX } from 'react';

const WordContainer = ({guess}: {guess: string}): JSX.Element => {

  const boxes: JSX.Element[] = [];
  
  for (let i = 0; i < 5; i++) {
    boxes.push(
      <div key={i} className="box"></div>
    )
  }
  
  if (guess) {
    for (let i = 0; i < 5; i++) {
      boxes[i] = (
        <div key={i} className="box filled">{guess[i]}</div>
      )
    }
  }

  return (
    <div className="word-container">
      {boxes}
    </div>
  )
}

export default WordContainer;
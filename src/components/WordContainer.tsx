import { use, useState, type JSX } from 'react';

const WordContainer = ({guess}: {guess: string}): JSX.Element => {

  const boxes: JSX.Element[] = [];
  
  for (let i = 0; i < 5; i++) {
    boxes.push(
      <div key={i} className="box"></div>
    )
  }

  return (
    <div className="word-container">
      {boxes}
    </div>
  )
}

export default WordContainer;
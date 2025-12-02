import { useEffect, useState, type JSX } from 'react'
import words from '../words'; 

const WordleApp = (): JSX.Element => {

  const [wordToGuess, setWordToGuess] = useState<string>('');

  useEffect((): void => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(randomWord);
  }, []);
  
  return (
    <>
      <h1>{wordToGuess}</h1>
    </>
  )
} 

export default WordleApp

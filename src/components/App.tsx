import { useEffect, useState, type JSX } from 'react'
import words from '../words'; 
import WordContainer from './WordContainer';

const WordleApp = (): JSX.Element => {

  const [wordToGuess, setWordToGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(null));


  useEffect((): void => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(randomWord);
  }, []);
  
  return (
    <>
      <main>
        {guesses.map(guess => (
          <WordContainer guess={guess} />
        ))}
      </main>
    </>
  )
} 

export default WordleApp

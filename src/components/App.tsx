import { useEffect, useState, type JSX } from 'react'
import words from '../words'; 
import WordContainer from './WordContainer';
import Keyboard from './Keyboard';

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
        <Keyboard />
      </main>
      
    </>
  )
} 

export default WordleApp

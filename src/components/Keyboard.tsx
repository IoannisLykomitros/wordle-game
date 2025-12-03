import type { JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Keyboard = (): JSX.Element => {

    const row1 = 'QWERTYUIOP'
    const row2 = 'ASDFGHJKL'
    const row3 = 'ZXCVBNM'

  return (
    <div className="keyboard">
        <div className="keyboard-row">
            {row1.split('').map((key) => (
                <button key={key} className="key">{key}</button>
            ))}
        </div>
        <div className="keyboard-row">
            {row2.split('').map((key) => (
                <button key={key} className="key">{key}</button>    
            ))}
        </div>
        <div className="keyboard-row">
            <button className="key special-key enter-key">Enter</button>
            {row3.split('').map((key) => (
                <button key={key} className="key">{key}</button>
            ))}
            <button className="key special-key delete-key" aria-label="Delete">
                <FontAwesomeIcon icon={faDeleteLeft} />
            </button>
        </div>
    </div>
  )
}

export default Keyboard;
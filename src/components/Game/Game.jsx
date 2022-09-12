import React, { useEffect, useState, useRef } from 'react'
import './Game.css'
import Guess from '../Guess/Guess'


function Game( {secretWord} ) {

    const refGuessBox = useRef(null)
    const [guesses, setGuesses] = useState([])
    const [guess, setGuess] = useState('');
    const [gameState, setGameState] = useState('');

    const pageLoadedSetFocus = () => { refGuessBox.current.focus() }

    const guessInputChanged = (e) => {
        const { value }  = e.target
        if(value.length <= 5) {
            setGuess(e.target.value);
        }
        
    }

    const setGameStateWon = () => {
        setGameState('won')
    }

    const setGameStateLost = () => {
        setGameState('lost')
    }

    useEffect(() => {
        pageLoadedSetFocus();
        console.log('Secret: ' + secretWord)
    },[]) //ask to remove []?

    useEffect(() => {
        const guessesUsed = guesses.length;
        if(guesses[guessesUsed-1] === secretWord) {
            return setGameStateWon();
        }

        if(guessesUsed === 6) {
            return setGameStateLost();
        }
    },[guesses])

    const addGuess = () => {
        if(guess.length !== 5) {
            return;
        }
        if(gameState === 'lost' || gameState === 'won') {
            return;
        }
        setGuesses([...guesses, guess])
    }

    return  <>
        <div>
            <button onClick={ addGuess } className='guess-btn'>!נחש</button>
            <input ref={refGuessBox} onChange={guessInputChanged} value={guess} type="text" className='input-text'/> 
        </div>
        { (gameState === 'lost') && <h1>Lost, secret word was: {secretWord}</h1>}
        { (gameState === 'won') && <h1>Won, secret word was: {secretWord}</h1>}
        <div>
            {guesses.map( (guess, index) => <Guess key={index} guess={guess} secretWord={secretWord} />)}
        </div>
    </> 
}

export default Game

//TODO: add start over button(?)
//      add coloring to guess output(ask korkos)
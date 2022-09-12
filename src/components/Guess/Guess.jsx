import React from 'react'
import './Guess.css'

function Guess({index, guess, secretWord}) {
    
    const letters = [...guess]
    const colors = [];
    letters.forEach( (letter, index) => {
        if (letter === secretWord[index]) {
            console.log('M: ' + secretWord[index])
            colors.push('green')
        }else if (secretWord.includes(letter)) {
            colors.push('yellow')
        }
        else {
            colors.push('red')
        }
    })


    return <>
        <div>
            {letters.map((letter, index) => <span className={(colors[index] === 'green') ? 'green' : (colors[index] === 'yellow') ? 'yellow' : 'red'}>{letter}</span>)}
        </div>
    </>
}

export default Guess
import './App.css';
import React, { useEffect, useState } from 'react';
import words from 'make-words';
import Game from './components/Game/Game'
import Loading from './components/Loading/Loading'

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [secretWord, setSecretWord] = useState('');

  async function initiateWord(){
    const chosenWord = await words.getWordByLength(5)
    setSecretWord(chosenWord);
  }

  useEffect(() => {
    initiateWord();
    setIsLoading(false);
  }, [])

  return (
    <div className="App">
      { isLoading ? <Loading /> : <Game secretWord={secretWord}/>}
    </div>
  );
}

export default App;

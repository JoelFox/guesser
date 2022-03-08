import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllGuesses, deleteGuess, editGuess } from './api';

function App() {

  const [guesses, setGuesses] = useState([])

  useEffect(() => {
    getAllGuesses.then(res => setGuesses(res))
  }, [])


  return (
    <div className="App">
      <header className="App-container">
        <div className="notes-container">
           
        </div>
      </header>
    </div>
  );
}

export default App;

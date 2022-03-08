import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllGuesses, deleteGuess, editGuess } from "./api";
import { GuessList, GuessForm, NewGuessForm } from "./components";
import { toast } from "react-toastify";

function App() {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_FAUNADB_KEY);
    getAllGuesses.then((res) => setGuesses(res));
  }, []);

  function handleRemove(e, id) {
    e.preventDefault();
    deleteGuess(id).then(res => res)
    const newGuessesArray = guesses.filter(guess => guess.ref.id !== id)
    setGuesses(newGuessesArray)
    toast.success('Removed successfully')
  }

  function handleEdit(e, id, newText) {
    e.preventDefault();
    editGuess(id, newText).then(res => res)
  }

  return (
    <div className="App">
      <header className="App-container">
        <div className="notes-container">
          {/* <GuessForm guesses={guesses} setGuesses={setGuesses} /> */}
          <NewGuessForm guesses={guesses} setGuesses={setGuesses}/>
          <GuessList 
            onEdit={handleEdit} 
            onRemove={handleRemove} 
            data={guesses}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

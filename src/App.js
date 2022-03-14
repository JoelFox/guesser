import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllGuesses } from "./api";
import { GuessForm, InfoBox } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_FAUNADB_KEY);
    getAllGuesses.then((res) => setGuesses(res));
  }, []);

  // function handleRemove(e, id) {
  //   e.preventDefault();
  //   deleteGuess(id).then((res) => res);
  //   const newGuessesArray = guesses.filter((guess) => guess.ref.id !== id);
  //   setGuesses(newGuessesArray);
  //   toast.success("Removed successfully");
  // }

  // function handleEdit(e, id, newText) {
  //   e.preventDefault();
  //   editGuess(id, newText).then((res) => res);
  // }

  return (
    <div className="App">
      <ToastContainer />
      <div className="App-container">
        <InfoBox />
        <GuessForm guesses={guesses} setGuesses={setGuesses} />
        {/* <NewGuessForm guesses={guesses} setGuesses={setGuesses}/> */}
        {/* <GuessList 
            onEdit={handleEdit} 
            onRemove={handleRemove} 
            data={guesses}
          /> */}
      </div>
    </div>
  );
}

export default App;

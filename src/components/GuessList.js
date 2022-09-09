import React, { useState } from 'react';
import { getAllGuesses } from "../api";
// import { Icon } from 'antd'

const GuessList = () => {

  const [guesses, setGuesses] = useState([]);

  const clickButton = () => {
    const data = getAllGuesses().then(x => setGuesses(x));
    console.log(data);
  }

  return (
    <div>
      <h2>Gissningar</h2>
      <button onClick={clickButton}>Hämta gissningar</button>

      {guesses && guesses.map(x =>
        <div>
          Text
        </div>
      )}
    </div>
  )
}

export default GuessList;
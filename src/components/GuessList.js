import React, { memo, useState } from 'react';
import { getAllGuesses } from "../api";
// import { Icon } from 'antd'

const GuessList = () => {

  const [guesses, setGuesses] = useState(null);

  const clickButton = () => {
    const g = getAllGuesses();
    setGuesses(g);
  }

  return (
    <div>
      <h2>Gissningar</h2>
      <button onClick={clickButton} >Hämta gissningar</button>
      {/* {guesses && guesses.map(x =>
        <div>
          Text
        </div>
      )} */}
    </div>
  )
}

export default GuessList;
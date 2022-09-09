import React, { useState } from 'react';
import { getAllGuesses } from "../api";
// import { Icon } from 'antd'

const GuessList = () => {

  const [guesses, setGuesses] = useState([]);

  const clickButton = () => {
    const data = getAllGuesses().then(x => setGuesses(x));
    console.log(data);
  }
  /*
  date
  : 
  "2022-08-25"
  gender
  : 
  "flicka"
  guesserName
  : 
  "Kusin Erik "
  height
  : 
  51
  nameSuggestions
  : 
  "Sofia "
  time
  : 
  "02:32"
  weight
  : 
  3652
  welcomeMessage
  : 
  "Missa aldrig en kräftskiva på Vätö! "
  
  
  
  */
  return (
    <div>
      <h2>Gissningar</h2>
      <button onClick={clickButton}>Hämta gissningar</button>

      {guesses && guesses.map(x =>
        <div>
          <div className='inline-block'>{x.guesserName}</div>
          <div className='inline-block'>{x.date}</div>
          <div className='inline-block'>{x.time}</div>
          <div className='inline-block'>{x.gender}</div>
          <div className='inline-block'>{x.height}</div>
          <div className='inline-block'>{x.weight}</div>
          <div className='inline-block'>{x.nameSuggestions}</div>
          <div className='inline-block'>{x.welcomeMessage}</div>
        </div>
      )}
    </div>
  )
}

export default GuessList;
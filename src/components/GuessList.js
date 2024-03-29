import React, { useState } from 'react';
import { getAllGuesses } from "../api";
// import { Icon } from 'antd'

const GuessList = () => {

  const [guesses, setGuesses] = useState([]);

  const clickButton = () => {
    const data = getAllGuesses().then(x => {
      setGuesses(x);
      console.log(x);
    });
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
      <table className='Table'>
        <thead>
          <tr>
            <th>Gissare</th>
            <th className='table-date'>Datum</th>
            <th>Tidpunkt</th>
            <th>Kön</th>
            <th>Längd</th>
            <th>Vikt</th>
            <th>Namnförslag</th>
            <th className='table-description'>Välkomstmeddelande</th>
          </tr>
        </thead>
        <tbody>
          {guesses && guesses.map(x =>
            <tr>
              <td>{x.guesserName}</td>
              <td className='table-date'>{x.date}</td>
              <td>{x.time}</td>
              <td>{x.gender}</td>
              <td>{x.height}</td>
              <td>{x.weight}</td>
              <td>{x.nameSuggestions}</td>
              <td className='table-description'>{x.welcomeMessage}</td>
            </tr>
          )}
        </tbody>

      </table>

    </div>
  )
}

export default GuessList;
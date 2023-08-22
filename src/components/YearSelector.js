/*
@author: Lwandle Babekizulu Dlamini
@desc: This component allows the end-user to type in the year 
      which they want to view historical data from.
- On retrieval of the selected year, the 'year' state will be updated 
  on the App component, and this state will be used in the request
  we send to the DB, specifying the chosen year and era (BCE or AD)
@date: 2023/08/22
*/
//libs
import React from 'react';

const YearSelector = ({ year, onChangeHandler }) => {
  //variables
  return (
    <div className='year-selector'>
      <div className='year-container'>
        <header className='year'>
          <h2>
            <input
              type='number'
              value={year}
              onChange={(e) => onChangeHandler(e.target.value)}
            />
          </h2>
        </header>
      </div>
    </div>
  );
};

export default YearSelector;

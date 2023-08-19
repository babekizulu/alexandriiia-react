//libs
import React from 'react';

const YearSelector = ({ year, goBackInTime, goForwardInTime }) => {
  //variables
  const leftArrow = '<';
  const rightArrow = '>';
  return (
    <div className='year-selector'>
      <div className='arrow-container left'>
        <button onClick={() => goBackInTime()}>
          <h2>{leftArrow}</h2>
        </button>
      </div>
      <div className='year-container'>
        <header className='year'>
          <h2>{year}</h2>
        </header>
      </div>
      <div className='arrow-container right'>
        <button onClick={() => goForwardInTime()}>
          <h2>{rightArrow}</h2>
        </button>
      </div>
    </div>
  );
};

export default YearSelector;

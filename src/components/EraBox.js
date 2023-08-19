//libs
import React from 'react';

const EraBox = ({ era, onSelectEra }) => {
  return (
    <div className='era-box'>
      <button
        style={
          era === 'BCE'
            ? { backgroundColor: '#d3d3d3' }
            : { backgroundColor: '#fff' }
        }
        className='era bce'
        onClick={() => onSelectEra('BCE')}
      >
        <p className='bce'>BCE</p>
      </button>
      <button
        style={
          era === 'AD'
            ? { backgroundColor: '#d3d3d3' }
            : { backgroundColor: '#fff' }
        }
        className='era ad'
        onClick={() => onSelectEra('AD')}
      >
        <p className='ad'>AD</p>
      </button>
    </div>
  );
};

export default EraBox;

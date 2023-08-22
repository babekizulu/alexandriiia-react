/*
@author: Lwandle Babekizulu Dlamini
@desc: This component will allow the user to specify whether
       the year they're searching for is in the BCE era or the AD era.
- Based on the users selection, the Era state will be updated on 
  the App component
- The Era state will be used to inform the request which we will 
  send to the DB.
@date: 2023/08/22
*/
//libs
import React from 'react';

const EraBox = ({ era, onSelectEra }) => {
  return (
    <div className='era-box'>
      <button
        style={
          era === 'BCE'
            ? { backgroundColor: '#fff' }
            : { backgroundColor: '#d3d3d3' }
        }
        className='era bce'
        onClick={() => onSelectEra('BCE')}
      >
        <p className='bce'>BCE</p>
      </button>
      <button
        style={
          era === 'AD'
            ? { backgroundColor: '#fff' }
            : { backgroundColor: '#d3d3d3' }
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

/*
@author: Lwandle Babekizulu Dlamini
@todo: 
- Update table names on description comment
- Connect to DB to retrieve data
- Parse retrieved DB data
@desc: This data card component will be a multipurpose card, for holding the following data points:
- Region Data
- Historical Invention/Structure Data
- Intellectual Contrbution Data
- Engineer Data
- Architect Data
- Scientist Data
- Mathematician Data
- Source Data
(All of this data, which is publicly available and not sensitive, will be 
sourced from the ALEXANDRiiiA dataset)
@date: 2023/08/22
*/
//libs
import React from 'react';

const DataCard = ({ dataName, dataDescription, dataImgUrl }) => {
  return (
    <div className='data-card'>
      <div className='data-card-header-container'>
        <header className='data-card-header'>
          <h2>{dataName}</h2>
        </header>
      </div>
      <div className='data-description-container'>
        <p className='data-description'>{dataDescription}</p>
      </div>
      <div className='data-card-image-container'>
        <img
          src={dataImgUrl}
          alt='data thumbnail'
          className='data-card-image'
        />
      </div>
    </div>
  );
};

export default DataCard;

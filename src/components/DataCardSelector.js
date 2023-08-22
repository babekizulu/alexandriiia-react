//libs
import React from 'react';
//components
import DataCard from './DataCard';

const DataCardSelector = () => {
  return (
    <div className='data-card-selector'>
      <DataCard dataName='test name' dataDescription='test description' />
    </div>
  );
};

export default DataCardSelector;

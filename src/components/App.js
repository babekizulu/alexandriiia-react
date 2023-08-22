//libs
import React, { useState } from 'react';
import '../scss/App.scss';
//components
import Header from './Header';
import YearSelector from './YearSelector';
import EraBox from './EraBox';
import Atlas from './Atlas';
import DataCardSelector from './DataCardSelector';

const App = () => {
  //app level state management
  const [era, setEra] = useState('AD');
  const [year, setYear] = useState(2023);
  //handlers
  const onSelectEra = (selectedEra) => {
    setEra(selectedEra);
  };
  const onChangeHandler = (value) => {
    setYear(value);
  };
  return (
    <div className='app-container'>
      <Header />
      <YearSelector year={year} onChangeHandler={onChangeHandler} />
      <EraBox era={era} onSelectEra={onSelectEra} />
      <Atlas />
      <DataCardSelector />
    </div>
  );
};

export default App;

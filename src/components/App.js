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
  const goBackInTime = () => {
    setYear(year - 1);
  };
  const goForwardInTime = () => {
    setYear(year + 1);
  };
  return (
    <div className='app-container'>
      <Header />
      <YearSelector
        year={year}
        goBackInTime={goBackInTime}
        goForwardInTime={goForwardInTime}
      />
      <EraBox era={era} onSelectEra={onSelectEra} />
    </div>
  );
};

export default App;

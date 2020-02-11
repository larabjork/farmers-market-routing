import React from 'react';
import ProduceList from './components/ProduceList';
import MarketScheduleList from './components/MarketScheduleList';
import './App.css';

function App() {
  return (
    <div className="App">
    <ProduceList/>
    <MarketScheduleList/>
    </div>
  );
}

export default App;

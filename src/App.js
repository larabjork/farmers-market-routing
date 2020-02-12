import React from 'react';
import ProduceList from './components/ProduceList';
import MarketScheduleList from './components/MarketScheduleList';
import NewMarketScheduleForm from './components/NewMarketScheduleForm';
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={MarketScheduleList} />
    <Route path='/newmarketschedule' component={NewMarketScheduleForm} />
    </Switch>
    </div>
  );
}

export default App;

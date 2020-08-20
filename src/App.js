import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import TestColoring from './components/PathFindingAlgo/PathFindingAlgo';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/path-finding-visualization' component={TestColoring} />
    </Switch>
  );
}

export default App;
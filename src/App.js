import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Graph from './components/Graph/Graph';
import Test from './components/Test/Test';
import TestColoring from './components/TestColoring/TestColoring';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/graphs' component={Graph} />
      <Route exact path='/test' component={Test} />
      <Route exact path='/test-coloring' component={TestColoring} />
    </Switch>
  );
}

export default App;
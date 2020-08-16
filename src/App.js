import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/graphs' render={() => <h1>This is graphs page!</h1>} />
    </Switch>
  );
}

export default App;
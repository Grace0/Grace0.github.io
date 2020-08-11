import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;

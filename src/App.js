import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import RouteManager from './components/RouteManager';

function App() {
  return (
    <div>
    App
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/*' component={RouteManager}/>
      </Switch>
    </div>
  );
}

export default App;

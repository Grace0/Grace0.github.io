import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Aspirations from './components/Aspirations';
import Footer from './components/Footer';
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

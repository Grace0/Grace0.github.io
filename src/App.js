import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';
import Rundown from './Rundown';
import Plans from './Plans';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Erin Lee</h1>
        <p>
          <img src={ require('./drawing-transparent.png') } style={{width: 200}} />
        </p>
        <p>
      <nav className="navbar">
        <ul>
          <li><Link to='/quotes'>Quotes</Link></li>
          <li><Link to='/rundown'>Rundown</Link></li>
          <li><Link to='/plans'>Plans</Link></li>
        </ul>
      </nav>
      </p>
      </header>
      <Switch>
        <Route path='/quotes' component={Quotes}/>
        <Route path='/rundown' component={Rundown}/>
        <Route path='/plans' component={Plans}/>
      </Switch>
    </div>
  );
}
}

export default App;

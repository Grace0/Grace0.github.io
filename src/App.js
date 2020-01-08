import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Quotes from './components/Quotes';
import Rundown from './components/Rundown';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Erin Lee</h1>
        <p>
          <li><Link to='/home'><img src={ require('./img/drawing-transparent.png') } style={{width: 200}} /></Link></li>
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
        <Route path='/home' component={Homepage}/>
      </Switch>
      <Footer />
    </div>
  );
}
}

export default App;

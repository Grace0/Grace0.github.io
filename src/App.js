import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes';
import Rundown from './Rundown';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">The Grace Kwak App</h1>
      <nav>
   <ul>
     <li><Link to='/quotes'>Quotes</Link></li>
     <li><Link to='/rundown'>Rundown</Link></li>
   </ul>
 </nav>
      </header>
      <Switch>
        <Route path='/quotes' component={Quotes}/>
        <Route path='/rundown' component={Rundown}/>
      </Switch>
    </div>

  );
}
}

export default App;

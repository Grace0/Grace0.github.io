import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import './unsemantic-grid.css'
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

      <main class="grid-container home">
       <h1> Hello there! I'm Grace, a first-year Electrical Engineering student at UCLA. I'm eager to demystify the theories behind hardware and build products with a high social impact. Here's my'
          <NavLink to='/quotes' className="quotes"> resume </NavLink> and
          <NavLink to='/rundown' className="rundown"> portfolio</NavLink>, as well as a snapshot of my current
          <NavLink to='/plans' className="plans"> aspirations</NavLink>. </h1>
      </main>


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

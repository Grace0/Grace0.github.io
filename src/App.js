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

      <p>

      <main class="grid-container home">
       <div class='grid-100 mobile-grid-100 tablet-grid-100'>
       <h1> Hello there! I'm Grace, a first-year Electrical Engineering student at UCLA. I'm eager to demystify the theories behind hardware in order to build products with a high social impact.

       <p> Here is my
          <NavLink to='/quotes' className="quotes"> resume </NavLink> and
          <NavLink to='/rundown' className="rundown"> portfolio</NavLink> thus far, as well as a snapshot of my current
          <NavLink to='/plans' className="plans"> aspirations</NavLink>. </p></h1>

       </div>
      </main>

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

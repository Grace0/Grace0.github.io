import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Aspirations from './components/Aspirations';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">

      <main class="grid-container home">
       <h1> Hello there! I'm Grace, a first-year Electrical Engineering student at UCLA. I'm eagerly demystifying the theories behind hardware and actively exploring careers in social good. Here's my'
          <NavLink to='/resume' className="resume"> resume </NavLink> and
          <NavLink to='/portfolio' className="portfolio"> portfolio</NavLink>, as well as a snapshot of my personal and professional
          <NavLink to='/aspirations' className="aspirations"> aspirations</NavLink>. </h1>
      </main>

      </header>
      <Switch>
      <Route path='/resume' component={Resume}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/aspirations' component={Aspirations}/>
      <Route path='/home' component={Homepage}/>
      </Switch>

      </div>
    );
  }
}

export default App;

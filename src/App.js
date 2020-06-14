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
       <h1> <img src={ require('./img/drawing-transparent.png') } style={{width: 200}} /> Hello! I'm Grace Kwak. Here's what I am
          <NavLink to='/quotes' className="quotes"> making</NavLink>,
          <NavLink to='/rundown' className="rundown"> reading</NavLink>, and
          <NavLink to='/plans' className="plans"> working on</NavLink>. </h1>
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

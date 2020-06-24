import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Aspirations from './Aspirations';

  function RouteManager() {
    return (
      <div>
      <NavLink to='/'> home </NavLink>
      <Switch>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/aspirations' component={Aspirations}/>
      </Switch>
      </div>
    );
}

export default RouteManager;

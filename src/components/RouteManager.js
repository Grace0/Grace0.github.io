import React, {Component} from "react";
import {Switch, Route, NavLink} from "react-router-dom";
import "../App.css";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Aspirations from "./Aspirations";

function RouteManager() {
  return (
    <div>
      <main className="grid-container">
        <h5>
          <a>
            <NavLink to="/" className="nav-home">
              {" "}
              home{" "}
            </NavLink>
          </a>
        </h5>
        <h5>
          <a>
            <NavLink to="/resume" className="resume">
              {" "}
              resume{" "}
            </NavLink>
          </a>
        </h5>
        <h5>
          <a className="portfolio">
            <NavLink to="/portfolio" className="portfolio">
              {" "}
              portfolio{" "}
            </NavLink>
          </a>
        </h5>
        <h5>
          <a className="aspirations">
            <NavLink to="/Aspirations" className="aspirations">
              {" "}
              aspirations{" "}
            </NavLink>
          </a>
        </h5>
      </main>

      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/aspirations" component={Aspirations} />
      </Switch>
    </div>
  );
}

export default RouteManager;

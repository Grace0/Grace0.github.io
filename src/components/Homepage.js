import React, {Component} from "react";
import {Switch, Route, NavLink} from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="grid-container home">
          <h1>
            {" "}
            Hello there! I'm Grace, a first-year Electrical Engineering student
            at UCLA. I'm tinkering with hardware and advancing social change.
            Here is my{" "}
            <NavLink to="/resume" className="resume">
              resume
            </NavLink>{" "}
            and{" "}
            <NavLink to="/portfolio" className="portfolio">
              portfolio
            </NavLink>
            , as well as a list of my big-picture{" "}
            <NavLink to="/aspirations" className="aspirations">
              aspirations
            </NavLink>
            .
          </h1>
        </main>
      </header>
    </div>
  );
}

export default Homepage;

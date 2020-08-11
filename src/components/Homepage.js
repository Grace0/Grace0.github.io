import React, {Component} from "react";
import {Switch, Route, NavLink} from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <main className="grid-container home">
          <h1>
          <p>Grace Kwak </p>
            I'm a first-year Electrical Engineering student
            at UCLA. I love tinkering with hardware and advocating for social change.
            To see what I've been up to, take a look at my {" "}
            <a href="https://www.notion.so/Resume-41cc0b7cb9dd4c5799f9d5d6f04461d7" className="resume">resume</a>
            {" "}and{" "}
            <a href="https://www.notion.so/Portfolio-137e33c2e41741c5ae446d560d314eab" className="portfolio">portfolio</a>
             ; to see where I'm going next, explore my {" "}
            <a href="https://www.notion.so/Aspirations-c1a6526899dd40a18bf7b6a9a992bbe3" className="aspirations">aspirations</a>
            .
          </h1>
        </main>
      </header>
    </div>
  );
}

export default Homepage;

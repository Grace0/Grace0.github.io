import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomepageImage />
        <p>
          Grace Kwak
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Footer />
    </div>

  );
}

export default App;

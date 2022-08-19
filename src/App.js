import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="/lines.txt"
            target="_blank"
            rel="noopener noreferrer"
          >
            These are keys 
          </a>
        </header>
      </div>
    );
  }
}

export default App;

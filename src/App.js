// src/App.js
import React from 'react';
import QuoteGenerator from './QuoteGenerator';
// src/App.js
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <QuoteGenerator />
    </div>
  );
};

export default App;

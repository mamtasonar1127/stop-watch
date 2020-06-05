import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Timer start={Date.now()}/>
      </header> 
      
    </div>
  );
}

export default App;

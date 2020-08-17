import React from 'react';
import Compressor from './components/Compressor';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container d-flex flex-column">
        <header className="App-header">
          Vigtory String Compressor
        </header>
        <Compressor />
      </div>
    </div>
  );
}

export default App;

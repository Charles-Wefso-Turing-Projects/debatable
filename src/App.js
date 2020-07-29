import React from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import './App.scss';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Debatable</h1>

        <ReactCountdownClock seconds={10}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     onComplete={() => alert("done!")} />
      </header>
    </div>
  );
}

export default App;

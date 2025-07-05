import React from 'react';
import './App.css';
import useCountUp from './useCountUp';

function App(): JSX.Element {
  const { count, decrement, increment } = useCountUp();

  return (
    <div className="App">
      <header className="App-header">
        習慣
      </header>

      <p className="title">エクササイズ</p>

      <div className="counter">
        <button onClick={decrement}>－</button>
        <input type="text" value={count} readOnly />
        <button onClick={increment}>＋</button>
      </div>
    </div>
  );
}

export default App;
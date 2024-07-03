import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count , setCount] = useState(500);
  const decrement = ()=> {
    // setCount(prevCount => Math.max(prevCount - 25, 0));
    if (count === 0){
      return
    }
    setCount(count -25);
  }
  const increment = ()=> {
    // setCount(prevCount => Math.min(prevCount + 25, 700));
    if (count === 700){
      return 
    }
    setCount(count +25);
  }
  
  return (
    <div className="App">
      <h1>COUNT</h1>
      <h4>{count}</h4>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default App;

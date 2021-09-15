//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Check from './componenets/use';

function App() {
  
  return (
    <div className="App">
      <Check init={1234} final={1254}/>
    </div>
  );
}

export default App;

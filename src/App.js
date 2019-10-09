import React from 'react';
import './App.css';
import Todo from './Todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Reducer Todo List!</h1>
       </header>
       <div className="App">
      <Todo/>
      </div>
    </div>
  );
}

export default App;

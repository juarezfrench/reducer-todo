import React, { useReducer } from 'react';
import './App.css';

import { initialState, todoReducer } from './reducers/todoReducer';

import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='App'>
      <h1>Reducer Todo App</h1>
      <TodoList state={state} />
    </div>
  );
}

export default App;

import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/TodoReducer';

const Todo = () => {
    const [{ task,editing, id }, dispatch] = useReducer(reducer, initialState);
    console.log('Todo.jsx -> %cInitial State:', 'color: chocolate', initialState)
    const [markCompleted, SetMarkCompleted] = useState('');
    const [newTodo, setNewTodo] = useState({})
     const handleChanges = e => {
            setNewTodo(e.target.value);
          };
  
    return (
      <div>
           
        {!editing ? (
         <h1>
            <i
              className="far fa-edit"
              onClick={() => dispatch({ type: 'TOGGLE_EDIT' })}
            />
          </h1>
        ) : (
          <div>
            <input
              className="todo-input"
              type="text"
              task="newTodo"
              placeholder = "Add To-Do"
              value={newTodo}
              onChange={handleChanges}

            />
          <button
            onClick={() =>
              dispatch({ type: 'ADD_NEW_TODO', payload: newTodo })
            //   console.log('Todo.jsx -> %cnewTodo:', 'color: lime', newTodo)
            }
          >
            Submit Todo
          </button>
          </div>
        )}
      </div>
    );
  };
  
 
export default Todo;

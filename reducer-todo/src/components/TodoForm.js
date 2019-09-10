import React from 'react';

export default function TodoForm(props) {
  return (
    <div>
      <input
        type='text'
        value={props.todo}
        placeholder='...todo'
        onChange={e => props.setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          props.dispatch({ type: 'ADD_TODO', payload: props.todo });
          props.setTodo('');
        }}>
        Add
      </button>
    </div>
  );
}

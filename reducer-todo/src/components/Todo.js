import React from 'react';

export default function Todo(props) {
  return (
    <div>
      <p
        style={{
          textDecoration: `${props.todo.completed ? 'line-through' : 'none'}`,
        }}
        onClick={() =>
          props.dispatch({ type: 'TOGGLE_TODO', payload: props.todo.id })
        }>
        {props.todo.item}
      </p>
    </div>
  );
}

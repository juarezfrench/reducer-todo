import React from 'react';

import Todo from './Todo';

export default function TodoList(props) {
  return (
    <div>
      {props.state.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

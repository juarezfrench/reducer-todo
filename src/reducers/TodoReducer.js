import React from 'react'


  export const initialState = {
    task: 'Reducer Here!',
    id: 7767,
    editing: true,
    completed: false
   
    
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_EDIT':
        return {
          ...state,
          editing: !state.editing
        };

        case 'TOGGLE_COMPLETED':
        return {
          ...state,
          completed: !state.completed
        };    

      // case 'SET_EDIT':
      //   return {
      //     ...state,
      //     todoEdits: action.payload,
      //     editing: false
        // };
      case 'ADD_NEW_TODO':
        const newTodo = {
          name: action.payload,
          id:Date.now(),
          completed: false
         
        };
        return {
          ...state,
          todo: [...state.todo, newTodo]
        };
      default:
        return state;
    }
  };
  
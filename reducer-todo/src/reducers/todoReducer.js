export const initialState = [
  {
    item: 'Learn about reducers',
    completed: true,
    id: 3892987589,
  },
  {
    item: 'Finish todo list',
    completed: false,
    id: 1,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { item: action.payload, completed: false, id: new Date() },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};

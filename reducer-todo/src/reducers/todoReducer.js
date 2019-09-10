export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    doBy: 'September 1, 2019',
  },
  {
    item: 'Finish todo list',
    completed: false,
    id: 1568146979433,
    doBy: 'September 28, 2019',
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now(),
          doBy: Date.now() + 604800000,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

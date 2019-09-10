export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
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
    default:
      return state;
  }
};

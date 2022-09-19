import * as Actions from "./actionTypes";

const initState = {
  todos: [],
  visibilityFilter: Actions.VisibilityFilters.SHOW_ALL,
};

const todos = (state = initState, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      const nextTodoList = [
        ...state.todos,
        { id: action.id, text: action.text, completed: false },
      ];

      return {
        ...state,
        todos: nextTodoList,
      };
    case Actions.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((value) =>
          value.id === action.id
            ? { ...value, completed: !value.completed }
            : value
        ),
      };
    case Actions.SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter };
    default:
      return state;
  }
};

export default todos;

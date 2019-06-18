const initState = {
    todos: [
  {
    task: "Mow the lawn",
    id: 0,
    completed: false
  },
  {
    task: "Vacuum the floor",
    id: 1,
    completed: false
  },
  {
    task: "Buy food",
    id: 2,
    completed: false
  },
  {
    task: "Clean garage",
    id: 3,
    completed: false
  }
]
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = { task: action.payload, completed: false }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo)
            default: 
                return state
    }
}


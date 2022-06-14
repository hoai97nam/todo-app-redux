const initState = [
    { id: 1, name: 'learn something', completed: true, priority: 'high' },
    { id: 2, name: 'learn somewhere', completed: true, priority: 'medium' },
    { id: 3, name: 'learn somehow', completed: true, priority: 'low' }
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state.todoList,
                action.payload
            ]
        default:
            return state;
    }
}

export default todoReducer;
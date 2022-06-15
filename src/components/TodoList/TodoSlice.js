const initState = [
    { id: 1, name: 'learn something', completed: true, priority: 'High' },
    { id: 2, name: 'learn somewhere', completed: true, priority: 'Medium' },
    { id: 3, name: 'learn somehow', completed: true, priority: 'Low' }
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

export default todoReducer;
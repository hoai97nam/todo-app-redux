export const addTodoAction = {
    type: 'todoList/addTodo',
    payload: { id: 1, name: 'anc' }
}

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const searchFilterChange = (text) => {
    return {
        type: 'filter/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (text) => {
    return {
        type: 'filter/statusFilterChange',
        payload: text
    }
}

export const priorityFilterChange = (priority) => {
    return {
        type: 'filter/priorityFilterChange',
        payload: priority
    }
}
export const toggleTodo = (id) => {
    return {
        type: 'todoList/toggleTodo',
        payload: id
    }
}
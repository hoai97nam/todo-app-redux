export const addTodoAction = {
    type: 'todoList/addTodo',
    payload: { id: 1, name: 'anc' }
}

export const addTodo = (data)=> {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const searchFilterChange=(text)=>{
    return {
        type:'filter/searchFilterChange',
        payload: text
    }
}
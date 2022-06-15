import { createSelector } from "reselect";

// export const todoListSelector = (state)=> {
//     const todoRemaining = state.todoList.filter((todo)=>{
//         return todo.name.include(state.filter.search);
//     })
//     return todoRemaining
// }
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const statusSelector = (state) => state.filter.status;
export const prioritySelector = (state) => state.filter.priority;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusSelector,
    prioritySelector,
    (todoList, searchText, statusText, priority) => {
        // console.log(todoList)
        return todoList.filter((todo) => {
            if (statusText === 'All') {
                return priority.length ? 
                todo.name.includes(searchText) && todo.priority.includes(priority):
                todo.name.includes(searchText);
            }
            return (todo.name.includes(searchText)
                && statusText !== 'All'
                && statusText === 'Completed'
                ? todo.completed
                : !todo.completed) &&
                (priority.length ? priority.includes(todo.priority):true)

        })
    })
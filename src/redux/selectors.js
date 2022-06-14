import { createSelector } from "reselect";

// export const todoListSelector = (state)=> {
//     const todoRemaining = state.todoList.filter((todo)=>{
//         return todo.name.include(state.filter.search);
//     })
//     return todoRemaining
// }
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    (todoList, searchText) => {
        console.log(todoList)
        return todoList.filter((todo) => {
            return todo.name.includes(searchText);
        })
    })
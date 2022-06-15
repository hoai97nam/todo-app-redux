import filterReducer from "../components/Filters/FilterSlice";
import todoReducer from "../components/TodoList/TodoSlice";
import { combineReducers } from "redux";

// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: todoReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoReducer
})

export default rootReducer;
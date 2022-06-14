import filterReducer from "../components/Filters/FilterSlice";
import todoReducer from "../components/TodoList/TodoSlice";

const rootReducer = (state = {}, action) => {
    return {
        filter: filterReducer(state.filter, action),
        todoList: todoReducer(state.todoList, action)
    }
}

export default rootReducer;
import { combineReducers } from 'redux'
import { todosReducer } from "./todos/reducer";
import listsReducer from "./dashboard/reducer"

export default combineReducers({
    todos: todosReducer,
    dashboard: listsReducer
})

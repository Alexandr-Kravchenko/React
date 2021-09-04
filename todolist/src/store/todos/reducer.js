import Actions from "./types";

const initialState = {
    filter: 'all',
    todolist: []
};

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case Actions.SET_FILTER:
            return state = {...state, filter: payload}

        case Actions.ADD_TODO_SUCCESS:
            return state = {
                ...state,
                todolist: [...state.todolist, payload]
            };
        case Actions.ADD_TODO_ERROR:
            console.error(payload);
            return state;

        case Actions.DELETE_TODO_SUCCESS:
            return state = {
                ...state,
                todolist: state.todolist.filter(todo => todo.id !== payload)
            };

        case Actions.DELETE_TODO_ERROR:
            console.error(payload);
            return state;

        case Actions.TOGGLE_TODO_SUCCESS:
            let tempTodolist = [...state.todolist]
            tempTodolist.forEach(todo => {
                todo.done = todo.id === payload.todo_id ? !payload.status : todo.done
            });
            return {
                ...state,
                todolist: tempTodolist
            };

        case Actions.TOGGLE_TODO_ERROR:
            console.error(payload);
            return state;

        case Actions.GET_ALL_TODO_SUCCESS:
            return state = {
                ...state,
                todolist: payload
            };
        case Actions.GET_ALL_TODO_ERROR:
            console.error(payload);
            return state;

        default: return state
    }
}

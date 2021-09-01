import Actions from "./types";

export const getAllTodo = dispatch => {
    fetch('api/lists/1')
        .then(res => res.json())
        .then(todolist => dispatch({
            type: Actions.GET_ALL_TODO,
            payload: todolist
        }))
};

export const addTodo = function (todo) {
    return {
        type: Actions.ADD_TODO,
        payload: todo
    }
};

export const deleteTodo = function (id) {
    return {
        type: Actions.DELETE_TODO,
        payload: id
    }
};

export const toggleTodo = function (id) {
    return {
        type: Actions.TOGGLE_TODO,
        payload: id
    }
};
import Actions from "./types";

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
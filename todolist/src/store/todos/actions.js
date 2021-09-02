import Actions from "./types";

export const getAllTodo = options => dispatch => {
    fetch(`http://localhost:4000/api/lists/todos`)
        .then(res => res.json())
        .then(todolist => {
            dispatch({
                type: Actions.GET_ALL_TODO_SUCCESS,
                payload: todolist
            })
        })
        .catch(err => {
            dispatch({
                type: Actions.GET_ALL_TODO_ERROR,
                payload: err
            })
        })
};

export const addTodo = (id, title) => dispatch => {
    fetch(`http://localhost:4000/api/lists/${id}/todos`, {
        method: 'POST',
        body: JSON.stringify(title),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(todo => {
            dispatch({
                type: Actions.ADD_TODO_SUCCESS,
                payload: todo.todo
            })
        })
        .catch(err =>
            dispatch({
                type: Actions.ADD_TODO_ERROR,
                payload: err
            }))
};

export const deleteTodo = (list_id, todo_id) => dispatch => {
    fetch(`http://localhost:4000/api/lists/${todo_id}/todos/${list_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(todo => {
            dispatch({
                type: Actions.DELETE_LIST_SUCCESS,
                payload: todo_id
            })
        })
        .catch(err =>
            dispatch({
                type: Actions.DELETE_LIST_ERROR,
                payload: err
            }))
};

export const toggleTodo = function (id) {
    return {
        type: Actions.TOGGLE_TODO,
        payload: id
    }
};
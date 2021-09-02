import Actions from "./types";

export const getLists = options => dispatch => {
    fetch(`http://localhost:4000/api/lists/`)
        .then(res => res.json())
        .then(list => {
            dispatch({
                type: Actions.GET_ALL_LISTS_SUCCESS,
                payload: list
            })
        })
        .catch(err =>
            dispatch({
                type: Actions.GET_ALL_LISTS_ERROR,
                payload: err
            }))
};

export const addList = options => dispatch => {
    fetch(`http://localhost:4000/api/lists/`, {
        method: 'POST',
        body: JSON.stringify(options),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(list => {
            dispatch({
                type: Actions.ADD_LIST_SUCCESS,
                payload: list.list
            })
        })
        .catch(err =>
            dispatch({
                type: Actions.ADD_LIST_ERROR,
                payload: err
            }))
};

export const deleteList = options => dispatch => {
    fetch(`http://localhost:4000/api/lists/${options}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(list => {
            dispatch({
                type: Actions.DELETE_LIST_SUCCESS,
                payload: options
            })
        })
        .catch(err =>
            dispatch({
                type: Actions.DELETE_LIST_ERROR,
                payload: err
            }))
};

export const selectList = function (id) {
    return {
        type: Actions.SELECT_LIST,
        payload: id
    }
};

export const getToday = options => dispatch => {
    fetch(`http://localhost:4000/api/dashboard`)
        .then(res => res.json())
        .then(dashboard => {
            dispatch({
                type: Actions.GET_TODAY_SUCCESS,
                payload: dashboard.amount
            })
        })
        .catch(err =>
            dispatch({
                type: Actions.GET_TODAY_ERROR,
                payload: err
            }))
};


    export const getNumberOpenedTodo = options => dispatch => {
        fetch(`http://localhost:4000/api/dashboard`)
            .then(res => res.json())
            .then(dashboard => {
                dispatch({
                    type: Actions.GET_NUMBER_OPENED_TODO_SUCCESS,
                    payload: dashboard.listData
                })
            })
            .catch(err =>
                dispatch({
                    type: Actions.GET_NUMBER_OPENED_TODO_ERROR,
                    payload: err
                }))
    };
    


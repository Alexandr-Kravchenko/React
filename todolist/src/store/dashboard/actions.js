import Actions from "./types";

export const addList = function (list) {
    return {
        type: Actions.ADD_LIST,
        payload: list
    }
};

export const deleteList = function (id) {
    return {
        type: Actions.DELETE_LIST,
        payload: id
    }
};

export const selectList = function (id) {
    return {
        type: Actions.SELECT_LIST,
        payload: id
    }
};

export const setToday = function (numberToday) {
    return {
        type: Actions.SET_TODAY,
        payload: numberToday
    }
};


export const setNumberOpenedTodo = function (numberOpened) {
    return {
        type: Actions.SET_NUMBER_OPENED_TODO,
        payload: numberOpened
    }
};



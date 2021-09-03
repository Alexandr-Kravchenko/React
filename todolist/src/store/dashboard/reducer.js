import Actions from "./types";
import { combineReducers } from 'redux'

const initialState = {
  loaded: false,
  lists: []
}

const lists = (state = initialState, { type, payload }) => {
  switch (type) {

    case Actions.GET_ALL_LISTS_SUCCESS:
      payload.forEach((list, index) => {
        list.active = index === 0 ? true : false
      });
      return state = {
        loaded: true,
        lists: [...payload]
      };

    case Actions.GET_ALL_LISTS_ERROR:
      console.log(payload);
      return state;

    case Actions.ADD_LIST_SUCCESS:
      return state = {
        ...state,
        lists: [...state.lists, payload]
      };

    case Actions.ADD_LIST_ERROR:
      console.log(payload)
      return state;


    case Actions.DELETE_LIST_SUCCESS:
      return state = {
        ...state,
        lists: state.lists.filter(list => list.id !== payload)
      }

    case Actions.DELETE_LIST_ERROR:
      console.log(payload);
      return state;

    case Actions.SELECT_LIST:
      let allListWithSelected = state.lists.map(list => {
        if (list.id === payload) {
          list.active = true
          return list
        } else {
          list.active = false
          return list
        }
      });
      return state = {
        ...state,
        lists: [...allListWithSelected]
      };

    default: return state
  }
}

const today = (state = 0, { type, payload }) => {
  switch (type) {
    case Actions.GET_TODAY_SUCCESS:
      return state = +payload;

    case Actions.GET_TODAY_ERROR:
      console.error(payload);
      return state;

    default: return state
  }
}

const openedTasks = (state = {}, { type, payload }) => {
  switch (type) {
    case Actions.GET_NUMBER_OPENED_TODO_SUCCESS:
      let result = new Map();
      payload.forEach(data => {
        let list_id = data.list.list_id;
        result.set(list_id, +data.incomplete);
      })
      return state = Object.fromEntries(result);
      
    case Actions.GET_NUMBER_OPENED_TODO_ERROR:
      console.error(payload);
      return state

    default: return state
  }
}

export default combineReducers({
  today,
  lists,
  openedTasks
})
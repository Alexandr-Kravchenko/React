import Actions from "./types";
import { combineReducers } from 'redux'

const initialState = [
  {
    id: 1,
    title: 'NewList_1',
    active: true
  },
  {
    id: 2,
    title: 'NewList_2',
    active: false
  },
  {
    id: 3,
    title: 'NewList_3',
    active: false
  }
];

const lists = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ADD_LIST:
      return state = [...state, payload];

    case Actions.DELETE_LIST:
      return state.filter(list => list.id !== payload);

    default: return state
  }
}

const today = (state = 0, { type, payload }) => {
  switch (type) {
    case Actions.SET_TODAY:
      return state = payload;

    default: return state
  }
}

const openedTasks = (state = {}, { type, payload }) => {
  switch (type) {
    case Actions.SET_NUMBER_OPENED_TODO:
      return state = payload

    default: return state
  }
}

export default combineReducers({
  today,
  lists,
  openedTasks
})
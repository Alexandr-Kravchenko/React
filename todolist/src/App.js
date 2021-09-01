import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import TodoListPage from './Components/TodoListPage';
import Dashboard from './Components/Dashboard';
import TodayTasksPage from './Components/TodayTasksPage'

import { useDispatch, useSelector } from "react-redux"

import { addTodo, deleteTodo, toggleTodo, getAllTodo } from './store/todos/actions';
import { addList, deleteList, selectList, setToday, setNumberOpenedTodo } from './store/dashboard/actions';

export default function App(props) {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('all');

  const todolist = useSelector(state => state.todos);
  const lists = useSelector(state => state.dashboard.lists);

  const numberToday = useSelector(state => state.dashboard.today);

  useEffect(() => {
    console.log(dispatch(getAllTodo()))
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const openedTasks = new Map();
    const number = todolist.filter(todo => {
      let todoDate = new Date(todo.due_date).setHours(0, 0, 0, 0);
      if (!todo.done) {
        if (openedTasks.has(todo.listid)) {
          openedTasks.set(todo.listid, openedTasks.get(todo.listid) + 1)
        } else {
          openedTasks.set(todo.listid, 1)
        }
      }
      return todoDate === currentDate && !todo.status
    }).length;
    dispatch(setNumberOpenedTodo(Object.fromEntries(openedTasks)))
    dispatch(setToday(number));
  }, [todolist])


  function validateString(str) {
    if (str.trim().length) {
      return true
    } else {
      return false
    }
  }

  function findActiveList(lists) {
    return lists.find(list => list.active);
  }

  function onSubmitAddListHandler(e) {
    e.preventDefault();
    const currentForm = e.target;
    const formData = new FormData(currentForm);
    const list = Object.fromEntries(formData.entries());
    if (validateString(list.title)) {
      list.id = lists.length + 1;
      list.active = false;
      list.list_id = findActiveList(lists).id;
      dispatch(addList(list));
      currentForm.reset();
    } else {
      alert('Honey, input your title')
    }
  }

  function onSelectListHandler(id) {
    let tempLists = [...lists];
    let list_id;
    tempLists.forEach(list => list.active = false)
    if (id) {
      list_id = tempLists.findIndex(list => list.id === id);
    } else {
      list_id = tempLists.findIndex(list => list.id === 1);
    }
    tempLists[list_id].active = !tempLists[list_id].active;
    dispatch(selectList(tempLists));
  }


  function onSubmitAddTodoHandler(e) {
    e.preventDefault();

    const currentForm = e.target;
    const formData = new FormData(currentForm);
    const todo = Object.fromEntries(formData.entries());

    if (validateString(todo.title)) {
      todo.id = todolist.length + 1;
      todo.done = false;
      todo.list_id = findActiveList(lists).id;
      dispatch(addTodo(todo))
      currentForm.reset();
    } else {
      alert('Honey, input your title')
    }
  }

  function onChangeHandler(id) {
    dispatch(toggleTodo(id));
  }

  function onRemoveHandler(id) {
    dispatch(deleteTodo(id))
  }

  return (
    <Router>
      <div className="App">
        <Dashboard
          onSelectList={onSelectListHandler}
          onSubmitHandler={onSubmitAddListHandler}
          lists={lists}
        />
        <Switch>
          <Route path="/todo-list/:list_id">
            <TodoListPage
              todolist={todolist}
              onSelectList={onSelectListHandler}
              onChangeHandler={onChangeHandler}
              onRemoveHandler={onRemoveHandler}
              findActiveList={findActiveList}
              filter={filter}
              setFilter={setFilter}
              lists={lists}
              onSubmitHandler={onSubmitAddTodoHandler}
            />
          </Route>
          <Route path="/today">
            <TodayTasksPage
              onChangeHandler={onChangeHandler}
              todolist={todolist}
              lists={lists}
              onSelectList={onSelectListHandler}
            />
          </Route>
          <Route path="/">
            <Redirect to="/today" />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

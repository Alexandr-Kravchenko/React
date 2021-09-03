import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import './App.css';
import TodoListPage from './Components/TodoListPage';
import Dashboard from './Components/Dashboard';
import TodayTasksPage from './Components/TodayTasksPage'

import { addTodo, deleteTodo, toggleTodo, getAllTodo } from './store/todos/actions';
import { addList, deleteList, selectList, getToday, getNumberOpenedTodo, getLists } from './store/dashboard/actions';

export default function App(props) {
  const dispatch = useDispatch()

  const listLoadingStatus = useSelector(state => state.dashboard.lists.loaded)

  const lists = useSelector(state => state.dashboard.lists.lists);

  const numberToday = useSelector(state => state.dashboard.today);

  const numberOpenedTask = useSelector(state => state.dashboard.openedTasks)

  const todolist = useSelector(state => state.todos.todolist);

  useEffect(() => {
    dispatch(getNumberOpenedTodo())
    dispatch(getToday())
  }, [todolist])

  useEffect(() => {
    dispatch(getLists())
  }, [])

  useEffect(() => {
    dispatch(getAllTodo())
  }, [])


  if (listLoadingStatus) {

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
        dispatch(addList(list));
        currentForm.reset();
      } else {
        alert('Honey, input your title')
      }
    }

    function onSelectListHandler(id) {
      dispatch(selectList(id));
    }

    function onSubmitAddTodoHandler(e) {
      e.preventDefault();

      const currentForm = e.target;
      const formData = new FormData(currentForm);
      const todo = Object.fromEntries(formData.entries());

      if (validateString(todo.title)) {
        todo.due_date = todo.due_date.length !== 0 ? todo.due_date : null;
        const currentListId = findActiveList(lists).id;
        dispatch(addTodo(currentListId, todo))
        currentForm.reset();
      } else {
        alert('Honey, input your title')
      }
    }

    function onChangeHandler(list_id, todo_id, status) {
      dispatch(toggleTodo(list_id, todo_id, { done: !status }));
    }

    function onRemoveHandler(list_id, todo_id) {
      dispatch(deleteTodo(list_id, todo_id))
    }

    function onRemoveListHandler(id) {
      dispatch(deleteList(id))
    }

    return (
      <Router>
        <div className="App">
          <Dashboard
            onSelectList={onSelectListHandler}
            onRemoveList={onRemoveListHandler}
            onSubmitHandler={onSubmitAddListHandler}
            lists={lists}
            numberToday={numberToday}
            numberOpenedTask={numberOpenedTask}
          />
          <Switch>
            <Route path="/todo-list/:list_id">
              <TodoListPage
                todolist={todolist}
                onSelectList={onSelectListHandler}
                onChangeHandler={onChangeHandler}
                onRemoveHandler={onRemoveHandler}
                findActiveList={findActiveList}
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
  } else {
    return <div className="App"> </div>
  }
}

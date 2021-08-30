import React, { useState } from 'react';
import './App.css';
import TodoListPage from './Components/TodoListPage';
import AddTodoForm from './Components/AddTodoForm';
import Dashboard from './Components/Dashboard';
import TodayTasksPage from './Components/TodayTasksPage'

function App() {
  const [todolist, setTodo] = useState([
    {
      title: "To Plant a tree",
      description: "Apple",
      due_date: "2021-08-30",
      id: 1,
      list_id: 1,
      status: false
    },
    {
      title: "Todo2",
      description: "description2",
      due_date: "2021-08-30",
      id: 2,
      list_id: 2,
      status: false
    },
    {
      title: "Todo3",
      description: "description3",
      due_date: "2021-08-30",
      id: 3,
      list_id: 3,
      status: true
    },
    {
      title: "Todo4",
      description: "description4",
      due_date: "2014-06-13",
      id: 4,
      list_id: 2,
      status: false
    }
  ])

  const [lists, setList] = useState([
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
  ])

  const [filter, setFilter] = useState('all');

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
    let currentForm = e.target;
    const formData = new FormData(currentForm);
    const list = Object.fromEntries(formData.entries());
    if (validateString(list.title)) {
      list.id = lists.length + 1;
      list.active = false;
      list.list_id = findActiveList(lists).id;
      setList([...lists, list])
      currentForm.reset();
    } else {
      alert('Honey, input your title')
    }
  }

  function onListClickHandler(id) {
    let tempLists = [...lists];
    tempLists.forEach(list => list.active = false)
    let list_id = tempLists.findIndex(list => list.id === id);
    tempLists[list_id].active = !tempLists[list_id].active;
    setList([...tempLists])
  }

  function onSubmitAddTodoHandler(e) {
    e.preventDefault();
    let currentForm = e.target;
    const formData = new FormData(currentForm);
    const todo = Object.fromEntries(formData.entries());
    if (validateString(todo.title)) {
      todo.id = todolist.length + 1;
      todo.status = false;
      todo.list_id = findActiveList(lists).id;
      setTodo([...todolist, todo])
      currentForm.reset();
    } else {
      alert('Honey, input your title')
    }
  }

  function onChangeHandler(id) {
    let tempList = [...todolist]
    let todo_id = tempList.findIndex(todo => todo.id === id)
    tempList[todo_id].status = !tempList[todo_id].status;
    setTodo(tempList);
  }

  function onRemoveHandler(id) {
    let tempList = [...todolist]
    let todo_id = tempList.findIndex(todo => todo.id === id)
    tempList.splice(todo_id, 1)
    setTodo(tempList);
  }

  return (
    <div className="App">
      <Dashboard
        onListClick={onListClickHandler}
        onSubmitHandler={onSubmitAddListHandler}
        lists={lists}
      />
      <TodoListPage
        todolist={todolist}
        onListClick={onListClickHandler}
        onChangeHandler={onChangeHandler}
        onRemoveHandler={onRemoveHandler}
        findActiveList={findActiveList}
        filter={filter}
        setFilter={setFilter}
        lists={lists}
        onSubmitHandler={onSubmitAddTodoHandler}
      />
      <TodayTasksPage
        todolist={todolist}
        lists={lists}
        onListClick={onListClickHandler}
      />
    </div>
  );
}

export default App;

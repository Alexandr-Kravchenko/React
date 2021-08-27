import React, { useState } from 'react';
import './App.css';
import Todolist from './Components/Todolist/index';
import AddTodoForm from './Components/AddTodoForm/index';
import Lists from './Components/Lists/index';
import AddListForm from './Components/AddListForm/index';
import RightSideBar from './Components/RightSideBar/index'

function App() {
  const [todolist, setTodo] = useState([
    {
      title: "To Plant a tree",
      description: "Apple",
      due_date: "2024-06-13",
      id: 1,
      list_id: 1,
      target: true,
      status: false
    },
    {
      title: "Todo2",
      description: "description2",
      due_date: "2024-06-13",
      id: 2,
      list_id: 2,
      target: false,
      status: false
    },
    {
      title: "Todo3",
      description: "description3",
      due_date: "2024-06-13",
      id: 3,
      list_id: 3,
      target: false,
      status: true
    },
    {
      title: "Todo4",
      description: "description4",
      due_date: "2014-06-13",
      id: 4,
      list_id: 2,
      target: false,
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

  return (
    <div className="App">
      <Lists lists={lists} setList={setList} />
      <Todolist todolist={todolist} setTodo={setTodo} filter={filter} setFilter={setFilter} lists={lists} />
      <RightSideBar todolist={todolist} />
      {/* <AddTodoForm lists={lists} todolist={todolist} setTodo={setTodo} /> */}
      {/* <AddListForm lists={lists} setList={setList} /> */}
    </div>
  );
}

export default App;

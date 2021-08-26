import React, { useState } from 'react';
import './App.css';
import Todolist from './Components/Todolist/index';

function App() {
  const [state, setState] = useState(
    {
      todolist: [
        {
          title: "To Plant a tree",
          description: "Apple",
          due_date: "2024-06-13",
          id: 2,
          status: false
        },
        {
          title: "Todo2",
          description: "description2",
          due_date: "2024-06-13",
          id: 3,
          status: false
        },
        {
          title: "Todo3",
          description: "description3",
          due_date: "2024-06-13",
          id: 4,
          status: true
        },
        {
          title: "Todo4",
          description: "description4",
          due_date: "2014-06-13",
          id: 5,
          status: false
        }
      ],
    filter: 'all'
})

  return (
    <div className="App">
      <Todolist state={state} setState={setState} />
    </div>
  );
}

export default App;

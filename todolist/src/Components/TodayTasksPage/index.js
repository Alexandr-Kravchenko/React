import React, { useState } from 'react';
import Todo from './Todo';

export default function TodayTasksPage(props) {
    const { todolist, lists, onSelectList, onChangeHandler, countTodayTodo } = props;
    
    const [activeMode, setActiveMode] = useState({
        mode: 'Today',
        date: ''
    });
    
    const filteredList = activeMode.mode === 'Today' ? getTodayTasks(todolist) :
    activeMode.mode === 'Past' ? getTaskFromPast(todolist, activeMode.date) : null;
    
    function getTaskFromPast(list, date) {
        let past_date = new Date(date).setHours(0, 0, 0, 0);
        return list.filter(todo => {
            let todoDate = new Date(todo.due_date).setHours(0, 0, 0, 0);
            return todoDate === past_date && !todo.done
        })
    }
    
    function getListName(id) {
        return lists.find(list => list.id === id).title
    }
    
    function getDate(e) {
        let value = e.target.value;
        return value ? setActiveMode({ ...activeMode, date: value }) : null;
    }
    
    function toggleMode() {
        let mode = activeMode.mode;
        return mode === 'Today' ? setActiveMode({ ...activeMode, mode: 'Past' })
        : mode === 'Past' ? setActiveMode({ ...activeMode, mode: 'Today' }) : null;
    }
    
    function getTodayTasks(list) {
        const currentDate = new Date().setHours(0, 0, 0, 0);
        return list.filter(todo => {
            let todoDate = new Date(todo.due_date).setHours(0, 0, 0, 0);
            return todoDate === currentDate && !todo.done
        })
    }
    
    return (
        <div className="today-tasks-page">
            <h2 className="today-tasks-page__title">{activeMode.mode} Tasks Page
                {activeMode.mode === 'Today' ? null
                    : <input className="today-tasks-page__title__date" type="date" onChange={getDate} />}
                <button className="today-tasks-page__title__toggler" onClick={toggleMode}>{activeMode.mode} mode</button>
            </h2>
            <div className="today-tasks-page__content">
                {filteredList.map(todo => { 
                    return <Todo
                        todo={todo}
                        lists={lists}
                        onSelectList={onSelectList}
                        list_name={getListName(todo.listid)}
                        onChange={onChangeHandler}
                    />
                })}
            </div>
        </div>
    )
}
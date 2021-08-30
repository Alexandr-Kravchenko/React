import React from 'react';
import Todo from './Todo';

export default function TodayTasksPage(props) {
    const { todolist, lists, onListClick } = props;

    function getTodayTasks(list) {
        const currentDate = new Date().setHours(0, 0, 0, 0);
        return list.filter(todo => {
            let todoDate = new Date(todo.due_date).setHours(0, 0, 0, 0);
            return todoDate === currentDate && !todo.status
        })
    }

    function getListName(id) {
        return lists.find(list => list.id === id).title
    }

    return (
        <div className="today-tasks-page">
            <h2 className="today-tasks-page__title">Today Tasks Page</h2>
            <div className="today-tasks-page__content">
                {getTodayTasks(todolist).map(todo => {
                    return <Todo
                        todo={todo}
                        lists={lists}
                        onListClick={onListClick}
                        list_name={getListName(todo.list_id)}
                    />
                })}
            </div>
        </div>
    )
}
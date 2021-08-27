import React from 'react';
import Todo from './Todo';
import Toggler from './Toggler';

export default function Todolist(props) {
    const { lists, todolist, setTodo, filter, setFilter } = props;

    function findActiveListId(lists) {
        return lists.find(list => list.active);
    }

    function filterList(list) {
        let activeListId = findActiveListId(lists).id;
        if (filter === 'all') {
            return list.filter(todo => {
                return todo.list_id === activeListId
            })
        } else if (filter === 'opened') {
            return list.filter(todo => {
                return todo.status === false && todo.list_id === activeListId
            })
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
        <div className="todolist">
            <h2 className="todolist__title">{findActiveListId(lists).title}</h2>
            <Toggler filter={filter} setFilter={setFilter} />
            {
                filterList(todolist).map((todo) => <Todo todo={todo} onChange={onChangeHandler} onRemove={onRemoveHandler} key={todo.id}/>)
            }
        </div>
    )
}
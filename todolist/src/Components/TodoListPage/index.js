import React, { useState } from 'react';
import Todo from './Todo';
import Toggler from './Toggler';
import AddTodoForm from '../AddTodoForm';

export default function TodoListPage(props) {
    const { lists, todolist, onChangeHandler, onRemoveHandler, filter, setFilter, findActiveList, onSubmitAddTodoHandler } = props;

    const [listFormShown, setlistFormShown] = useState(false)

    function filterList(list) {
        let activeListId = findActiveList(lists).id;
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

    function toggleForm() {
        setlistFormShown(!listFormShown);
    }

    return (
        <div className="todolist">
            <h2 className="todolist__title">{findActiveList(lists).title}
                <div className={listFormShown ? "todolist__add active" : "todolist__add"} onClick={toggleForm}></div>
            </h2>
            {listFormShown ? <AddTodoForm onSubmitHandler={onSubmitAddTodoHandler} /> : null}
            {/* <Toggler filter={filter} setFilter={setFilter} /> */}
            <div className="todolist__content">
                {
                    filterList(todolist).map((todo) => <Todo todo={todo} onChange={onChangeHandler} onRemove={onRemoveHandler} key={todo.id} />)
                }
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Todo from './Todo';
import Toggler from './Toggler';
import AddTodoForm from '../AddTodoForm';

export default function TodoListPage(props) {
    const { lists, todolist, onChangeHandler, onRemoveHandler, filter, findActiveList, onSubmitHandler, onSelectList } = props;

    const [listFormShown, setlistFormShown] = useState(false);

    const params = useParams();

    useEffect(() => {
        onSelectList(+params.list_id)
    }, [])

    function filterList(list) {
        let activeListId = findActiveList(lists).id;
        if (filter === 'all') {
            return list.filter(todo => todo.listid === activeListId)
        } else if (filter === 'opened') {
            return list.filter(todo => {
                return !todo.status && todo.listid === activeListId
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
            {listFormShown ? <AddTodoForm onSubmitHandler={onSubmitHandler} /> : null}
            {/* <Toggler filter={filter} setFilter={setFilter} /> */}
            <div className="todolist__content">
                {
                    filterList(todolist).map((todo) => <Todo todo={todo} onChange={onChangeHandler} onRemove={onRemoveHandler} key={todo.id} />)
                }
            </div>
        </div>
    )
}
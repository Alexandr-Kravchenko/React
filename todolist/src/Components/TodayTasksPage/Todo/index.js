import React from 'react';
import { Link } from 'react-router-dom';

export default function Todo(props) {
    const { id, description, title, due_date, status, list_id } = props.todo;
    const { onChange, list_name, onSelectList } = props;

    function isDue(date) {
        const currentDate = new Date();
        return new Date(date) <= currentDate;
    }

    return (
        <div className="todolist__content__todo" key={id} id={id}>
            <div className="todolist__content__todo__status">
                <input type="checkbox" checked={status} onChange={() => onChange(id)} />
            </div>
            <div className={
                status ? 'todolist__content__todo__title done' : 'todolist__content__todo__title'
            }>
                {title}
            </div>
            <div className="todolist__content__todo__description">{description}</div>
            <div className={isDue(due_date) ? 'todolist__content__todo__due-date due' : 'todolist__content__todo__due-date'}>
                {due_date}
            </div>

            <div className="todolist__content__todo__list-name" onClick={() => onSelectList(list_id)}>
                <Link className="todolist__link" to={`/todo-list/${list_id}`} > {list_name}</Link>
            </div>
        </div >
    )
}
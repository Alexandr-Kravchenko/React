import React from 'react';
import './style.css';

export default function Todo(props) {
    const { id, description, title, due_date, done, listid } = props.todo;
    const { onRemove, onChange } = props;

    function isDue(date) {
        const currentDate = new Date().setHours(0, 0, 0, 0);
        return new Date(date).setHours(0, 0, 0, 0) < currentDate;
    }
    return (
        <div className="todolist__content__todo" key={id} id={id}>
            <div className="todolist__content__todo__status">
                <input type="checkbox" checked={done} onChange={() => onChange(listid, id, done)} />
            </div>
            <div className={
                done ? 'todolist__content__todo__title done' : 'todolist__content__todo__title'
            }>
                {title}
            </div>
            <div className="todolist__content__todo__description">{description}</div>
            <div className={isDue(due_date) && !done ? 'todolist__content__todo__due-date due' : 'todolist__content__todo__due-date'}>
                {due_date}
            </div>
            <div className="todolist__content__todo__terminator" onClick={() => onRemove(listid, id)}>✖</div>
        </div>
    )
}
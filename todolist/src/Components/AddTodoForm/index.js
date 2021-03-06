import React from 'react';
import './style.css';

export default function AddTodoForm(props) {
    const { onSubmitHandler } = props;

    return (
        <form className="add-todo" onSubmit={onSubmitHandler} >
            <input className="add-todo__title" type="text" name="title" required placeholder="Input title" />
            <input className="add-todo__description" type="text" name="description" placeholder="Input description" />
            <input className="add-todo__date" type="date" name="due_date" />
            <button className="add-todo__submit" type='submit'>Add</button>
        </form>
    )
}
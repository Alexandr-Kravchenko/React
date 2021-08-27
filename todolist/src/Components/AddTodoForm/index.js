import React from 'react';

export default function AddTodoForm(props) {
    const { lists, todolist, setTodo } = props;

    function findActiveListId(lists) {
        return lists.find(list => list.active).id;
    }

    function validateString(str) {
        if (str.trim().length) {
            return true
        } else {
            return false
        }
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        let currentForm = e.target;
        const formData = new FormData(currentForm);
        const todo = Object.fromEntries(formData.entries());
        if (validateString(todo.title)) {
            todo.id = todolist.length + 1;
            todo.status = false;
            todo.list_id = findActiveListId(lists)
            setTodo([...todolist, todo])
            currentForm.reset();
        } else {
            alert('Honey, input your title')
        }

    }

    return (
        <form className="add-todo" onSubmit={onSubmitHandler} >
            <h2>To Add Your Todo</h2>
            <input type="text" name="title" required placeholder="Input title" />
            <input type="text" name="description" placeholder="Input description" />
            <input type="date" name="due_date" />
            <button type='submit'>Add</button>
        </form>
    )
}
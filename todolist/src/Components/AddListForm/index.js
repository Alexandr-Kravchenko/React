import React from 'react';

export default function AddListForm(props) {
    const { lists, setList } = props;

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
        const list = Object.fromEntries(formData.entries());
        if (validateString(list.title)) {
            list.id = lists.length + 1;
            list.active = false;
            list.list_id = findActiveListId(lists)
            setList([...lists, list])
            currentForm.reset();
        } else {
            alert('Honey, input your title')
        }

    }

    return (
        <form className="add-list" onSubmit={onSubmitHandler} >
            <h2>To Add Your List</h2>
            <input type="text" name="title" required placeholder="Input title" />
            <button type='submit'>Add</button>
        </form>
    )
}
import React from 'react';

export default function AddListForm(props) {
    const { onSubmitHandler } = props;

    return (
        <form className="add-list" onSubmit={onSubmitHandler} >
            <input className="add-list__input" type="text" name="title" required placeholder="Input title" />
            <button className="add-list__submit" type='submit'>+</button>
        </form>
    )
}
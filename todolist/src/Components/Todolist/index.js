import React from 'react';
import Todo from './Todo';
import Toggler from './Toggler';

export default function Todolist(props) {
    const { state, setState } = props;
    return (
        <div className="todolist">
            <h1>Todolist</h1>
            <Toggler state={state} setState={setState}/>
            <div className="todo">
                <div className="title">Title</div>
                <div className="description">Description</div>
                <div className="status">Status</div>
                <div className="due-date">Due Date</div>
            </div>
            <Todo state={state} setState={setState} />
        </div>
    )
}
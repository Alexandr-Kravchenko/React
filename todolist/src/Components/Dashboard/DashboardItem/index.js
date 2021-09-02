import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardItem(props) {
    const { onClick, onRemove } = props;
    const { id, title, active } = props.list;

    return (
        <div className="dashboard__items__item" id={id} >
            <div className="dashboard__items__item__title">
                <Link className={active ? "todolist__link active" : "todolist__link"} onClick={() => onClick(+id)} to={`/todo-list/${id}`} > {title}</Link>
            </div>
            <div className="dashboard__items__item__remove" onClick={() => onRemove(id)}> ✖ </div>
        </div>
    );
}
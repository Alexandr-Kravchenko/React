import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardItem(props) {
    const { onClick } = props;
    const { id, title, active } = props.list;

    return (
        <div className={active ? "dashboard__items__item active" : "dashboard__items__item"} id={id} onClick={() => onClick(+id)}>
            <div className="dashboard__items__item__title">
                <Link className="todolist__link" to={`/todo-list/${id}`} > {title}</Link>
            </div>
        </div>
    );
}
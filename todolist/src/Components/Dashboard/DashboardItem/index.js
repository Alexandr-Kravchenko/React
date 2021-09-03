import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function DashboardItem(props) {
    const { onClick, onRemove, numberOpenedTask } = props;
    const { id, title, active } = props.list;
    let amountOpenedTasks = numberOpenedTask[id] ?? 0;
    
    return (
        <div className="dashboard__items__item" id={id} >
            <div className="dashboard__items__item__title">
                <Link
                    className={active ? "dashboard__items__item__link active" : "dashboard__items__item__link"}
                    onClick={() => onClick(+id)} to={`/todo-list/${id}`}
                >
                    {title} ({amountOpenedTasks})
                </Link>
            </div>
            <div className="dashboard__items__item__remove" onClick={() => onRemove(id)}> ✖ </div>
        </div>
    );
}
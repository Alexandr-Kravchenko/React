import React from 'react'

export default function DashboardItem(props) {
    const { onClick } = props;
    const { id, title, active } = props.list;

    return (
        <div className={active ? "dashboard__items__item active" : "dashboard__items__item"} id={id} onClick={() => onClick(id) }>
            <div className="dashboard__items__item__title">{title}</div>
        </div>
    );
}
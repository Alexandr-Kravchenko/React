import React from 'react'

export default function ListItem(props) {
    const { onClick } = props;
    const { id, title, active } = props.list;

    return (
        <div className={active ? "list-item active" : "list-item"} id={id} onClick={() => onClick(id) }>
            <div className="list-item__title">{title}</div>
        </div>
    );
}
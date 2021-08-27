import React from 'react';

export default function Toggler(props) {
    const { setFilter } = props;
    function onClickAll(e) {
        setFilter('all');
    }
    function onClickOpened(e) {
        setFilter('opened');
    }
    return (
        <div className="toggle">
            <button onClick={onClickAll}>All</button>
            <button  onClick={onClickOpened}>Opened</button>
        </div>
    )
}
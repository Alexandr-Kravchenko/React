import React from 'react';
import './style.css';

export default function Toggler(props) {
    const { toggleFilter } = props;

    return (
        <div className="toggle">
            <button onClick={() => toggleFilter('all')}>All</button>
            <button onClick={() => toggleFilter('opened')}>Opened</button>
        </div>
    )
}
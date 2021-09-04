import React from 'react';
import './style.css';

export default function Toggler(props) {
    const { toggleFilter, filter } = props;

    return (
        <div className="toggle">
            <button className={filter === 'all' ? 'toggler active' : 'toggler'} onClick={() => toggleFilter('all')}>All</button>
            <button className={filter === 'opened' ? 'toggler active' : 'toggler'} onClick={() => toggleFilter('opened')}>Opened</button>
        </div>
    )
}
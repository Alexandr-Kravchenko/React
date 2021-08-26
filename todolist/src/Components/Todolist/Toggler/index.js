import React from 'react';

export default function Toggler(props) {
    const { state, setState } = props;
    function onClickAll(e) {
        setState({...state, filter: 'all'});
    }
    function onClickOpened(e) {
        setState({...state, filter: 'opened'});
    }
    return (
        <div className="toggle">
            <button onClick={onClickAll}>All</button>
            <button  onClick={onClickOpened}>Opened</button>
        </div>
    )
}
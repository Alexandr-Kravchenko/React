import React, { useState } from 'react'
import DashboardItem from './DashboardItem'
import AddListForm from '../AddListForm';
import { NavLink } from 'react-router-dom';
import './style.css';


export default function Dashboard(props) {
    const { onSubmitHandler, onSelectList, lists, onRemoveList, numberToday, numberOpenedTask } = props;

    const [listFormShown, setListFormShown] = useState(false);

    function toggleForm() {
        setListFormShown(!listFormShown);
    }

    return (
        <div className="dashboard">
            <h2 className="dashboard__title">
                Lists
                <div className={listFormShown ? "dashboard__add active" : "dashboard__add"} onClick={toggleForm}></div>
            </h2>
            {listFormShown ? <AddListForm onSubmitHandler={onSubmitHandler} /> : null}

            <div className="dashboard__items">
                <div className="dashboard__items__item">
                    <div className="dashboard__items__item__title">
                        <NavLink className="dashboard__items__item__link" activeClassName="active" to={`/today`}>Today ({numberToday})</NavLink>
                    </div>
                </div>
                {
                    lists.map(list => {
                        return <DashboardItem list={list} onClick={onSelectList} key={list.id} onRemove={onRemoveList} numberOpenedTask={numberOpenedTask}/>
                    })
                }
            </div>
        </div>
    );
}
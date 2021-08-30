import React, { useState } from 'react'
import DashboardItem from './DashboardItem'
import AddListForm from '../AddListForm';

export default function Dashboard(props) {
    const { onSubmitHandler, onListClick, lists } = props;

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
                {
                    lists.map(list => {
                        return <DashboardItem list={list} onClick={onListClick} key={list.id} />
                    })
                }
            </div>
        </div>
    );
}
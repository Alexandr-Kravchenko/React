import React from 'react'
import ListItem from './ListItem/index.js'

export default function Lists(props) {
    const { lists, setList } = props;

    function onClickHandler(id) {
        let tempLists = [...lists];
        tempLists.forEach(list => list.active = false)
        let list_id = tempLists.findIndex(list => list.id === id);

        tempLists[list_id].active = !tempLists[list_id].active;
        setList([...tempLists])
    }
    return (
        <div className="lists">
            <h2 className="lists__title" >Lists</h2>
            {
                lists.map(list => {
                    return <ListItem list={list} onClick={onClickHandler} key={list.id}/>
                })
            }
        </div>
    );
}
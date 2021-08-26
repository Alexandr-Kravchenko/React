import React from 'react';

export default function Todo(props) {
    const { state, setState } = props;

    function isDue(date) {
        const currentDate = new Date();
        return new Date(date) <= currentDate;
    }

    function onClickHandler(e) {
        let currentTodo = e.currentTarget;
        let currentButton = e.target;

        let tempState = { ...state }
        let id = tempState.todolist.findIndex(todo => todo.id === +currentTodo.id)

        if (currentButton.className === 'terminator') {
            tempState.todolist.splice(id, 1)
            setState(tempState);
        }
        if (currentButton.className === 'status') {
            tempState.todolist[id].status = !tempState.todolist[id].status;
            setState(tempState);
        }
    }

    function filterList(list) {
        if (state.filter === 'all') {
            return list;
        } else if (state.filter === 'opened') {
            return list.filter(todo => todo.status === false)
        }
    }
    
    return (
        filterList(state.todolist).map(todo => {
            const { id, description, title, due_date, status } = todo;
            return (
                <div className="todo" key={id} id={id} onClick={onClickHandler}>
                    <div className={status ? 'title done' : 'title'}>{title}</div>

                    <div className="description">{description}</div>

                    <div>
                        <input type="checkbox" className="status" checked={status} />
                    </div>

                    <div className={isDue(due_date) ? 'due-date due' : 'due-date'}>
                        {due_date}
                    </div>

                    <div className="terminator">✖</div>
                </div>
            );
        })

    )
}

function getTodoList() {
    return fetch('http://localhost:3000/todolist')
        .then(res => res.json())
        .then(list => {
            list.forEach(todo => todolist.push(new Todo(todo)));
            createTodoRowList(todolist);
        });
}

function postTodo(todo) {
    return fetch('http://localhost:3000/todolist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(res => res.json())
}

function updateTodo(todo, id) {
    return fetch(`http://localhost:3000/todolist/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
        .then(res => res.json())
}

function deleteTodo(id) {
    return fetch(`http://localhost:3000/todolist/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
}

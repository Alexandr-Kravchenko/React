function createTitle(title, status) {
    return createElement(
        'td', {
        class: status ? 'title done' : 'title'
    },
        title
    )
}

function createDescription(description) {
    return createElement('td', { class: 'description' }, description);
}

function createStatus(status) {
    const input = createElement('input', {
        class: 'status',
        type: 'checkbox',
    })
    input.checked = status;
    return createElement('td', {}, input)
}

function createDueDate(due_date) {
    if (due_date) {
        let date = new Date(due_date);
        return createElement('td', {
            class: isDue(date) ? 'due-date due' : 'due_date'
        },
            date.toLocaleDateString()
        )
    } else {
        return createElement('td', { class: 'no_date' }, '')
    }
}

function createDeleteButton() {
    return createElement('td', {
        class: 'terminator'
    }, '✖')
}

function isDue(date) {
    const currentDate = new Date();
    return date <= currentDate;
}

function createTodoRow(props) {
    const { id, title, description, status, due_date } = props;
    return createElement('tr', { id },
        createTitle(title, status),
        createDescription(description),
        createStatus(status),
        createDueDate(due_date),
        createDeleteButton()
    );
}

function createTodoRowList(props) {
    const { todolist, filter } = props;
    if (todolist.length > 0) {
        let rows;
        if (filter === 'all') {
             rows = todolist.map(createTodoRow)
        }
        if (filter === 'opened') {
            let filteredList = todolist.filter(todo => !todo.status)
            rows = filteredList.map(createTodoRow)
        }
        return rows;
    } else {
        return createElement('tr', {},
            createElement('td', { colspan: 4 }, 'Todolist not found'));
    }
}

function createTable(props) {
    const { todolist, onRemove, onToggleTodo, onToggleFilter, activeFilter } = props;

    onBodyClickHandler = (e) => {
        let item = e.target;
        let currentTodo = item.closest('tr');
        let todo_id = currentTodo.id;

        if (item.className === 'terminator') {
            onRemove(todo_id);
        }

        if (item.className === 'status') {
            let title = currentTodo.querySelector('.title');
            title.classList.toggle('done')
            let due_date = currentTodo.querySelector('.due-date');
            if (due_date) due_date.classList.remove('due');
            onToggleTodo(+currentTodo.id);
        }
    }

    onFilterClickHandler = (e) => {
        let buttons = document.querySelectorAll('.toggle button');
        if (buttons.length >= 1) {
            buttons.forEach(button => button.classList.remove('active'));
        }

        let item = e.target;
        if (item.className === 'all') {
            onToggleFilter({ filter: 'all' })
        }
        if (item.className === 'opened') {
            onToggleFilter({ filter: 'opened' })
        }
    }

    return createElement('table', { class: 'todolist' },
        createElement('caption', {}, 'Todolist'),
        createElement('thead', {},
            createElement('td', {}, 'Title'),
            createElement('td', {}, 'Description'),
            createElement('td', {}, 'Status'),
            createElement('td', {}, 'Due Date'),
        ),
        createElement('tbody', { onclick: onBodyClickHandler },
            createTodoRowList({ todolist, filter: activeFilter })
        ),
        createElement('tfoot', { onclick: onFilterClickHandler },
            createElement('td', { colspan: 4, class: 'toggle' },
                createElement('button', { class: (activeFilter === 'all') ? 'all active' : 'all' }, 'All'),
                createElement('button', { class: (activeFilter === 'opened') ? 'opened active' : 'opened' }, 'Opened')
            )
        ),

    )
}
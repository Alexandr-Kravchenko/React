class Component {
    setState(changes) {
        Object.assign(this.state, changes);
        this.markForUpdate();
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            todolist: [],
            filter: 'all'
        };
        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);

    }

    componentDidMount() {
        fetch('http://localhost:3000/todolist')
            .then(response => response.json())
            .then(todolist => { this.setState({ todolist }) });
    }

    createTodo(todo) {
        const { todolist } = this.state;
        postTodo(todo)
            .then(todo => this.setState({
                todolist: [...todolist, todo]
            }), alert);
    }

    toggleStatus(id) {
        const { todolist } = this.state;
        let tempList = [...todolist];
        tempList.find(todo => {
            if (todo.id === id) {
                todo.status = !todo.status;
                updateTodo(todo, id);
            }
        });
        this.setState({ todolist: tempList })
    }

    removeTodo(id) {
        const { todolist } = this.state;
        let tempList = [...todolist];
        let todo_id = tempList.findIndex(todo => todo.id === id);
        tempList.splice(todo_id, 1);
        deleteTodo(id);
        this.setState({ todolist: tempList })
    }

    toggleFilter(filter) {
        this.setState({ ...filter })
    }

    render() {
        const { todolist, filter } = this.state;
        return (
            createElement(Fragment, {},
                createElement(createForm, { onsubmit: this.createTodo }),
                createTable({
                    todolist,
                    activeFilter: filter,
                    onRemove: this.removeTodo,
                    onToggleTodo: this.toggleStatus,
                    onToggleFilter: this.toggleFilter
                })
            )
        );
    }
}

function Fragment() {
    return document.createDocumentFragment();
}

const app = new App();
const root = document.getElementById('root');
root.appendChild(app.render());
app.componentDidMount();

app.markForUpdate = () => {
    root.innerHTML = '';
    root.appendChild(app.render());
}
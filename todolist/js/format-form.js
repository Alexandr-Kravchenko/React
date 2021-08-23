function createForm(props) {
    const { onsubmit } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const todo = Object.fromEntries(formData.entries());
        let validInput = todo.title.trim()
        if(validInput.length) {
            todo.status = false
            onsubmit(todo);
            e.target.reset();
        } else {
            e.target.reset();
            alert('Please, input title!')
        }
    }

    return createElement('form',
        { class: 'add-todo', name: 'add-todo', onsubmit: submitHandler },
        createElement('h2', {}, "To Add Your Todo"),
        createElement('input', {
            type: 'text',
            name: 'title',
            required: '',
            placeholder: 'Input title'
        }),
        createElement('input', {
            type: 'text',
            name: 'description',
            placeholder: 'Input description'
        }),
        createElement('input', {
            type: 'date',
            name: 'due_date'
        }),
        createElement('button', {
            type: 'submit'
        }, 'Add')
    )
}
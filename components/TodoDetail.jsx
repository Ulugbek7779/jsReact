const TodoDetail = ({ todo, deleteTodo }) => {
    return (
        <div className="columns">
            <div className="column">
                <div className="is-5">{ todo.title} </div>
            </div>
            <div className="column is-narrow">
                <div className="buttons">
                   <button onClick={() => deleteTodo(todo.id)} className="button is-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoDetail
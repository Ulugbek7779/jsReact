import TodoDetail from './TodoDetail'

const Todos = ({ todos, deleteTodo }) => {
      return(
          <div>
              <h1 className="title has-text-primary">
                  All todos
              </h1>

              { Todos.map(todo =>(
                <TodoDetail key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
              ))  }
          </div>
      )
}

export default Todos
import { useState } from 'react'
import Form from './Form'
import Todos from './Todos'

const Main = () => {
    const [ todos, setTodos ] = useState([
        {id:1, title: "Non sotib olish", completed: false},
        {id:2, title: "Tuxum sotib olish", completed: false},
        {id:3, title: "Olma sotib olish", completed: false},
        {id:4, title: "Sport bilan shug'unlanish", completed: false},
        {id:5, title: "Kitob o'qish", completed: false},
    ])

    const deleteTodo = id => {
        const newTodos = todos.filter( todo => todo.id =! id)
        setTodos(newTodos)
    }

    return (
        <div className="container mt-4">
            <div className="columns is-centered">
                <div className="column is-6">
                 <Form/>

                 <Todos todos={todos} deleteTodo={ deleteTodo}/>
                </div>
            </div>
        </div>
    )
}

export default Main



const Todo = (props) => {
    const { todos, title, DeleteDatatodo } = props
    const handleDelete = (id) => {
        DeleteDatatodo(id)

    }
    return (
        <div className='Todo-container'>
            {title}
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className='Todo-child'>{todo.title} <span onClick={() => handleDelete(todo.id)}>X</span></li>
                    </div>

                )
            })}

        </div>
    )


}



export default Todo
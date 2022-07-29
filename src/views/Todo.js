


const Todo = (props) => {
    const todos = props.todos
    return (
        <div className='Todo-container'>
            {todos.map(todo => {
                return (
                    <div className='Todo-child' key={todo.id}>{todo.title}</div>
                )
            })}

        </div>
    )


}



export default Todo
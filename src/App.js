import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react'
import Todo from './views/Todo';



function App() {

  // state
  let [name, setName] = useState("huy")
  const [todos, setTodo] = useState([
    { id: 'todo1', title: 'watching todo' },
    { id: 'todo2', title: 'watching doto' },
    { id: 'todo3', title: 'watching uu' }
  ])

  const handleEvenClick = (event) => {
    if (!name) {
      alert('errol')
      return
    }
    let dotolist = { id: Math.floor(Math.random() * 100), title: name + Math.floor(Math.random() * 100) };
    setTodo([...todos, dotolist])
    setName('')
  }
  const handleEventOnchange = (event) => {
    setName(event.target.value)
  }
  const DeleteDatatodo = (id) => {
    let currentTodo = todos
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodo(currentTodo)

  }




  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word react with ziille</h1>
        <Todo todos={todos}
          title='list todo'
          DeleteDatatodo={DeleteDatatodo}
        ></Todo>
        <input type="text" value={name} onChange={handleEventOnchange}></input>
        <button onClick={handleEvenClick}>click me</button>

      </header>
    </div>
  );
}

export default App;

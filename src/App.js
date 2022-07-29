import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react'



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
    let dotolist = { id: Math.floor(Math.random() * 100), title: name };
    setTodo([...todos, dotolist])
    setName('')
  }
  const handleEventOnchange = (event) => {
    setName(event.target.value)
  }
  //




  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word react with ziille</h1>
        <div className='Todo-container'>
          {todos.map(todo => {
            return (
              <div className='Todo-child' id={todo.id}>{todo.title}</div>
            )
          })}

        </div>
        <input type="text" value={name} onChange={handleEventOnchange}></input>
        <button onClick={handleEvenClick}>click me</button>

      </header>
    </div>
  );
}

export default App;

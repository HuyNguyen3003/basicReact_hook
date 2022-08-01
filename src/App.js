import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react'
import Todo from './views/Todo';
import Covid from './views/covid';
import { Countdown, NewCountdown } from './views/Countdown';
import Blog from './views/Blog';
import DetailBlog from './views/Detailblog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  // state
  let [name, setName] = useState("")
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
  const timeend = () => {
    alert('time done')
  }





  return (
    <Router >
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <Countdown
              timeend={timeend}
            ></Countdown>
            <NewCountdown
              timeend={timeend}
            ></NewCountdown>
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title='list todo'
              DeleteDatatodo={DeleteDatatodo}
            ></Todo>
            <input type="text" value={name} onChange={handleEventOnchange} />
            <button type="button" onClick={handleEvenClick}>Click me</button>
          </Route>
          <Route path="/secret">

          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id" >
            <DetailBlog />
          </Route>
        </Switch>


      </div>
    </Router>


  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react'



function App() {

  // state
  let [name, setName] = useState("huy")

  const handleEvenClick = (event) => {

    console.log("hello ", name)
  }
  const handleEventOnchange = (event) => {
    setName(event.target.value)
  }


  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word react with {name}</h1>
        <input type="text" value={name} onChange={handleEventOnchange}></input>
        <button onClick={handleEvenClick}>click me</button>

      </header>
    </div>
  );
}

export default App;

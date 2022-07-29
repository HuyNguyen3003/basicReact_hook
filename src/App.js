import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

function App() {
  let name = 'hook by huy'

  const handleEvenClick = (event) => {
    console.log("hello", event.target.value)
  }


  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word react {name}</h1>
        <input type="text" value="Huy" onChange={handleEvenClick}></input>
        <button onClick={handleEvenClick}>click me</button>

      </header>
    </div>
  );
}

export default App;

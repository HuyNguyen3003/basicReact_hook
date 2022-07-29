import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

function App() {
  let name = 'hook by huy'
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word react {name}</h1>

      </header>
    </div>
  );
}

export default App;

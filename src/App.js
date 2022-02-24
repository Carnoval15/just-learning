import logo from './logo.svg';
import './App.css';

function Haha() {
  return (
    <p>yooooooo</p>
  );
}

function App(props) {
  const subject = "yes";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          well, hello {subject}
        </p>
        <Haha />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

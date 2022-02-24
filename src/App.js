import logo from './logo.svg';
import './App.css';

function navbar() {
  return (
    <nav>
      <h1>Yoo site</h1>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
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
        navbar,
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

import logo from './logo.svg';
import './App.css';

function Yes(){
  return(
    <div>
      <h1>YESESYEYSEY</h1>
    </div>
  )
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
        <Yes />
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

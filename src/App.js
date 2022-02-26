import logo from './logo.svg';
import './App.css';

function Yes() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React!</h1>
      <ol>
        <li>react is react</li>
        <li>react is wonderful</li>
        <li>well, uh ran out of ideas, F</li>
      </ol>
      <footer>
        @ 2022 Carnoval development/.
      </footer>
    </div>
  )
}
function App(props) {
  const subject = "yes";
  return (
    <div className="App">

    </div>
  );
}

export default App;

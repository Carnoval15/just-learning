import logo from './logo.svg';
import './App.css';

import Navbar from "./Components/Navbar.js"
import Main from "./Components/Main.js"
//import Footer from "./Components/Footer.js"


function App(props) {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;


// function Yes() {
//   return (
//     <div>
//       <Navbar />
//       <Main />
//       <Footer />
//     </div>
//   )
// }
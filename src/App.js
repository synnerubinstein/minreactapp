import logo from './matias.png';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lol Hehehe Hei jeg vil bare være aktiv på Github litt mer :) <code>src/App.js</code>  reload.
        </p>
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

function PostRequest(brukernavn, svar){
  axios({
    method: 'post',
    url:'http://192.168.198.49:3000',
    data: {
      brukernavn,
      svar
    }
  })
  .then((response)=>{
    console.log(response);
  },(error)=>{
    console.log(error)
  })
}

var userInput = "Matias"
var userAnswer = "Superstar coder"
PostRequest(userInput, userAnswer)

export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  let response = resp();
  response.then((res) => console.log(res.data));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

async function resp(){
  const response =  await axios.get('http://localhost:4000/welcome');
  console.log(response.data);
}

export default App;

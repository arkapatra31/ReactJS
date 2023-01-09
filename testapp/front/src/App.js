import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import BackendInfo from './component/BackendInfo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <BackendInfo />
      </header>
    </div>
  );
}

// async function resp(){
//   const response =  await axios.get('http://localhost:4000/welcome');
//   console.log(response.data);
// }

export default App;

import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import InputFields from '../InputFields/InputFields';
import Table from '../Table/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <InputFields />
        <Table />
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

export default App;
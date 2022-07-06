import logo from './logo.svg';
import './App.css';
import {Profiler, useState} from "react";
import {Button, handleProfilerRender} from "./Components";

function App() {
  const [value, setValue] = useState(0);

  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <Profiler id="Frontpage" onRender={handleProfilerRender}>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button onClickFunction={() => {
          setValue(value + 1)
        }}>
          Click here
        </Button>
      </Profiler>
    </header>
  </div>);
}

export default App;

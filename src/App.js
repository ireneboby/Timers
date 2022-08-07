import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import logo from './logo.svg';
import './App.css';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <h1>TMRZ</h1>
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
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers';
import logo from './logo.svg';
import './App.css';
// import omponents
import NewTimer from './components/NewTimer'
import ListTimers from './components/ListTimers'

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <h1>TMRZ</h1>
      <NewTimer />
      <ListTimers />
    </Provider>
  );
}

export default App;

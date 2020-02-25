import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './js/reducers/';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

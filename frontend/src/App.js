import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import loginReducer from './components/Login/store/reducer';
import signupReducer from './components/Signup/store/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import loginReducer from './components/Login/store/reducer';
import signupReducer from './components/Signup/store/reducer';
import logoutReducer from './components/Logout/store/reducer';
import profileReducer from './containers/Profile/store/reducer';
import jobReducer from './containers/Dashboard/store/reducer';
import eventReducer from './containers/Event/store/reducer';
import applicationReducer from './containers/Application/store/reducer';
import createJobReducer from './components/create-job/store/reducer';
import createEventReducer from './components/create-event/store/reducer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../src/components/Navbar/Navbar';

library.add(fab, faEdit, faUser);

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  logout: logoutReducer,
  profile: profileReducer,
  job: jobReducer,
  event: eventReducer,
  app: applicationReducer,
  createjob: createJobReducer,
  createevent: createEventReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }  
}

export default App;

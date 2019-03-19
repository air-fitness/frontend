import React from 'react';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import thunk from 'redux-thunk';
import { render } from "react-dom";
// import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

const logger = createLogger({
  collapsed: true
});

const initialState = {
  userData: {},
  registrationCalled: false,
  registrationSuccess: false,
  regError: false,
  loginCalled: false,
  loginLoading: false,
  loginReturned: false,
  loginSuccess: false,
  loginError: false,
  errors: {}
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
// ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();

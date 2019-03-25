import React from 'react';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import thunk from 'redux-thunk';
import { render } from "react-dom";
// import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


const logger = createLogger({
  collapsed: true
});

const initialState = {
  isLoggedIn: false,
  token: '',
  userData: {},
  scheduledClasses: [],
  instructors: [],
  classTypes: [],
  registrationCalled: false,
  registrationSuccess: false,
  regError: false,
  loginCalled: false,
  loginSuccess: false,
  loginError: false,

  getClassTypesSuccess: false,
  getCalendarSuccess: false,
  getInstructorsSuccess: false,
  loading: null,
  
  errors: {},
  
};

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [
  'registrationCalled',
  'registrationSuccess',
  'regError',
  'loginCalled',
  'loginSuccess',
  'loginError',
  'errors',
  'loading'
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

//docs
// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
//first
// export const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Route path="/" component={App} />
        {/* <App /> */}
      </Router>
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);
// ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();

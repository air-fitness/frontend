import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        
        <Switch>     
          {/* <Route exact path='/' component={Header} /> */}
          <Route exact path='/home' component={Home} />
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;

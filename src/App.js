import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Classes from './components/Classes';
import Instructors from './components/Instructors';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import Header from './components/Header'

import Home from './components/Home';

import './App.css';

class App extends Component {
  // componentDidMount() {
  //   loadDummyData()
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>     
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/classes' component={Classes} />
          <Route exact path='/instructors' component={Instructors} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;

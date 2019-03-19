import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';

import Classes from './components/Classes';
import Instructors from './components/Instructors';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';

import Home from './components/Home';
import Header from './components/Header';

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
          {/* <Route exact path='/' component={Header} /> */}
          <Route exact path='/home' component={Home} />
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          
          <Route exact path='/classes' component={Classes} />
          <Route exact path='/instructors' component={Instructors} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Classes from "./components/Classes";
import Instructors from "./components/Instructors";
import Calendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Login2 from "./components/Login/Login2";
import Register2 from './components/Login/Register2'
import { connect } from "react-redux";
import Auth from './components/Login/Auth'
import Home from "./components/Home";
import "./App.css";

/*eslint no-unused-vars: 0*/


class App extends Component {
  render() {
    // console.log('app-props', this.props)
    return (
      <div className="App">
        
        <Switch>
        <Route path='/' render={(props) => (
          this.props.isLoggedIn ? 
          (<Home history={this.props.history}/>) :
          (<Auth history={this.props.history} location={this.props.location} match={this.props.match}/>)
        )}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register2} />
          <Route exact path="/login" component={Login2} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/instructors" component={Instructors} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

// export default App;
// const mapStateToProps = state => {
//   return state;
// }
// export default connect(
//   mapStateToProps
// )(Authentication(App)(Login2));
const mapStateToProps = state => {
  return state;
}
export default connect(
  mapStateToProps
)(App);

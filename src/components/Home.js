import React, { Component } from 'react';
import Header from '../components/Header';
// import {Redirect} from 'react-router-dom';
import Tabs from './Tabs';
import Admin from './Admin';
import Classes from './Classes';
import Instructors from './Instructors';
import Calendar from './Calendar';
import Dashboard from './Dashboard';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import {getClassesTypes, getInstructors, getCalendar, loadingToggle} from '../actions/index';
import { getAllData } from '../actions/index';

/*eslint no-unused-vars: 0*/
class Home extends Component {
  componentDidMount() {
    this.props.getAllData(this.props.history);
  }

  render() {
    // console.log('home-props',this.props)

    return (
      <div className="home-wrapper">
        <header className="App-header">
          <Header />
        </header>

        <div className="tabs-container">
          <Tabs />
          <div className="classes-title" />
          <div className="tab-content">
            <div className="home">
              <Route exact path="/classes" component={Classes} />
              <Route exact path="/instructors" component={Instructors} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/admin" component={Admin} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Home;
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  {
    getAllData
  }
)(Home);


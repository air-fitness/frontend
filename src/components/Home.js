import React, {Component, Fragment} from 'react';
import Header from '../components/Header';
import {Redirect} from 'react-router-dom';
import Tabs from './Tabs';



class Home extends Component {
  render() {
    return(
      <Fragment>
        <header className="App-header">
          <Header />
        </header>
        <div className="home">
          <Tabs/>
          {this.props.location.pathname === '/'? <Redirect to='/classes'/>: null}
        </div>
      </Fragment>
    );
  }
}


export default Home;

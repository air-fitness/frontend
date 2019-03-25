import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import LogOutButton from './Login/LogOutButton';

class Header extends Component {
  render() {
    // console.log('header-props', this.props)
    return (
      <div className="header">
        <span className='buttons-wrapper'>
          <Link to="/dashboard" className="home-button">
            <Button circular icon="home" color={'teal'} />
          </Link>
        </span>
        <span>
          <h3>Welcome to Air Fitness!</h3>
          <p>{`{userName: ${this.props.userData.firstName}}`}</p>
          <p>{`{instructor: ${this.props.userData.isInstructor}}`}</p>
        </span>
        <span className='buttons-wrapper'>
          <LogOutButton />
        </span>
      </div>
    );
  }
}
// export default Header;
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Header);

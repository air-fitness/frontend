import React, {Component, Fragment} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


class Header extends Component {
  render() {
    return(
      <Fragment>
      <Button.Group size='mini' floated={'right'}>
        <Link to='/login' >
          <Button>Log In</Button>
        </Link>
        <Button.Or />
        <Link to='/register'>
          <Button>Sign Up</Button>
        </Link>
      </Button.Group>
    </Fragment>
    );
  }
}
export default Header;

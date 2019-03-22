import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from "react-redux";



class Header extends Component {
  
  render() {
      return(
        <div className='header-buttons'>
          <Link to='/' className='home-button'><Button circular icon='home' color={"teal"}></Button></Link>
        <Button.Group size='mini' floated={'right'}>
          <Link to='/login' >
            <Button>Log In</Button>
          </Link>
          <Button.Or />
          <Link to='/register'>
            <Button>Sign Up</Button>
          </Link>
        </Button.Group>
      </div>
      );
    }
    
  }
export default Header;




import React from "react";
import Register2 from "./Register2";
import Login2 from "./Login2";
import {Fragment} from 'react';
import { connect } from "react-redux";


class Auth extends React.Component {
  render() {
    // console.log('auth-props',this.props)
    // console.log('auth-props-location.pathname',this.props.location.pathname)
    return(
      <Fragment>
        {this.props.location.pathname === '/register' ? <Register2 />  
          : this.props.location.pathname === '/login' ? <Login2 /> 
          : this.props.history.push ('/login')}
      </Fragment>
    )
  }
}
// export default Auth;
const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps)(Auth);
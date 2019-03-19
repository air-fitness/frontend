import React, {Component} from 'react';
import { Form, Input } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      password: '',
    }
  }

  render() {
    return(
      <div className="userForm">
        <div className="login">
        <h1>Login</h1>
        <h3>First Time?</h3>
        <h5>Click <Link to='/register'>HERE</Link> to Sign Up!</h5>
          <Form>
          <Form.Field >
            <label>Email:</label>
            <Input 
              placeholder='email' 
              name='email' 
              value={this.state.email} 
              type='email'
              onChange={this.handleInput}
            />
          </Form.Field>
          <Form.Field >
            <label>password:</label>
              <Input 
                placeholder='password' 
                name='password' 
                value={this.state.password} 
                type='password'
                onChange={this.handleInput}
              />
            </Form.Field>
          </Form>
        </div>
      </div>
    );
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const userCreds = {
      password: this.state.password1,
      email: this.state.email,
    }
    console.log(userCreds);
    this.setState({email:'',password:''});
  }


}
export default Login;

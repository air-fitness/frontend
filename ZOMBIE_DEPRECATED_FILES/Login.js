// import React, {Component} from 'react';
// import { Form, Input } from 'semantic-ui-react';
// import {Link} from 'react-router-dom';
// import { connect } from "react-redux";
// import { callLogin } from '../actions/index';




// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//     }
//   }

//   render() {
//     return(
//       <div className="userForm">
//         <div className="login">
//         <h1>Login</h1>
//         <h3>First Time?</h3>
//         <h5>Click <Link to='/register'>HERE</Link> to Sign Up!</h5>
//           <Form>
//           <Form.Field >
//             <label>username:</label>
//             <Input 
//               placeholder='username' 
//               name='username' 
//               value={this.state.username} 
//               type='username'
//               onChange={this.handleInput}
//             />
//           </Form.Field>
//           <Form.Field >
//             <label>password:</label>
//               <Input 
//                 placeholder='password' 
//                 name='password' 
//                 value={this.state.password} 
//                 type='password'
//                 onChange={this.handleInput}
//               />
//             </Form.Field>
//             <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
//           </Form>
//         </div>
//       </div>
//     );
//   }
//   handleInput = (e) => {
//     e.preventDefault();
//     this.setState({[e.target.name]:e.target.value});
//   };
//   handleSubmit = (e) => {
//     let history = this.props.history;
//     e.preventDefault();
//     const userCreds = {
//       password: this.state.password,
//       username: this.state.username,
//     }
//     this.props.callLogin(e, userCreds, history)
//     this.setState({username:'',password:''});
//   }


// }
// const mapStateToProps = state => {
//   return state;
// }

// export default connect(
//   mapStateToProps, {
//     callLogin
//   }
// )(Login);

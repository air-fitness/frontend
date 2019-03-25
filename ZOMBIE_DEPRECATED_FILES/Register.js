// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Form, Input } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import { callReg } from "../actions/index";

// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       instructor: false,
//       firstName: "",
//       lastName: "",
//       userName: "",
//       email: "",
//       password: ""
//     };
//   }
//   render() {
//     return (
//       <div className="userForm">
//         <div className="register">
//           <h1>Register</h1>
//           <h3>Already registered?</h3>
//           <h5>
//             Click <Link to="/login">HERE</Link> to switch to Login
//           </h5>
//           <Form>
//             <Form.Field
//               label="Select for instructor"
//               name="dropdown"
//               control="select"
//               onChange={this.handleSelect}
//             >
//               <option value="client">Client</option>
//               <option value="instructor">Instructor</option>
//             </Form.Field>
//             <Form.Field>
//               <label>Email:</label>
//               <Input
//                 placeholder="email"
//                 name="email"
//                 value={this.state.email}
//                 type="email"
//                 onChange={this.handleInput}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>firstName:</label>
//               <Input
//                 placeholder="firstName"
//                 name="firstName"
//                 value={this.state.firstName}
//                 type="text"
//                 onChange={this.handleInput}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>lastName:</label>
//               <Input
//                 placeholder="lastName"
//                 name="lastName"
//                 value={this.state.lastName}
//                 type="text"
//                 onChange={this.handleInput}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>userName:</label>
//               <Input
//                 placeholder="userName"
//                 name="userName"
//                 value={this.state.userName}
//                 type="text"
//                 onChange={this.handleInput}
//               />
//             </Form.Field>
//             <Form.Field>
//               <label>password1:</label>
//               <Input
//                 placeholder="password1"
//                 name="password1"
//                 value={this.state.password1}
//                 type="password"
//                 onChange={this.handleInput}
//               />
//             </Form.Field>
//             <Form.Field disabled={true}>
//               <label>password2:</label>
//               <Input
//                 placeholder="password2"
//                 name="password2"
//                 value={this.state.password2}
//                 type="password"
//                 onChange={this.handleInput}
//               />
//             </Form.Field>
//             <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
//           </Form>
//         </div>
//       </div>
//     );
//   }
//   handleInput = e => {
//     e.preventDefault();
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSelect = e => {
//     if (e.target.value === "instructor") {
//       this.setState({ admin: true });
//     } else {
//       this.setState({ admin: false });
//     }
//   };
//   handleSubmit = e => {
//     let history = this.props.history;
//     e.preventDefault();
//     const newUser = {
//       instructor: this.state.instructor,
//       first_name: this.state.firstName,
//       last_name: this.state.lastName,
//       username: this.state.userName,
//       password: this.state.password,
//       email: this.state.email
//     };

//     console.log("newUser", newUser);
//     this.props.callReg(e, newUser, history);
//     this.setState({
//       instructor: false,
//       firstName: "",
//       lastName: "",
//       userName: "",
//       email: "",
//       password1: ""
//     });
//   };
// }
// const mapStateToProps = state => {
//   return state;
// };

// export default connect(
//   mapStateToProps,
//   {
//     callReg
//   }
// )(Register);

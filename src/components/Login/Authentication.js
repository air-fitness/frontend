import React from "react";
import axios from "axios";

const Authentication = App => Login2 => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false,
        token: null
      };
    }

    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.setState({ isLoggedIn: true });
        this.setState({ token: localStorage.getItem("token") });
      }
    }

    handleLogin = e => {
      e.preventDefault();
      let loginCredentials = {
        username: e.target[0].value,
        password: e.target[1].value
      };
      axios
        .post(
          "https://air-fitness-backend.herokuapp.com/api/auth/login",
          loginCredentials
        )
        .then(res => {
          console.log(res.data);
          this.setState({ token: res.data.token });
          localStorage.setItem("token", res.data.token);
          this.setState({ isLoggedIn: true });
        })
        .catch(err => console.log(err));
    };

    handleRegister = e => {
      e.preventDefault();
      let registryCredentials = {
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        username: e.target[2].value,
        instructor: e.target[3].value,
        email: e.target[4].value,
        password: e.target[5].value
      };
      axios
        .post(
          "https://air-fitness-backend.herokuapp.com/api/auth/register",
          registryCredentials
        )
        .then(res => {
          console.log(res.data.message);
          this.setState({ token: res.data.token });
          localStorage.setItem("token", res.data.token);
          this.setState({ isLoggedIn: true });
        })
        .catch(err => console.log(err));
    };

    render() {
      if (this.state.isLoggedIn) {
        return <App />;
      } else {
        return (
          <Login2
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
          />
        );
      }
    }
  };
};

export default Authentication;

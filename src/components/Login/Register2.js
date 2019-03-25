import React from "react";
import abs from "../../images/abs.png";
import styled from "styled-components";
import background from "../../images/login-bg.jpg";

import { connect } from "react-redux";
import {protectedHandleRegister} from '../../actions/index';
import {Link} from 'react-router-dom';



const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 14vh;
`;

const FormContainer = styled.div`
  max-width: 349px;
  width: 100%;
`;

// const LoginContainer = styled.div`
//   margin: 30px 0 0 0;
//   width: 100%;
//   height: 450px;
//   background: #fff;
//   border: 1px solid #e2e2e2;
//   border-radius: 3px;
//   box-shadow: 0 0 30px black;
// `;

const RegisterContainer = styled.div`
  margin: 100px 0 0 0;
  width: 100%;
  height: 620px;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  box-shadow: 0 0 30px black;
`;

const ImageContainer = styled.div`
  width: 54%;
  margin: 21px auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 6px 10%;
`;

const InputText = styled.input`
  height: 33px;
  margin: 0 0 7px 0;
  padding: 0 0 0 9px;
  border: 1px solid #edecec;
  background: #f9f9f9;
  border-radius: 3px;
  -webkit-appearance: none;
  font-size: 14px;
`;
const InputSelect = styled.select`
  height: 33px;
  margin: 0 0 7px 0;
  padding: 0 0 0 9px;
  border: 1px solid #edecec;
  background: #f9f9f9;
  border-radius: 3px;
  -webkit-appearance: none;
  font-size: 14px;
`;



const InputOption = styled.option`
  height: 33px;
  margin: 0 0 7px 0;
  padding: 0 0 0 9px;
  border: 1px solid #edecec;
  background: #f9f9f9;
  border-radius: 3px;
  -webkit-appearance: none;
  font-size: 14px;
  select:invalid { color: blue; }
`;




const LoginButton = styled.input`
  height: 32px;
  background: #00bbff;
  color: #fff;
  opacity: 0.65;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const LinkButton = styled.button`
  color: blue;
  border-radius: 5px;
  border: none;
  background-color: white;
  padding: 10px;
  margin-top: 20px;
`;

const Title = styled.h1`
  text-align: center;
  letter-spacing: 0.5px;
  font-weight: normal;
  color: #5a0c0c;
  font-size: 1.8rem;
`;

class Register2 extends React.Component {
  render() {
    // console.log('reg-props', this.props)
    return (
      <Wrapper>
        <FormContainer>
            <RegisterContainer>
              <ImageContainer>
                <Image alt="sit up icon" src={abs} />
              </ImageContainer>
              <Title>AirFitness</Title>
              <LoginForm
                onSubmit={e => {
                  this.handleRegister(e);
                }}
              >
                <InputText type="text" placeholder="First Name" />
                <InputText type="text" placeholder="Last Name" />
                <InputText type="text" placeholder="Username" />
                <InputSelect  required defaultValue='selected'>
                  <InputOption disabled value='selected' >Are You an Instructor?</InputOption>
                  <InputOption value="false">No</InputOption>
                  <InputOption value="true">Yes</InputOption>
                </InputSelect >
                <InputText type="text" placeholder="Email" />
                <InputText type="password" placeholder="Password" />
                <LoginButton type="submit" value="Log In" />
                <Link to='/login'>
                  <LinkButton
                    type="button"
                    className="link-button"
                    onClick={this.props.showLogin}
                  >
                    Already Getting AirFit? Log in here.
                  </LinkButton>
                </Link>
              </LoginForm>
            </RegisterContainer>
        </FormContainer>
      </Wrapper>
    );
  }

  handleRegister = e => {
    e.preventDefault();
    let registryCredentials = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      username: e.target[2].value,
      instructor: JSON.parse(e.target[3].value),
      email: e.target[4].value,
      password: e.target[5].value
    };
    const routerState = this.props.routerState;
    this.props.protectedHandleRegister(registryCredentials, routerState);
  };

}

const mapStateToProps = state => {
  return state;
}
export default connect(
  mapStateToProps, {
    protectedHandleRegister
  }
)(Register2);

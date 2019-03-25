import axios from 'axios';
import { PROTECTED_LOGIN_CALLED, PROTECTED_LOGIN_RETURNED, PROTECTED_LOGIN_ERROR } from './types';
import {history} from '../history';

export const protectedHandleLogin = (loginCredentials, routerState) => {

  return function(dispatch) {
    dispatch({
      type: PROTECTED_LOGIN_CALLED
    })

  axios
    .post(
      `${process.env.REACT_APP_BACKEND || 'localhost:8000'}/api/auth/login`,
      loginCredentials
    )
    .then(res => {
      console.log('login-res', res.data);
      localStorage.setItem("jwt", res.data.token);
      let flag = false;
      if (res.data.instructor_id) {
        flag = true;
      }
      dispatch({
        type: PROTECTED_LOGIN_RETURNED,
        payload: {
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          username: res.data.username,
          userId: res.data.user_id,
          instructorId: res.data.instructor_id,
          isInstructor: flag,
          token: res.data.token
        }
      })
      history.push('/home');
    })
    .catch(err => {
      console.log('login-err', err);
      dispatch({
        type: PROTECTED_LOGIN_ERROR,
        payload: err
      })
      alert('Login Error!');
    });
  };
};

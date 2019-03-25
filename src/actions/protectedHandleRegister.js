import axios from 'axios';
import { PROTECTED_REG_CALLED, PROTECTED_REG_RETURNED, PROTECTED_REG_ERROR } from './types';
import {history} from '../history';



export const protectedHandleRegister = (registryCredentials, routerState) => {

  return function(dispatch) {
    dispatch({
      type: PROTECTED_REG_CALLED
    })

  axios
    .post(
      `${process.env.REACT_APP_BACKEND || 'localhost:8000'}/api/auth/register`,
      registryCredentials
    )
    .then(res => {
      console.log('reg_res',res.data);
      localStorage.setItem("jwt", res.data.token);
      let flag = false;
				if (res.data.instructor_id) {
					flag = true;
				}
      dispatch({
        type: PROTECTED_REG_RETURNED,
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
      console.log('reg-err', err);
      dispatch({
        type: PROTECTED_REG_ERROR,
        payload: err
      });
      alert('Register Error!');
    });
  };
};

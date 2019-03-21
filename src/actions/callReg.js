import axios from 'axios';
import {
  REG_CALLED,
  REG_RETURNED,
  REG_ERROR,
} from './types';

export const callReg = (e, creds, history) => {
  // alert('callReg');
  const promise = axios.post('https://air-fitness-backend.herokuapp.com/api/auth/register', creds);

  return function(dispatch) {
    dispatch({
      type: REG_CALLED
    });
    promise
      .then(res => {
        console.log('res', res.data);
        let flag = false;
        if (res.data.instructor_id) {
          flag = true;
        }
        dispatch({
          type: REG_RETURNED,
          payload: {
            firstName: res.data.first_name,
            lastName: res.data.last_name,
            username: res.data.username,
            userId: res.data.user_id,
            instructorId: res.data.instructor_id,
            admin: flag
          }
        });
        localStorage.setItem('jwt', res.data.token);
        history.push('/');
      }).catch((err) => {
        console.log('err', err);
        alert('err');
        dispatch({ 
          type: REG_ERROR,
          payload: err
        });
        // history.push("/");
      })
  }
}
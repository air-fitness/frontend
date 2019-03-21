import axios from 'axios';
import {
  LOGIN_CALLED,
  LOGIN_RETURNED,
  LOGIN_ERROR,
} from './types';

export const callLogin = (e, creds, history) => {
  const promise = axios.post('https://air-fitness-backend.herokuapp.com/api/auth/login', creds);

  return function(dispatch) {
    dispatch({
      type: LOGIN_CALLED
    });
    promise
      .then(res => {
        console.log('res', res.data);
        let flag = false;
        if (res.data.instructor_id) {
          flag = true;
        }
        dispatch({
          type: LOGIN_RETURNED,
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
          type: LOGIN_ERROR,
          payload: err
        });
        // history.push("/");
      })
  }
}
import axios from 'axios';
import {NEW_CLASS_TYPE} from './types';

export const callNewClassType = (e, newClass, history, header) => {
  return function(dispatch) {
    axios.post('https://air-fitness-backend.herokuapp.com/api/classes', newClass, {headers: header})
    .then(res => {
      console.log('res-new-class-type', res.data);
      dispatch({
        type: NEW_CLASS_TYPE,
        payload: res.data
      })
    }).catch(err => console.log('err-new-class-type', err));
  }
}
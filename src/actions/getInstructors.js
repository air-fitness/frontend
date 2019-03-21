import axios from 'axios'
import {GET_INSTRUCTORS} from './types'

export const getInstructors = (header) => {
  return function(dispatch) {
    
    axios.get('https://air-fitness-backend.herokuapp.com/api/instructors', {headers: header})
    .then(res => {
      console.log('res-get-instructors', res.data);
      dispatch({
        type: GET_INSTRUCTORS,
        payload: res.data
      })
    }).catch(err => console.log('err-get-instructors', err));
  }
}

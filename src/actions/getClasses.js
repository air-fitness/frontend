import axios from 'axios'
import {GET_CLASSES} from './types'

export const getClasses = () => {
  return function(dispatch) {
    axios.get('https://air-fitness-backend.herokuapp.com/api/classes')
    .then(res => {
      console.log('res-get-classes', res.data);
      dispatch({
        type: GET_CLASSES,
        payload: res.data
      })
    }).catch(err => console.log('err-get-classes', err));
  }
}

import axios from 'axios'
import {GET_CLASSES_TYPES} from './types'

export const getClassesTypes = () => {

  return function(dispatch) {
    axios.get('https://air-fitness-backend.herokuapp.com/api/classes')
    .then(res => {
      console.log('res-get-classes', res.data);
      dispatch({
        type: GET_CLASSES_TYPES,
        payload: res.data
      })
    }).catch(err => console.log('err-get-classes', err));
  }
}

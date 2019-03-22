import axios from 'axios'
import {
  SCHEDULE_CLASS_RETURNED,
} from './types'

export const callScheduleClass = (e, newClass, history, header, newScheduledClassId) => {
  // console.log ('c',newClass, 'h',header, 'n',newScheduledClassId)
  // console.log ('id:',newScheduledClassId)
  
  const promise = axios.post(`https://air-fitness-backend.herokuapp.com/api/classes/class_times/${newScheduledClassId}`, newClass, {headers: header});
  return function(dispatch) {
    promise
      .then(res => {
        console.log('res-newClass', res);
        dispatch({
          type: SCHEDULE_CLASS_RETURNED,
          payload: res.data
        })
        // history.push('/admin')
      }).catch(err => {
        console.log('error-newClass', err)
      })
  }

}
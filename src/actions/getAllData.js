import {getClassesTypes, getInstructors, getCalendar, loadingToggle} from '../actions/index';
// import {TOGGLE_LOADING} from './types';
// import {history} from '../history';


export const getAllData = (history) => {
  // console.log('history-getAll',history)
  return async function (dispatch, getState) {
    dispatch (loadingToggle(true))

    if (getState().getClassTypesSuccess.length !== 0 ||
      getState().scheduledClasses.length !== 0 || 
      getState().instructors.length !== 0) 
      {
        Promise.all([
          await dispatch(getClassesTypes()), 
          await dispatch(getInstructors()), 
          await dispatch(getCalendar()) 
        ])
      
        .then(() => {
          if (
            getState().getClassTypesSuccess === true &&
            getState().getCalendarSuccess === true && 
            getState().getInstructorsSuccess === true
            ) {
              dispatch (loadingToggle(false))
            } else {dispatch (loadingToggle(null))}
          
        }).then(()=>{
          console.log('get-allData ran');
          history.push('/dashboard');
          // window.location.reload();
        })
    } else {
      return Promise.reject('no need for getAllData');
    }
  }
}
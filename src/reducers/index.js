import {
  REG_CALLED,
  REG_RETURNED,
  REG_ERROR,
  LOGIN_CALLED,
  LOGIN_RETURNED,
  LOGIN_ERROR,
  SCHEDULE_CLASS_RETURNED,
  GET_INSTRUCTORS,
  GET_CLASSES_TYPES,
  NEW_CLASS_TYPE,


} from '../actions/types';


const rootReducer = (state = null, action) => {
  switch (action.type) {
    case REG_CALLED:
      return {
        ...state,
        registrationCalled: true
      }
    case REG_RETURNED:
      return {
        ...state,
        loginSuccess: true,
        userData: action.payload
      }
    case REG_ERROR:
      return {
        ...state,
        registrationSuccess: false,
        regError: true
      }

    case LOGIN_CALLED:
      return {
        ...state,
        loginCalled: true
      }
    case LOGIN_RETURNED:
      return {
        ...state,
        loginSuccess: true,
        userData: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginSuccess: false,
        regError: true
      }

    case SCHEDULE_CLASS_RETURNED:
      return {
        ...state,
        scheduledClasses: [...state.scheduledClasses, action.payload]
      }
      
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: action.payload
      }
    case GET_CLASSES_TYPES:
      return {
        ...state,
        classTypes: action.payload
      }
    case NEW_CLASS_TYPE:
      return {
        ...state,
        classTypes: [...state.classTypes, action.payload]
      }

    default:
      return state;
  }
}
export default rootReducer;
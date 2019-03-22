import {
  REG_CALLED,
  REG_RETURNED,
  REG_ERROR,
  LOGIN_CALLED,
  LOGIN_RETURNED,
  LOGIN_ERROR,
  // CREATE_CLASS_CALLED,
  CREATE_CLASS_RETURNED,
  // CREATE_CLASS_ERROR,
  GET_INSTRUCTORS,
  GET_CLASSES,
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

    case CREATE_CLASS_RETURNED:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      }
      
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: action.payload
      }
    case GET_CLASSES:
      return {
        ...state,
        allClasses: action.payload
      }
    case NEW_CLASS_TYPE:
      return {
        ...state,
        allClasses: [...state.allClasses, action.payload]
      }

    default:
      return state;
  }
}
export default rootReducer;
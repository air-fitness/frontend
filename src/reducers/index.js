import {
	PROTECTED_REG_CALLED,
	PROTECTED_REG_RETURNED,
	PROTECTED_REG_ERROR,
	PROTECTED_LOGIN_CALLED,
	PROTECTED_LOGIN_RETURNED,
	PROTECTED_LOGIN_ERROR,
	CREATE_CLASS_RETURNED,
	GET_INSTRUCTORS,
	GET_CLASSES,
	GET_CALENDAR,
	NEW_CLASS_TYPE,
	ATTEND_CLASS,
	ATTEND_CLASS_SUCCESS,
	BUY_PASS,
	BUY_PASS_SUCCESS,
	CLEAR_PASS,
	CLEAR_PASS_SUCCESS,
  SCHEDULE_CLASS_RETURNED,
	GET_CLASSES_TYPES,
	TOGGLE_LOADING,
} from '../actions/types';

const rootReducer = (state = null, action) => {
	switch (action.type) {
		case PROTECTED_REG_CALLED:
			return {
				...state,
				registrationCalled: true
			};
		case PROTECTED_REG_RETURNED:
			return {
				...state,
				loginSuccess: true,
				isLoggedIn: true,
				token: action.payload.token,
				userData: action.payload				
			};
		case PROTECTED_REG_ERROR:
			return {
				...state,
				registrationSuccess: false,
				regError: true,
				errors: action.payload
			};

		case PROTECTED_LOGIN_CALLED:
			return {
				...state,
				loginCalled: true
			};
		case PROTECTED_LOGIN_RETURNED:
			return {
				...state,
				loginSuccess: true,
				isLoggedIn: true,
				token: action.payload.token,
				userData: action.payload
			};
		case PROTECTED_LOGIN_ERROR:
			return {
				...state,
				loginSuccess: false,
				regError: true
			};

		case CREATE_CLASS_RETURNED:
			return {
				...state,
				classes: [...state.classes, action.payload]
			};

		case GET_CLASSES:
			return {
				...state,
				allClasses: action.payload
			};
		case GET_CALENDAR:
			return {
				...state,
				calendar: action.payload,
				getCalendarSuccess: true
			};
		case NEW_CLASS_TYPE:
      return {
        ...state,
        classTypes: [...state.classTypes, action.payload]
      }
		case ATTEND_CLASS:
			return {
				...state,
				working: true
			};
		case ATTEND_CLASS_SUCCESS:
			return {
				...state,
				working: undefined
			};
		case BUY_PASS:
			return {
				...state,
				working: true
			};
		case BUY_PASS_SUCCESS:
			return {
				...state,
				working: undefined
			};
		case CLEAR_PASS:
			return {
				...state,
				working: true
			};
		case CLEAR_PASS_SUCCESS:
			return {
				...state,
				working: undefined
			};
    case SCHEDULE_CLASS_RETURNED:
      return {
        ...state,
        scheduledClasses: [...state.scheduledClasses, action.payload]
      }
      
    case GET_INSTRUCTORS:
      return {
        ...state,
				instructors: action.payload,
				getInstructorsSuccess: true
      }
    case GET_CLASSES_TYPES:
      return {
        ...state,
				classTypes: action.payload,
				getClassTypesSuccess: true
			}
			case TOGGLE_LOADING:
				return {
					...state,
					loading: action.payload
				}
    

		default:
			return state;
	}
};
export default rootReducer;

import axios from 'axios';
import {
	// CREATE_CLASS_CALLED,
	CREATE_CLASS_RETURNED
	// CREATE_CLASS_ERROR,
} from './types';

export const callNewClass = (e, newClass, history, header) => {
	const promise = axios.post(
		`${process.env.REACT_APP_BACKEND || 'localhost:8000'}/api/auth/classes`,
		newClass,
		{ headers: header }
	);
	return function(dispatch) {
		promise
			.then(res => {
				console.log('res-newClass', res);
				dispatch({
					type: CREATE_CLASS_RETURNED,
					payload: res.data
				});
				// history.push('/admin')
			})
			.catch(err => {
				console.log('error-newClass', err);
			});
	};
};

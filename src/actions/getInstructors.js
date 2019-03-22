import axios from 'axios';
import { GET_INSTRUCTORS } from './types';

export const getInstructors = header => {
	return function(dispatch) {
		axios
			.get(
				`${process.env.REACT_APP_BACKEND || 'localhost:8000'}/api/instructors`,
				{
					headers: header
				}
			)
			.then(res => {
				console.log('res-get-instructors', res.data);
				dispatch({
					type: GET_INSTRUCTORS,
					payload: res.data
				});
			})
			.catch(err => console.log('err-get-instructors', err));
	};
};

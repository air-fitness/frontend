import axios from 'axios';
import { CLEAR_PASS, CLEAR_PASS_SUCCESS } from './types';

export const clearPass = (class_id, callback) => {
	return function(dispatch) {
		dispatch({
			type: CLEAR_PASS
		});

		axios
			.delete(
				`${process.env.REACT_APP_BACKEND ||
					'localhost:8000'}/api/classes/delete_pass/${class_id}`,
				{
					headers: { Authorization: localStorage.getItem('jwt') }
				}
			)
			.then(res => {
				console.log('res-clear-pass', res.data);
				dispatch({
					type: CLEAR_PASS_SUCCESS
				});

				if (callback) callback();
			})
			.catch(err => console.log('err-clear-pass', err));
	};
};

import axios from 'axios';
import { ATTEND_CLASS, ATTEND_CLASS_SUCCESS } from './types';

export const attendClass = (class_id, class_time_id, callback) => {
	return function(dispatch) {
		dispatch({
			type: ATTEND_CLASS
		});

		axios
			.post(
				`${process.env.REACT_APP_BACKEND ||
					'localhost:8000'}/api/classes/attend/${class_id}/${class_time_id}`,
				{},
				{
					headers: { Authorization: localStorage.getItem('jwt') }
				}
			)
			.then(res => {
				console.log('res-attend_class', res.data);
				dispatch({
					type: ATTEND_CLASS_SUCCESS
				});

				if (callback) callback();
			})
			.catch(err => console.log('err-attend_class', err));
	};
};

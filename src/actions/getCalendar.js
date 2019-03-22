import axios from 'axios';
import { GET_CALENDAR } from './types';

export const getCalendar = callback => {
	return function(dispatch) {
		axios
			.get(
				`${process.env.REACT_APP_BACKEND ||
					'localhost:8000'}/api/classes/calendar`,
				{
					headers: { Authorization: localStorage.getItem('jwt') }
				}
			)
			.then(res => {
				console.log('res-get-calendar', res.data);
				dispatch({
					type: GET_CALENDAR,
					payload: res.data
				});

				if (callback) callback();
			})
			.catch(err => console.log('err-get-calendar', err));
	};
};

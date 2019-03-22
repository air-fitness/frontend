import axios from 'axios';
import { GET_CLASSES } from './types';

axios.defaults.withCredentials = true;

export const getClasses = () => {
	return function(dispatch) {
		axios
			.get(`${process.env.REACT_APP_BACKEND || 'localhost:8000'}/api/classes`)
			.then(res => {
				console.log('res-get-classes', res.data);
				dispatch({
					type: GET_CLASSES,
					payload: res.data
				});
			})
			.catch(err => console.log('err-get-classes', err));
	};
};

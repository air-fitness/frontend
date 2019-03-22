import axios from 'axios';
import { LOGIN_CALLED, LOGIN_RETURNED, LOGIN_ERROR } from './types';

export const callLogin = (e, creds, history) => {
	const promise = axios.post(
		`${process.env.REACT_APP_BACKEND || 'localhost:8000'}/api/auth/login`,
		creds
	);

	return function(dispatch) {
		dispatch({
			type: LOGIN_CALLED
		});
		promise
			.then(res => {
				console.log('login-res', res.data);
				let flag = false;
				if (res.data.instructor_id) {
					flag = true;
				}
				dispatch({
					type: LOGIN_RETURNED,
					payload: {
						firstName: res.data.first_name,
						lastName: res.data.last_name,
						username: res.data.username,
						userId: res.data.user_id,
						instructorId: res.data.instructor_id,
						admin: flag
					}
				});
				localStorage.setItem('jwt', res.data.token);
				history.push('/');
			})
			.catch(err => {
				console.log('login-err', err);
				dispatch({
					type: LOGIN_ERROR,
					payload: err
				});
				// history.push("/");
			});
	};
};

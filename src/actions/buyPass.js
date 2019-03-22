import axios from 'axios';
import { BUY_PASS, BUY_PASS_SUCCESS } from './types';

export const buyPass = (class_id, callback) => {
	return function(dispatch) {
		dispatch({
			type: BUY_PASS
		});

		axios
			.post(
				`${process.env.REACT_APP_BACKEND ||
					'localhost:8000'}/api/classes/purchase_pass/${class_id}`,
				{},
				{
					headers: { Authorization: localStorage.getItem('jwt') }
				}
			)
			.then(res => {
				console.log('res-buy-pass', res.data);

				dispatch({
					type: BUY_PASS_SUCCESS
				});

				if (callback) callback();
			})
			.catch(err => console.log('err-buy-pass', err));
	};
};

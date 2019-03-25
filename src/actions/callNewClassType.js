import axios from 'axios';
import { NEW_CLASS_TYPE } from './types';

export const callNewClassType = (e, newClass, history, header) => {
	return function(dispatch) {
		axios
			.post(
				`${process.env.REACT_APP_BACKEND || 'localhost:8000'}/api/classes`,
				newClass,
				{ headers: header }
			)
			.then(res => {
				console.log('res-new-class-type', res.data);
				dispatch({
					type: NEW_CLASS_TYPE,
					payload: res.data
				});
				alert(`Success! class_id:${res.data.class_id}`)
			})
			.catch(err => {
				console.log('err-new-class-type', err);
				alert('Fail!');
				});
	};
};

import {TOGGLE_LOADING} from './types';

// export function loadingToggle (arr, bool) {
//   console.log('toggle-args',arguments);
//   const result = arr.every((curVal) => {
//     return curVal === true;
//   });
//   if (result === true) {
//     return (dispatch) => {
//       dispatch({
//         type: TOGGLE_LOADING,
//         payload: bool
//       })
//     }
//   } if (true) {
//     return result;
//   } 
// }
export function loadingToggle (bool) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_LOADING,
      payload: bool
    })
  }
} 


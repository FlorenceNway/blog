import axios from 'axios';
import { GET_BLOGS } from './blogActionTypes';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';

// export const getAllBlogs = () => (dispatch) => {
//     axios.get(ROOT_URL).then((response) => {
//         console.log('here', response)
//         return dispatch({
//             type: GET_BLOGS,
//             payload: response.data,
//         });
//     })
// }

export const getAllBlogs = () => async (dispatch) => {
  const response = await axios.get(ROOT_URL);
  return dispatch({
    type: GET_BLOGS,
    payload: response.data,
  });
};

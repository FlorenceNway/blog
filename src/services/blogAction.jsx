import axios from 'axios';
import { GET_BLOGS, CREATE_BLOG } from './blogActionTypes';

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

export const createBlog = (data) => async (dispatch) => {
  const url = 'https://blogs-34bb0.firebaseio.com/blog.json'; // table name - blog, firebase needs json format
  const response = await axios.post(url, data);
  return dispatch({
    type: CREATE_BLOG,
    payload: response.data,
  });
};

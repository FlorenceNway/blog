import axios from 'axios';
import { GET_BLOGS, CREATE_BLOG, DELETE_BLOG } from './blogActionTypes';

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts'; // table name = blog, firebase needs json format
const url = 'https://blogs-34bb0.firebaseio.com/blog.json';

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
  const response = await axios.get(url);
  return dispatch({
    type: GET_BLOGS,
    payload: response.data,
  });
};

export const createBlog = (data, onSuccess) => async (dispatch) => {
  const response = await axios.post(url, data);
  if (onSuccess) {
    onSuccess();
  }
  return dispatch({
    type: CREATE_BLOG,
    payload: response.data,
  });
};

export const deleteBlog = (id, onSuccess) => async (dispatch) => {
  const delUrl = `https://blogs-34bb0.firebaseio.com/blog/${id}.json`;
  const response = await axios.delete(delUrl); 
  // console.log('res',response) // normally delete action return id of deleted item, so we can use reducer
  if (onSuccess) {
    onSuccess();
  }
  return dispatch({
    type: DELETE_BLOG,
    payload: response.data,
  });
};

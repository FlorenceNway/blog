import axios from 'axios';
import {
  GET_BLOGS,
  CREATE_BLOG,
  DELETE_BLOG,
  GET_ONE_BLOG,
  UPDATE_BLOG,
} from './blogActionTypes';

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
  try {
    dispatch({
      type: GET_BLOGS,
      meta: {
        isPending: true,
        errors: false,
      },
    });
    const response = await axios.get(url);
    return dispatch({
      type: GET_BLOGS,
      payload: response.data,
      meta: {
        isPending: false,
        error: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_BLOGS,
      meta: {
        error: true,
        isPending: false,
      },
    });
  }
};

export const getOneBlog = (id) => async (dispatch) => {
  const updateUrl = `https://blogs-34bb0.firebaseio.com/blog/${id}.json`;
  const response = await axios.get(updateUrl);
  return dispatch({
    type: GET_ONE_BLOG,
    payload: response.data,
  });
};

export const createBlog = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_BLOG,
      meta: {
        isPending: true,
        errors: false,
      },
    });
    const response = await axios.post(url, data);
    if (onSuccess) {
      onSuccess();
    }
    return dispatch({
      type: CREATE_BLOG,
      payload: response.data,
      meta: {
        isPending: false,
        error: false,
      },
    });
  } catch (error) {
    return dispatch({
      type: CREATE_BLOG,
      meta: {
        isPending: false,
        error: true,
      },
    });
  }
};

export const deleteBlog = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_BLOG,
      meta: {
        isPending: true,
        errors: false,
      },
    });

    const deleteUrl = `https://blogs-34bb0.firebaseio.com/blog/${id}.json`;
    const response = await axios.delete(deleteUrl);
    // console.log('res',response) // normally delete action return id of deleted item, so we can use reducer
    if (onSuccess) {
      onSuccess();
    }
    return dispatch({
      type: DELETE_BLOG,
      payload: response.data,
      meta: {
        error: false,
        isPending: false,
      },
    });
  } catch (error) {
    dispatch({
      type: DELETE_BLOG,
      meta: {
        error: true,
        isPending: false,
      },
    });
  }

  // const delUrl = `https://blogs-34bb0.firebaseio.com/blog/${id}.json`;
  // const response = await axios.delete(delUrl);
  // // console.log('res',response) // normally delete action return id of deleted item, so we can use reducer
  // if (onSuccess) {
  //   onSuccess();
  // }
  // return dispatch({
  //   type: DELETE_BLOG,
  //   payload: response.data,
  // });
};

export const updateBlog = (id, data, onSuccess) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_BLOG,
      meta: {
        isPending: true,
        errors: false,
      },
    });

    const updateUrl = `https://blogs-34bb0.firebaseio.com/blog/${id}.json`;
    const response = await axios.put(updateUrl, data);
    // console.log('res',response) // normally delete action return id of deleted item, so we can use reducer
    if (onSuccess) {
      onSuccess();
    }
    return dispatch({
      type: UPDATE_BLOG,
      payload: response.data,
      meta: {
        error: false,
        isPending: false,
      },
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BLOG,
      meta: {
        error: true,
        isPending: false,
      },
    });
  }
};

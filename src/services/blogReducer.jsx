import { GET_BLOGS, GET_ONE_BLOG } from './blogActionTypes';

const initialState = { blogs: [], isPending: false, error: false };

export default function (state = { initialState }, action) {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        isPending: action.meta.isPending,
        blogs: action.payload,
      };
    case GET_ONE_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
// import { reducer } from 'redux-form';
import blogReducer from '../services/blogReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    blogReducer,
    form, // form: reducer,
  });

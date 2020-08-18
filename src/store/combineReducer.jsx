import {combineReducers} from 'redux';
import {connectRouter} from "connected-react-router"
import blogReducer from '../services/blogReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  blogReducer,
});


import {GET_BLOGS} from './blogActionTypes';

const initialState = {blogs: []}

export default function(state = {initialState}, action) {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        default:
            return state;    
    }
}
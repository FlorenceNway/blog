import axios from 'axios';
import { LOGIN } from './authActionTypes';

export const login = (data, onSuccess) => async (dispatch) => {
  const apiKey = 'AIzaSyDWj9vnRMAhmDos4XTyAyf8XzeeiC6UYYo';
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

  try {
    dispatch({
      type: LOGIN,
      meta: {
        isPending: true,
        errors: false,
      },
    });
    const response = await axios.post(url, data);
    // console.log('login-res', response);

    const authToken = response?.data.idToken;
    console.log('auth-token', authToken);

    localStorage.setItem('auth_token', authToken);

    if (onSuccess) {
      onSuccess();
    }
    return dispatch({
      type: LOGIN,
      payload: response.data,
      meta: {
        isPending: false,
        error: false,
      },
    });
  } catch (error) {
    return dispatch({
      type: LOGIN,
      meta: {
        isPending: false,
        error: true,
      },
    });
  }
};

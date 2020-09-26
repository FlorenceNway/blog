const { REACT_APP_API_KEY } = process.env;

export const authToken = localStorage.getItem('auth_token');
export const API_KEY = REACT_APP_API_KEY;

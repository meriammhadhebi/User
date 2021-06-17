import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

// signin
export const signIn = (formData) => API.post('/user', formData);

// signup
export const signUp = (formData) => API.post('/user/signup', formData);
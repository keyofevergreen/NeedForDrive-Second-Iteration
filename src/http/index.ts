import axios from 'axios';

export const API_URL = 'https://api-factory.simbirsoft1.com/api';

const instance = axios.create({
  baseURL: API_URL,
});

instance.defaults.headers.common['X-Api-Factory-Application-Id'] = `${process.env.REACT_APP_API_ID}`;
instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export default instance;

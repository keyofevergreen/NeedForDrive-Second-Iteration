import axios from 'axios';
import getBasicToken from '../utils/helpers/getBasicToken';

export const API_URL = 'https://api-factory.simbirsoft1.com/api';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers['X-Api-Factory-Application-Id'] = `${process.env.REACT_APP_API_ID}`;
  config.headers.Authorization = `Basic ${getBasicToken()}`;
  return config;
});

export default $api;

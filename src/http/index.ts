import axios from 'axios';

export const API_URL = 'https://api-factory.simbirsoft1.com/api';

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;

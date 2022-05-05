import instance from '../../../http';
import { setAuth } from '../../../store/Auth/actions';

const setupInterceptors = (store): void => {
  const { dispatch } = store;

  instance.interceptors.request.use((config) => {
    config.headers['X-Api-Factory-Application-Id'] = `${process.env.REACT_APP_API_ID}`;
    if (localStorage.getItem('token') && config.url !== '/auth/refresh' && config.url !== '/auth/login') {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    if (config.url === '/db/car' && config.method === 'post') {
      delete config.headers['Content-Type'];
    }
    return config;
  });

  instance.interceptors.response.use((config) => {
    return config;
  }, async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem('refresh');
        const basicToken = localStorage.getItem('basicToken');
        const response = await instance.post('/auth/refresh', { refresh_token: refreshToken }, {
          headers: {
            'Authorization': `Basic ${basicToken}`,
          }
        });
        await localStorage.setItem('token', response.data.access_token);
        await localStorage.setItem('refresh', response.data.refresh_token);
        return await instance.request(originalRequest);
      } catch (e) {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        localStorage.removeItem('basicToken');
        dispatch(setAuth(false));
      }
    }
    throw error;
  });
};
export default setupInterceptors;

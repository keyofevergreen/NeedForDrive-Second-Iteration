import { AxiosResponse } from 'axios';
import instance from '../../../http';
import getBasicToken from '../../helpers/getBasicToken';
import { AuthForm, Token } from '../../../types/Auth';

export interface AuthServiceInterface {
  login: (loginData: AuthForm) => Promise<AxiosResponse<Token>>;
}

const authService = (): AuthServiceInterface => ({
  login: async (loginData: AuthForm): Promise<AxiosResponse<Token>> => {
    const basicToken = getBasicToken();
    localStorage.setItem('basicToken', basicToken);

    return instance.post<Token>('/auth/login', loginData, {
      headers: {
        'Authorization': `Basic ${basicToken}`,
      }
    });
  }
});

export default authService;

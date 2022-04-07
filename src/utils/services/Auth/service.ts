import { AxiosResponse } from 'axios';
import $api from '../../../http';
import { AuthForm, Token } from '../../../types/Auth';

export interface AuthServiceInterface {
  login: (loginData: AuthForm) => Promise<AxiosResponse<Token>>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const authService = (): AuthServiceInterface => ({
  login: async (loginData: AuthForm): Promise<AxiosResponse<Token>> => {
    return $api.post<Token>('/auth/login', loginData);
  }
});

export default authService;

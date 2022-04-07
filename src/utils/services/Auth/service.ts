import getBasicToken from '../../helpers/getBasicToken';
import { AuthForm, Token } from '../../../types/Auth';

export interface AuthServiceInterface {
  fetchAuthToken: (loginData: AuthForm) => Promise<Token>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const authService = (rest): AuthServiceInterface => ({
  fetchAuthToken: async (loginData: AuthForm): Promise<Token> => {
    const response = await rest('https://api-factory.simbirsoft1.com/api/auth/login', {
      method: 'POST',
      headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_API_ID,
        'Authorization': `Basic ${getBasicToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    if (response.status !== 200) {
      throw new Error(response.status);
    } else {
      // eslint-disable-next-line no-return-await, @typescript-eslint/return-await
      return await response.json();
    }
  },
});

export default authService;

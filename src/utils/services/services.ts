import authService, { AuthServiceInterface } from './Auth/service';

export interface ServicesInterface {
  auth: AuthServiceInterface;
}

const createServices = (): ServicesInterface => ({
  auth: authService(),
});

export default createServices;

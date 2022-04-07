import authService, { AuthServiceInterface } from './Auth/service';

export interface ServicesInterface {
  auth: AuthServiceInterface;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createServices = (rest): ServicesInterface => ({
  auth: authService(rest),
});

export default createServices;

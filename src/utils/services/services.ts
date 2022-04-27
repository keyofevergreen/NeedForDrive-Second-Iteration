import authService, { AuthServiceInterface } from './Auth/service';
import tableService, { TableInterface } from './Table/service';

export interface ServicesInterface {
  auth: AuthServiceInterface,
  table: TableInterface,
}

const createServices = (): ServicesInterface => ({
  auth: authService(),
  table: tableService(),
});

export default createServices;

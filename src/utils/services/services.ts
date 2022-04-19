import authService, { AuthServiceInterface } from './Auth/service';
import tableService, { TableServiceInterface } from './Table/service';

export interface ServicesInterface {
  auth: AuthServiceInterface,
  table: TableServiceInterface,
}

const createServices = (): ServicesInterface => ({
  auth: authService(),
  table: tableService(),
});

export default createServices;

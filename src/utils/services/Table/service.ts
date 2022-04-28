import { AxiosResponse } from 'axios';
import instance from '../../../http';

export interface TableInterface {
  getEntities: (name: string, config: object) => Promise<AxiosResponse>,
}

const tableService = (): TableInterface => ({
  getEntities: async (name, config): Promise<AxiosResponse> => {
    return instance.get(`/db/${name}`, config);
  },
});

export default tableService;

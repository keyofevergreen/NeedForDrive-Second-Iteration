import { AxiosResponse } from 'axios';
import instance from '../../../http';

export interface TableInterface {
  getEntities: (name: string, config: object, id?: string) => Promise<AxiosResponse>,
  postEntity: (name: string, body: object) => Promise<AxiosResponse>,
  putEntity: (name: string, body: object, id: string) => Promise<AxiosResponse>,
  deleteEntity: (name: string, id: string) => Promise<AxiosResponse>,
}

const tableService = (): TableInterface => ({
  getEntities: async (name, config, id): Promise<AxiosResponse> => {
    const url = id ? `/db/${name}/${id}` : `/db/${name}`;
    return instance.get(url, config);
  },
  postEntity: async (name, body): Promise<AxiosResponse> => {
    return instance.post(`/db/${name}`, body);
  },
  putEntity: async (name, body, id): Promise<AxiosResponse> => {
    return instance.put(`/db/${name}/${id}`, body);
  },
  deleteEntity: async (name, id): Promise<AxiosResponse> => {
    return instance.delete(`/db/${name}/${id}`);
  },
});

export default tableService;

import { ThunkResult } from '../../types/thunk';
import { addSuccessAlertMessage, uploadEntity, uploadEntityError, uploadEntitySuccess } from './actions';
import { addToErrorHandler } from '../ErrorProvider/actions';

export const createEntity = (entity: object, path: string, alertSuccessMessage: string): ThunkResult => {
  return async (dispatch, getState, { services }) => {
    try {
      dispatch(uploadEntity());
      const { data } = await services.table.postEntity(path, entity);
      dispatch(uploadEntitySuccess(data.data));
      dispatch(addSuccessAlertMessage(alertSuccessMessage));
    } catch (error) {
      dispatch(uploadEntityError(error.response.status));
      dispatch(addToErrorHandler(error.response.status));
    }
  };
};

export const editEntity = (entity: object, path: string, entityId:string, alertSuccessMessage: string): ThunkResult => {
  return async (dispatch, getState, { services }) => {
    try {
      dispatch(uploadEntity());
      const { data } = await services.table.putEntity(path, entity, entityId);
      dispatch(uploadEntitySuccess(data.data));
      dispatch(addSuccessAlertMessage(alertSuccessMessage));
    } catch (error) {
      dispatch(uploadEntityError(error.response.status));
      dispatch(addToErrorHandler(error.response.status));
    }
  };
};

export const deleteEntity = (path: string, entityId:string, alertSuccessMessage: string): ThunkResult => {
  return async (dispatch, getState, { services }) => {
    try {
      dispatch(uploadEntity());
      const { data } = await services.table.deleteEntity(path, entityId);
      dispatch(uploadEntitySuccess(data.data));
      dispatch(addSuccessAlertMessage(alertSuccessMessage));
    } catch (error) {
      dispatch(uploadEntityError(error.response.status));
      dispatch(addToErrorHandler(error.response.status));
    }
  };
};

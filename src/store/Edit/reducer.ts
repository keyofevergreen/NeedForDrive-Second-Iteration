import { createReducer } from '@reduxjs/toolkit';
import { UploadedEntityState } from '../../types/Edit';
import {
  clearUploadedEntityData,
  uploadEntity,
  uploadEntityError,
  uploadEntitySuccess,
  addSuccessAlertMessage,
  clearSuccessAlertMessage
} from './actions';

const uploadedEntityReducer = createReducer<UploadedEntityState>({
  uploadedEntity: null,
  uploadedEntityLoading: false,
  uploadedEntityError: null,
  successAlertMessage: null,
}, {
  [uploadEntity.type]: (state) => ({
    ...state,
    uploadedEntity: null,
    uploadedEntityLoading: true,
    uploadedEntityError: null,
  }),
  [uploadEntitySuccess.type]: (state, { payload }) => ({
    ...state,
    uploadedEntity: payload,
    uploadedEntityLoading: false,
    uploadedEntityError: null,
  }),
  [uploadEntityError.type]: (state, { payload }) => ({
    ...state,
    uploadedEntity: null,
    uploadedEntityLoading: false,
    uploadedEntityError: payload,
  }),
  [clearUploadedEntityData.type]: (state) => ({
    ...state,
    uploadedEntity: null,
    uploadedEntityLoading: false,
    uploadedEntityError: null,
  }),
  [addSuccessAlertMessage.type]: (state, { payload }) => ({
    ...state,
    successAlertMessage: payload,
  }),
  [clearSuccessAlertMessage.type]: (state) => ({
    ...state,
    successAlertMessage: null,
  }),
});

export default uploadedEntityReducer;

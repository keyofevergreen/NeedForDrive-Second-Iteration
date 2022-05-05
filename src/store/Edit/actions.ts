import { createAction } from '@reduxjs/toolkit';

export const uploadEntity = createAction('Entity is posting...');

export const uploadEntitySuccess = createAction<object>('Entity has already posted');

export const uploadEntityError = createAction<number>('Entity not posted');

export const clearUploadedEntityData = createAction('Clear uploaded entity response data...');

export const addSuccessAlertMessage = createAction<string>('Success alert has set');

export const clearSuccessAlertMessage = createAction('Success alert cleared');

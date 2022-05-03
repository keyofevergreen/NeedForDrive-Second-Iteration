import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../types/store';
import { UploadedEntityState } from '../../types/Edit';
import { clearUploadedEntityData } from '../../store/Edit/actions';

export const useConvertFile = () => {
  return (file: File): Promise<string | ArrayBuffer> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const useUploadedEntity = (entityId: string | null, entityRoute: string): boolean => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { uploadedEntity, uploadedEntityLoading } = useSelector<{
    uploadedEntity: UploadedEntityState;
  }, UploadedEntityState>((state) => state.uploadedEntity);

  useEffect(() => {
    if (uploadedEntity?.id && !entityId) {
      navigate(`/edit/${entityRoute}/${uploadedEntity.id}`);
      dispatch(clearUploadedEntityData());
    }
  }, [uploadedEntity]);

  return uploadedEntityLoading;
};

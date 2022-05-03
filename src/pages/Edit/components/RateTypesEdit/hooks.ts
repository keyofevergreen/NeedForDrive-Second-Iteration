import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { RateTypeForm } from '../../../../types/Edit';
import { Dispatcher } from '../../../../types/store';
import { RateTypesState } from '../../../../types/RateTypes';
import { fetchRateType } from '../../../../store/RateTypes/thunks';

export const useRateTypeById = (rateTypeId: string, setValue: UseFormSetValue<RateTypeForm>): boolean => {
  const dispatch = useDispatch<Dispatcher>();
  const { rateTypeById, rateTypeByIdLoading } = useSelector<{
    rateTypes: RateTypesState;
  }, RateTypesState>((state) => state.rateTypes);

  const setValuesToForm = async (rateType): Promise<void> => {
    setValue('name', rateType.name, { shouldDirty: true });
    setValue('unit', rateType.unit, { shouldDirty: true });
  };

  useEffect(() => {
    if (rateTypeId) {
      dispatch(fetchRateType(rateTypeId));
    }
  }, [rateTypeId]);

  useEffect(() => {
    if (rateTypeById && rateTypeId) {
      setValuesToForm(rateTypeById);
    }
  }, [rateTypeById]);

  return rateTypeByIdLoading;
};

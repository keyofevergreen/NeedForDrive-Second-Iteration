import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { RateForm } from '../../../../types/Edit';
import { Dispatcher } from '../../../../types/store';
import { RateState } from '../../../../types/Rates';
import { fetchRate } from '../../../../store/Rates/thunks';

export const useRateById = (rateId: string, setValue: UseFormSetValue<RateForm>): boolean => {
  const dispatch = useDispatch<Dispatcher>();
  const { rateById, rateByIdLoading } = useSelector<{
    rates: RateState;
  }, RateState>((state) => state.rates);

  const setValuesToForm = async (rate): Promise<void> => {
    setValue('price', rate.price, { shouldDirty: true });
    setValue('rateTypeId', rate?.rateTypeId.id || 'Выберите тип тарифа', { shouldDirty: true });
  };

  useEffect(() => {
    if (rateId) {
      dispatch(fetchRate(rateId));
    }
  }, [rateId]);

  useEffect(() => {
    if (rateById && rateId) {
      setValuesToForm(rateById);
    }
  }, [rateById]);

  return rateByIdLoading;
};

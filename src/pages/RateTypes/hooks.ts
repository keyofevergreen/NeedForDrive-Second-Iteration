import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRateTypes } from '../../store/RateTypes/thunks';
import { Dispatcher } from '../../types/store';
import { RateTypeResponse, RateTypesAxiosConfig, RateTypesState } from '../../types/RateTypes';

export const useRateTypes = (name?: string | null, page?: number): [RateTypeResponse, boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { rateTypes, loading, error } = useSelector<{
    rateTypes: RateTypesState;
  }, RateTypesState>((state) => state.rateTypes);

  useEffect(() => {
    const config: RateTypesAxiosConfig = {
      params: {
        page,
        limit: page ? 10 : 1000,
      },
    };
    config.params['sort[createdAt]'] = -1;

    if (name && name !== 'Все тарифы') {
      config.params.name = name;
    }
    dispatch(fetchRateTypes(config));
  }, [name, page]);

  return [rateTypes, loading, error];
};

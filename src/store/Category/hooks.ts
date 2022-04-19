import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from './thunks';
import { Dispatcher } from '../../types/store';
import { Category, CategoryState } from '../../types/Category';

export const useCategory = (): [Category[], boolean, string | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { category, loading, error } = useSelector<{
    category: CategoryState;
  }, CategoryState>((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return [category, loading, error];
};

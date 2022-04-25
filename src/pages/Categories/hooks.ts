import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../store/Category/thunks';
import { Dispatcher } from '../../types/store';
import { Category, CategoryState } from '../../types/Category';
import { SearchState } from '../../types/Search';

export const useCategory = (): [Category[], boolean, number | null] => {
  const dispatch = useDispatch<Dispatcher>();
  const { category, loading, error } = useSelector<{
    category: CategoryState;
  }, CategoryState>((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return [category, loading, error];
};

export const useSearchSortedCategory = (categories: Category[]): Category[] => {
  const { searchSort } = useSelector<{
    search: SearchState;
  }, SearchState>((state) => state.search);

  if (categories) {
    return categories.filter((category) => {
      return category.name
        .toLowerCase()
        .includes(
          searchSort.toLowerCase()
        );
    });
  }
  return [];
};

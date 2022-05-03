import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { Dispatcher } from '../../../../types/store';
import { CategoryState } from '../../../../types/Category';
import { fetchCategory } from '../../../../store/Category/thunks';
import { CategoryForm } from '../../../../types/Edit';

export const useCategoryById = (categoryId: string, setValue: UseFormSetValue<CategoryForm>): boolean => {
  const dispatch = useDispatch<Dispatcher>();
  const { categoryById, categoryByIdLoading } = useSelector<{
    category: CategoryState;
  }, CategoryState>((state) => state.category);

  const setValuesToForm = async (category): Promise<void> => {
    setValue('name', category.name, { shouldDirty: true });
    setValue('description', category.description, { shouldDirty: true });
  };

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchCategory(categoryId));
    }
  }, [categoryId]);

  useEffect(() => {
    if (categoryById && categoryId) {
      setValuesToForm(categoryById);
    }
  }, [categoryById]);

  return categoryByIdLoading;
};

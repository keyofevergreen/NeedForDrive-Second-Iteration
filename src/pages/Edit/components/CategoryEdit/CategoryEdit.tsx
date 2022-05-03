import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import FormBody from '../../../../components/FormBody/FormBody';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import { Dispatcher } from '../../../../types/store';
import { CategoryForm } from '../../../../types/Edit';
import { useUploadedEntity } from '../../../../utils/helpers/hooks';
import { useCategoryById } from './hooks';
import InputErrorMessageProvider from '../../../../components/InputErrorMessageProvider/InputErrorMessageProvider';
import { useCategory } from '../../../Categories/hooks';
import { createEntity, deleteEntity, editEntity } from '../../../../store/Edit/thunks';

const CategoryEdit = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { categoryId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CategoryForm>({
    defaultValues: {
      name: '',
      description: '',
    }
  });
  const [categories] = useCategory();
  const categoryUploading = useUploadedEntity(categoryId, 'category');
  const fetchCategoryLoading = useCategoryById(categoryId, setValue);

  const onSubmit = async (data: CategoryForm): Promise<void> => {
    if (categoryId) {
      dispatch(editEntity(data, 'category', categoryId, 'Категория сохранена'));
    } else dispatch(createEntity(data, 'category', 'Категория создана'));
  };

  const onDeleteCategory = (): void => {
    if (categoryId) {
      dispatch(deleteEntity('category', categoryId, 'Категория удалена'));
      navigate('/categories');
    }
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка категории</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка категории">
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <FormBody
            title="Настройки категории"
            isCreateTable={!categoryId}
            isSubmitting={categoryUploading}
            isLoading={fetchCategoryLoading}
            onDelete={onDeleteCategory}
          >
            <Form.Group controlId="categoryName">
              <Form.Label>Название категории</Form.Label>
              <InputErrorMessageProvider errorMessage={errors.name?.message}>
                <Form.Control
                  type="text"
                  placeholder="Введите название"
                  aria-describedby="categoryName"
                  {...register('name', {
                    required: 'Это поле не должно быть пустым',
                    validate: (value) => !categories.find((category) => value.toLowerCase() === category.name.toLowerCase()) || 'Такая категория уже существует'
                  })}
                  isInvalid={!!(errors.name)}
                />
              </InputErrorMessageProvider>
            </Form.Group>
            <Form.Group controlId="categoryDescription">
              <Form.Label>Описание</Form.Label>
              <InputErrorMessageProvider errorMessage={errors.description?.message}>
                <Form.Control
                  size="sm"
                  as="textarea"
                  rows={4}
                  aria-describedby="categoryDescription"
                  {...register('description', {
                    required: 'Это поле не должно быть пустым',
                  })}
                  isInvalid={!!(errors.description)}
                />
              </InputErrorMessageProvider>
            </Form.Group>
          </FormBody>
        </Form>
      </ContentContainer>
    </>
  );
};

export default CategoryEdit;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import FormBody from '../../../../components/FormBody/FormBody';
import { Dispatcher } from '../../../../types/store';
import { RateTypeForm } from '../../../../types/Edit';
import { useUploadedEntity } from '../../../../utils/helpers/hooks';
import { useRateTypeById } from './hooks';
import { createEntity, deleteEntity, editEntity } from '../../../../store/Edit/thunks';
import InputErrorMessageProvider from '../../../../components/InputErrorMessageProvider/InputErrorMessageProvider';
import { useRateTypes } from '../../../RateTypes/hooks';

const RateTypesEdit = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { rateTypeId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RateTypeForm>({
    defaultValues: {
      name: '',
      unit: '',
    }
  });
  const [rateTypes] = useRateTypes();
  const rateTypeUploading = useUploadedEntity(rateTypeId, 'rate-type');
  const fetchRateTypeLoading = useRateTypeById(rateTypeId, setValue);

  const onSubmit = async (data: RateTypeForm): Promise<void> => {
    if (rateTypeId) {
      dispatch(editEntity(data, 'rateType', rateTypeId, 'Тип тарифа сохранен'));
    } else dispatch(createEntity(data, 'rateType', 'Тип тарифа создан'));
  };

  const onDeleteRateType = (): void => {
    if (rateTypeId) {
      dispatch(deleteEntity('rateType', rateTypeId, 'Тип тарифа удален'));
      navigate('/rate-types');
    }
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка типа тарифа</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка типа тарифа">
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <FormBody
            title="Настройки типа тарифа"
            isCreateTable={!rateTypeId}
            isSubmitting={rateTypeUploading}
            isLoading={fetchRateTypeLoading}
            onDelete={onDeleteRateType}
          >
            <Form.Group controlId="rateTypeName">
              <Form.Label>Название типа тарифа</Form.Label>
              <InputErrorMessageProvider errorMessage={errors.name?.message}>
                <Form.Control
                  type="text"
                  placeholder="Введите название"
                  aria-describedby="rateTypeName"
                  {...register('name', {
                    required: 'Это поле не должно быть пустым',
                    validate: (value) => !rateTypes.data.find((rateType) => value.toLowerCase() === rateType.name.toLowerCase()) || 'Такой тип тарифа уже существует',
                  })}
                  isInvalid={!!(errors.name)}
                />
              </InputErrorMessageProvider>
            </Form.Group>
            <Form.Group controlId="rateTypeName">
              <Form.Label>Единица измерения. Например, <strong>7 дней</strong></Form.Label>
              <InputErrorMessageProvider errorMessage={errors.unit?.message}>
                <Form.Control
                  type="text"
                  placeholder="Введите единицу измерения"
                  aria-describedby="rateTypeName"
                  {...register('unit', {
                    required: 'Это поле не должно быть пустым'
                  })}
                  isInvalid={!!(errors.unit)}
                />
              </InputErrorMessageProvider>
            </Form.Group>
          </FormBody>
        </Form>
      </ContentContainer>
    </>
  );
};

export default RateTypesEdit;

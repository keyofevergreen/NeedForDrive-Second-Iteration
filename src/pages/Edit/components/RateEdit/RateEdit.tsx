import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import { useRateTypes } from '../../../RateTypes/hooks';
import onlyNumberValidate from '../../../../utils/helpers/OnlyNumberValidate';
import FormBody from '../../../../components/FormBody/FormBody';
import { useRateById } from './hooks';
import { Dispatcher } from '../../../../types/store';
import { RateForm } from '../../../../types/Edit';
import { useUploadedEntity } from '../../../../utils/helpers/hooks';
import InputErrorMessageProvider from '../../../../components/InputErrorMessageProvider/InputErrorMessageProvider';
import { createEntity, deleteEntity, editEntity } from '../../../../store/Edit/thunks';

const RateEdit = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { rateId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RateForm>({
    defaultValues: {
      price: '',
      rateTypeId: 'Выберите тип тарифа',
    }
  });
  const [rateTypes, rateTypesLoading] = useRateTypes();
  const rateUploading = useUploadedEntity(rateId, 'rate');
  const fetchRateLoading = useRateById(rateId, setValue);

  const onSubmit = async (data: RateForm): Promise<void> => {
    if (rateId) {
      dispatch(editEntity(data, 'rate', rateId, 'Тариф сохранен'));
    } else dispatch(createEntity(data, 'rate', 'Тариф создан'));
  };

  const onDeleteRate = (): void => {
    if (rateId) {
      dispatch(deleteEntity('rate', rateId, 'Тариф удален'));
      navigate('/rates');
    }
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка тарифа</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка тарифа">
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <FormBody
            title="Настройки тарифа"
            isCreateTable={!rateId}
            isSubmitting={rateUploading}
            isLoading={fetchRateLoading}
            onDelete={onDeleteRate}
          >
            <Form.Group controlId="rateType">
              <Form.Label>Тип тарифа</Form.Label>
              <InputErrorMessageProvider errorMessage={errors.rateTypeId?.message}>
                <Form.Select
                  size="sm"
                  disabled={rateTypesLoading}
                  aria-describedby="rateType"
                  {...register('rateTypeId', {
                    required: 'Это поле не должно быть пустым',
                    validate: (value) => value !== 'Выберите тип тарифа' || 'Вы не выбрали тип тарифа'
                  })}
                  isInvalid={!!(errors.rateTypeId)}
                >
                  <option value="Выберите тип тарифа">Выберите тип тарифа</option>
                  {rateTypes && rateTypes.data.map((rateType) => (
                    <option key={rateType.id} value={rateType.id}>{`${rateType.name} - ${rateType.unit}`}</option>
                  ))}
                </Form.Select>
              </InputErrorMessageProvider>
            </Form.Group>
            <Form.Group controlId="ratePrice">
              <Form.Label>Цена, ₽</Form.Label>
              <InputErrorMessageProvider errorMessage={errors.price?.message}>
                <Form.Control
                  type="text"
                  placeholder="Введите цену"
                  aria-describedby="ratePrice"
                  onKeyDown={(e) => onlyNumberValidate(e)}
                  {...register('price', {
                    required: 'Это поле не должно быть пустым',
                  })}
                  isInvalid={!!(errors.price)}
                />
              </InputErrorMessageProvider>
            </Form.Group>
          </FormBody>
        </Form>
      </ContentContainer>
    </>
  );
};

export default RateEdit;

import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import { useCities } from '../../../Cities/hooks';
import FormBody from '../../../../components/FormBody/FormBody';
import { Dispatcher } from '../../../../types/store';
import { PointForm } from '../../../../types/Edit';
import { useUploadedEntity } from '../../../../utils/helpers/hooks';
import InputErrorMessageProvider from '../../../../components/InputErrorMessageProvider/InputErrorMessageProvider';
import { usePointsById } from './hooks';
import { createEntity, deleteEntity, editEntity } from '../../../../store/Edit/thunks';

const PointEdit = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { pointId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PointForm>({
    defaultValues: {
      name: '',
      address: '',
      cityId: 'Выберите город',
    }
  });
  const [cities, citiesLoading] = useCities();
  const pointUploading = useUploadedEntity(pointId, 'point');
  const fetchPointLoading = usePointsById(pointId, setValue);

  const onSubmit = async (data: PointForm): Promise<void> => {
    if (pointId) {
      dispatch(editEntity(data, 'point', pointId, 'Пункт выдачи сохранен'));
    } else dispatch(createEntity(data, 'point', 'Пункт выдачи создан'));
  };

  const onDeletePoint = (): void => {
    if (pointId) {
      dispatch(deleteEntity('point', pointId, 'Пункт выдачи удален'));
      navigate('/points');
    }
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка пункта выдачи</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка пункта выдачи">
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <FormBody
            title="Настройки пункта выдачи"
            isCreateTable={!pointId}
            isSubmitting={pointUploading}
            isLoading={fetchPointLoading}
            onDelete={onDeletePoint}
          >
            <InputErrorMessageProvider errorMessage={errors.name?.message}>
              <Form.Group controlId="pointName">
                <Form.Label>Название</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите название"
                  aria-describedby="pointName"
                  {...register('name', {
                    required: 'Это поле не должно быть пустым'
                  })}
                  isInvalid={!!(errors.name)}
                />
              </Form.Group>
            </InputErrorMessageProvider>
            <InputErrorMessageProvider errorMessage={errors.address?.message}>
              <Form.Group controlId="pointAddress">
                <Form.Label>Адрес</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите адрес"
                  aria-describedby="pointAddress"
                  {...register('address', {
                    required: 'Это поле не должно быть пустым'
                  })}
                  isInvalid={!!(errors.address)}
                />
              </Form.Group>
            </InputErrorMessageProvider>
            <InputErrorMessageProvider errorMessage={errors.cityId?.message}>
              <Form.Group controlId="pointsCity">
                <Form.Label>Город</Form.Label>
                <Form.Select
                  size="sm"
                  disabled={citiesLoading}
                  aria-describedby="pointsCity"
                  {...register('cityId', {
                    required: 'Это поле не должно быть пустым',
                    validate: value => value !== 'Выберите город' || 'Вы не выбрали город',
                  })}
                  isInvalid={!!(errors.cityId)}
                >
                  <option value="Выберите город">Выберите город</option>
                  {cities && cities.map((city) => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </InputErrorMessageProvider>
          </FormBody>
        </Form>
      </ContentContainer>
    </>
  );
};

export default PointEdit;

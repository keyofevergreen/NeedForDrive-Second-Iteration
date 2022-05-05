import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import FormBody from '../../../../components/FormBody/FormBody';
import { useCityById } from './hooks';
import { Dispatcher } from '../../../../types/store';
import { CityForm } from '../../../../types/Edit';
import { useUploadedEntity } from '../../../../utils/helpers/hooks';
import InputErrorMessageProvider from '../../../../components/InputErrorMessageProvider/InputErrorMessageProvider';
import { createEntity, deleteEntity, editEntity } from '../../../../store/Edit/thunks';
import { useCities } from '../../../Cities/hooks';

const CityEdit = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { cityId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CityForm>({
    defaultValues: {
      name: '',
    }
  });
  const [cities] = useCities();
  const cityUploading = useUploadedEntity(cityId, 'city');
  const fetchCityLoading = useCityById(cityId, setValue);

  const onSubmit = async (data: CityForm): Promise<void> => {
    if (cityId) {
      dispatch(editEntity(data, 'city', cityId, 'Город сохранен'));
    } else dispatch(createEntity(data, 'city', 'Город создан'));
  };

  const onDeleteCity = (): void => {
    if (cityId) {
      dispatch(deleteEntity('city', cityId, 'Город удален'));
      navigate('/cities');
    }
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка города</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка города">
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <FormBody
            title="Настройки города"
            isCreateTable={!cityId}
            isSubmitting={cityUploading}
            isLoading={fetchCityLoading}
            onDelete={onDeleteCity}
          >
            <Form.Group controlId="cityName">
              <Form.Label>Название города</Form.Label>
              <InputErrorMessageProvider error={errors.name}>
                <Form.Control
                  type="text"
                  placeholder="Введите название"
                  aria-describedby="cityName"
                  {...register('name', {
                    required: 'Это поле не должно быть пустым',
                    validate: (value) => !cities.find((city) => value.toLowerCase() === city.name.toLowerCase()) || 'Такой город уже существует'
                  })}
                  isInvalid={!!(errors.name)}
                />
              </InputErrorMessageProvider>
            </Form.Group>
          </FormBody>
        </Form>
      </ContentContainer>
    </>
  );
};

export default CityEdit;

import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { CarForm } from '../../../../types/Edit';
import { Dispatcher } from '../../../../types/store';
import { CarObject } from '../../../../types/Cars';
import { useCategory } from '../../../Categories/hooks';
import { imageOnErrorHandler } from '../../../../utils/helpers/imageOnErrorHandler';
import { useCarById } from './hooks';
import { useConvertFile, useUploadedEntity } from '../../../../utils/helpers/hooks';
import onlyNumberValidate from '../../../../utils/helpers/OnlyNumberValidate';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import FormBody from '../../../../components/FormBody/FormBody';
import InputErrorMessageProvider from '../../../../components/InputErrorMessageProvider/InputErrorMessageProvider';
import MyProgressBar from './components/MyProgressBar/MyProgressBar';
import { createEntity, deleteEntity, editEntity } from '../../../../store/Edit/thunks';
import styles from './styles.module.scss';

const CarEdit = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { carId } = useParams();
  const converter = useConvertFile();
  const carUploading = useUploadedEntity(carId, 'car');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    getFieldState,
    formState: { errors },
    formState
  } = useForm<CarForm>({
    defaultValues: {
      name: '',
      categoryId: 'Выберите категорию',
      description: '',
      colors: [],
      thumbnail: null,
      number: '',
      priceMin: '',
      priceMax: '',
      tank: '',
    }
  });
  register('colors', {
    validate: (value) => value.length > 0 || 'Добавьте хотя бы один цвет',
  });
  register('thumbnail', {
    required: 'Выберите изображение автомобиля',
  });

  const [car, carLoading] = useCarById(carId, setValue);
  const [colorValue, setColorValue] = useState<string>('');
  const [categories, categoriesLoading] = useCategory();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string>('');

  const currentCar = watch('name');
  const currentImage = watch('thumbnail');
  const currentCategory = watch('categoryId');
  const colorsCheckboxes = watch('colors');

  useEffect(() => {
    if (categories) {
      const currCategoryObject = categories.find((c) => c.id === currentCategory);
      setSelectedCategory(currCategoryObject?.name);
    }
  }, [currentCategory]);

  useEffect(() => {
    if (currentImage && currentImage[0]?.name) {
      setSelectedImage(URL.createObjectURL(currentImage[0]));
    }
  }, [currentImage]);

  const addColor = (): void => {
    const currentColors = getValues('colors');
    setValue('colors', [...currentColors, colorValue], { shouldValidate: true, shouldDirty: true });
    setColorValue('');
  };

  const deleteColor = (colorForDelete): void => {
    const currentColors = getValues('colors');
    setValue('colors', currentColors.filter((color) => color !== colorForDelete), { shouldDirty: true });
  };

  const onSubmit = async (data: CarForm): Promise<void> => {
    const carImage = data.thumbnail[0];
    const path = await converter(carImage);
    const newCar: CarObject = {
      ...data,
      thumbnail: {
        size: carImage.size,
        originalname: carImage.name,
        mimetype: carImage.type,
        path: path.toString(),
      }
    };
    if (newCar && carId) {
      dispatch(editEntity(newCar, 'car', carId, 'Машина сохранена'));
    } else if (newCar) dispatch(createEntity(newCar, 'car', 'Машина создана'));
  };

  const onDeleteCar = (): void => {
    if (carId) {
      dispatch(deleteEntity('car', carId, 'Машина удалена'));
      navigate('/car');
    }
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка автомобиля</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer
        title="Карточка автомобиля"
        className={styles['car-edit-container-wrap']}
      >
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <div className={styles['car-edit']}>
            {(!carId || (carId && car && !carLoading)) && (
              <div className={styles['car-edit__card']}>
                <img
                  src={selectedImage ? selectedImage : ''}
                  alt="car-name"
                  onError={imageOnErrorHandler}
                />
                <div className={styles['car-edit__details']}>
                  <h2>
                    {currentCar}
                  </h2>
                  <span>
                    {selectedCategory && selectedCategory.length > 0 ? selectedCategory : 'Категория не выбрана'}
                  </span>
                </div>
                <div className={styles['car-edit__file-input-container']}>
                  <InputErrorMessageProvider errorMessage={errors.thumbnail?.message}>
                    <Form.Control
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue('thumbnail', e.target.files, { shouldDirty: true })}
                      isInvalid={!!(errors.thumbnail)}
                    />
                  </InputErrorMessageProvider>
                </div>
                <MyProgressBar
                  formStates={[
                    getFieldState('name', formState),
                    getFieldState('categoryId', formState),
                    getFieldState('colors', formState),
                    getFieldState('thumbnail', formState),
                    getFieldState('description', formState),
                    getFieldState('number', formState),
                    getFieldState('priceMin', formState),
                    getFieldState('priceMax', formState)
                  ]}
                />
                <Form.Group className={styles['car-edit__description-textarea']} controlId="carDescription">
                  <Form.Label>Описание</Form.Label>
                  <InputErrorMessageProvider errorMessage={errors.description?.message}>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      aria-describedby="carDescription"
                      placeholder="Введите описание"
                      {...register('description', {
                        required: 'Это поле не должно быть пустым',
                      })}
                      isInvalid={!!(errors.description)}
                    />
                  </InputErrorMessageProvider>
                </Form.Group>
              </div>
            )}
            <FormBody
              title="Настройки автомобиля"
              isCreateTable={!carId}
              isSubmitting={carUploading}
              isLoading={carLoading}
              className={styles['car-form-container']}
              onDelete={onDeleteCar}
            >
              <Form.Group controlId="carName">
                <Form.Label>Модель автомобиля</Form.Label>
                <InputErrorMessageProvider errorMessage={errors.name?.message}>
                  <Form.Control
                    type="text"
                    placeholder="Введите модель"
                    aria-describedby="carName"
                    {...register('name', {
                      required: 'Это поле не должно быть пустым'
                    })}
                    isInvalid={!!(errors.name)}
                  />
                </InputErrorMessageProvider>
              </Form.Group>
              <Form.Group controlId="categoryName">
                <Form.Label>Тип автомобиля</Form.Label>
                <InputErrorMessageProvider errorMessage={errors.categoryId?.message}>
                  <Form.Select
                    size="sm"
                    disabled={categoriesLoading}
                    aria-describedby="categoryName"
                    {...register('categoryId', {
                      required: 'Это поле не должно быть пустым',
                      validate: value => value !== 'Выберите категорию' || 'Вы не выбрали категорию',
                    })}
                    isInvalid={!!(errors.categoryId)}
                  >
                    <option value="Выберите категорию">Выберите категорию</option>
                    {categories && categories.map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </Form.Select>
                </InputErrorMessageProvider>
              </Form.Group>
              <Form.Group controlId="CarColors">
                <Form.Label>Доступные цвета</Form.Label>
                {/*@ts-ignore*/}
                <InputErrorMessageProvider errorMessage={errors.colors?.message}>
                  <InputGroup className={styles['form__colors-input-group']}>
                    <Form.Control
                      type="text"
                      placeholder="Введите цвет"
                      aria-describedby="CarColors"
                      value={colorValue}
                      onChange={(e) => setColorValue(e.target.value)}
                      isInvalid={!!(errors.colors)}
                    />
                    <Button
                      variant="outline-primary"
                      className={styles['form__colors-add-button']}
                      onClick={addColor}
                      disabled={colorValue.length === 0}
                    >
                      Add Color
                    </Button>
                  </InputGroup>
                </InputErrorMessageProvider>
                <div className={styles['form__colors-checkbox']}>
                  {colorsCheckboxes.map((color, index) => (
                    <Form.Check
                      type="checkbox"
                      label={color}
                      key={`color-${index}`}
                      onClick={() => deleteColor(color)}
                      defaultChecked
                    />
                  ))}
                </div>
              </Form.Group>
              <Form.Group controlId="carNumber">
                <Form.Label>Номер машины</Form.Label>
                <InputErrorMessageProvider errorMessage={errors.number?.message}>
                  <Form.Control
                    type="text"
                    placeholder="Введите номер"
                    aria-describedby="carNumber"
                    {...register('number', {
                      required: 'Это поле не должно быть пустым',
                      onChange: (e) => setValue('number', e.target.value.toUpperCase()),
                      minLength: {
                        value: 6,
                        message: 'Номер должен быть длинной от 6 до 8 символов'
                      },
                      maxLength: {
                        value: 8,
                        message: 'Номер должен быть длинной от 6 до 8 символов'
                      }
                    })}
                    isInvalid={!!(errors.number)}
                  />
                </InputErrorMessageProvider>
              </Form.Group>
              <Form.Group controlId="priceRange">
                <Form.Label>Стоимость аренды, ₽</Form.Label>
                <InputErrorMessageProvider errorMessage={errors.priceMin?.message || errors.priceMax?.message}>
                  <ButtonGroup>
                    <Form.Control
                      type="text"
                      placeholder="От 1000 ₽"
                      aria-describedby="priceRange"
                      className="input-range"
                      {...register('priceMin', {
                        required: 'Эти поля не должны быть пустыми',
                        validate: {
                          notEqualPriceMax: value => Number(value) !== Number(getValues('priceMax')) || 'Начальная цена должна быть меньше конечной',
                          lessThanPriceMax: value => Number(value) < Number(getValues('priceMax')) || 'Начальная цена не может превышать конечную',
                        },
                      })}
                      isInvalid={!!(errors.priceMin || errors.priceMax)}
                      onKeyDown={(e) => onlyNumberValidate(e)}
                    />
                    <Form.Control
                      type="text"
                      placeholder="До 5000 ₽"
                      aria-describedby="priceRange"
                      className="input-range"
                      {...register('priceMax', {
                        required: 'Эти поля не должны быть пустыми',
                      })}
                      isInvalid={!!(errors.priceMin || errors.priceMax)}
                      onKeyDown={(e) => onlyNumberValidate(e)}
                    />
                  </ButtonGroup>
                </InputErrorMessageProvider>
              </Form.Group>
              <Form.Group controlId="carTank">
                <Form.Label>Уровень топлива, %</Form.Label>
                <InputErrorMessageProvider errorMessage={errors.tank?.message}>
                  <Form.Control
                    type="text"
                    placeholder="Введите номер"
                    aria-describedby="carTank"
                    {...register('tank', {
                      required: 'Это поле не должно быть пустым',
                      maxLength: {
                        value: 3,
                        message: 'Уровень топлива не должен превышать 100%'
                      },
                      validate: (value) => Number(value) <= 100 || 'Уровень топлива не должен превышать 100%',
                    })}
                    onKeyDown={(e) => onlyNumberValidate(e)}
                    isInvalid={!!(errors.tank)}
                  />
                </InputErrorMessageProvider>
              </Form.Group>
            </FormBody>
          </div>
        </Form>
      </ContentContainer>
    </>
  );
};

export default CarEdit;

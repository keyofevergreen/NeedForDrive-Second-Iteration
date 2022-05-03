import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import FormBody from '../../../../components/FormBody/FormBody';
import { Dispatcher } from '../../../../types/store';
import InputErrorMessageProvider from '../../../../components/InputErrorMessageProvider/InputErrorMessageProvider';
import { useOrderStatusById } from './hooks';
import { useUploadedEntity } from '../../../../utils/helpers/hooks';
import { OrderStatusForm } from '../../../../types/Edit';
import { createEntity, deleteEntity, editEntity } from '../../../../store/Edit/thunks';
import { useOrderStatuses } from '../../../OrderStatus/hooks';

const OrderStatusEdit = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const { orderStatusId } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OrderStatusForm>({
    defaultValues: {
      name: '',
    }
  });
  const [orderStatus] = useOrderStatuses();
  const orderStatusUploading = useUploadedEntity(orderStatusId, 'order-status');
  const orderStatusByIdLoading = useOrderStatusById(orderStatusId, setValue);

  const onSubmit = async (data: OrderStatusForm): Promise<void> => {
    if (orderStatusId) {
      dispatch(editEntity(data, 'orderStatus', orderStatusId, 'Статус заказа сохранен'));
    } else dispatch(createEntity(data, 'orderStatus', 'Статус заказа создан'));
  };

  const onDeleteOrderStatus = (): void => {
    if (orderStatusId) {
      dispatch(deleteEntity('orderStatus', orderStatusId, 'Статус заказа удален'));
      navigate('/order-status');
    }
  };

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка статуса заказа</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка статуса заказа">
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <FormBody
            title="Настройки статуса заказа"
            isCreateTable={!orderStatusId}
            isSubmitting={orderStatusUploading}
            isLoading={orderStatusByIdLoading}
            onDelete={onDeleteOrderStatus}
          >
            <Form.Group controlId="carName">
              <Form.Label>Название статуса</Form.Label>
              <InputErrorMessageProvider errorMessage={errors.name?.message}>
                <Form.Control
                  type="text"
                  placeholder="Введите название"
                  aria-describedby="carName"
                  {...register('name', {
                    required: 'Это поле не должно быть пустым',
                    validate: (value) => !orderStatus.find((status) => value.toLowerCase() === status.name.toLowerCase()) || 'Такой статус заказа уже существует',
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

export default OrderStatusEdit;

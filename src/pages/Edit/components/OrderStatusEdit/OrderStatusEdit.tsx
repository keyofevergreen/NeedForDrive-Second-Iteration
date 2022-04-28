import React from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import FormContainer from '../../../../components/FormContainer/FormContainer';

const OrderStatusEdit = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка статуса заказа</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка статуса заказа">
        <FormContainer title="Настройки статуса заказа">
          <Form.Group controlId="carName">
            <Form.Label>Название статуса</Form.Label>
            <div className="input-wrap">
              <Form.Control
                type="text"
                placeholder="Введите название"
                aria-describedby="carName"
              />
            </div>
          </Form.Group>
        </FormContainer>
      </ContentContainer>
    </>
  );
};

export default OrderStatusEdit;

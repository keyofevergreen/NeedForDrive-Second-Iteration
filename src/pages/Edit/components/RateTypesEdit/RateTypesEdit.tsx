import React from 'react';
import { Form } from 'react-bootstrap';
import FormContainer from '../FormContainer/FormContainer';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';

const RateTypesEdit = (): React.ReactElement => {
  return (
    <ContentContainer title="Карточка типа тарифа">
      <FormContainer title="Настройки типа тарифа">
        <Form.Group controlId="rateTypeName">
          <Form.Label>Название типа тарифа</Form.Label>
          <div className="input-wrap">
            <Form.Control
              type="text"
              placeholder="Введите название"
              aria-describedby="rateTypeName"
            />
          </div>
        </Form.Group>
        <Form.Group controlId="rateTypeName">
          <Form.Label>Единица измерения. Например, <strong>7 дней</strong></Form.Label>
          <div className="input-wrap">
            <Form.Control
              type="text"
              placeholder="Введите единицу измерения"
              aria-describedby="rateTypeName"
            />
          </div>
        </Form.Group>
      </FormContainer>
    </ContentContainer>
  );
};

export default RateTypesEdit;

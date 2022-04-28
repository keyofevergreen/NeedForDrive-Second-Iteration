import React from 'react';
import { Form } from 'react-bootstrap';
import FormContainer from '../FormContainer/FormContainer';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';

const CityEdit = (): React.ReactElement => {
  return (
    <ContentContainer title="Карточка города">
      <FormContainer title="Настройки города">
        <Form.Group controlId="cityName">
          <Form.Label>Название города</Form.Label>
          <div className="input-wrap">
            <Form.Control
              type="text"
              placeholder="Введите название"
              aria-describedby="cityName"
            />
          </div>
        </Form.Group>
      </FormContainer>
    </ContentContainer>
  );
};

export default CityEdit;

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import FormContainer from '../FormContainer/FormContainer';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import { useCities } from '../../../Cities/hooks';

const PointEdit = (): React.ReactElement => {
  const [cities, citiesLoading] = useCities();
  const [selectedCity, setSelectedCity] = useState<string>('Выберите город');

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка пункта выдачи</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка пункта выдачи">
        <FormContainer title="Настройки пункта выдачи">
          <Form.Group controlId="pointName">
            <Form.Label>Название</Form.Label>
            <div className="input-wrap">
              <Form.Control
                type="text"
                placeholder="Введите название"
                aria-describedby="pointName"
              />
            </div>
          </Form.Group>
          <Form.Group controlId="pointAddress">
            <Form.Label>Адрес</Form.Label>
            <div className="input-wrap">
              <Form.Control
                type="text"
                placeholder="Введите адрес"
                aria-describedby="pointAddress"
              />
            </div>
          </Form.Group>
          <Form.Group controlId="pointCity">
            <Form.Label>Город</Form.Label>
            <div className="input-wrap">
              <Form.Select
                size="sm"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={citiesLoading}
                aria-describedby="pointCity"
              >
                <option value="Выберите город">Выберите город</option>
                {cities && cities.map((city) => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </Form.Select>
            </div>
          </Form.Group>
        </FormContainer>
      </ContentContainer>
    </>
  );
};

export default PointEdit;

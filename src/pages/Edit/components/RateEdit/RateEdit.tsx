import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import { useRateTypes } from '../../../RateTypes/hooks';
import checkPriceValue from '../../../../utils/helpers/OnlyNumberCheck';
import FormContainer from '../../../../components/FormContainer/FormContainer';

const RateEdit = (): React.ReactElement => {
  const [rateTypes, loading] = useRateTypes();
  const [selectedRateType, setSelectedRateType] = useState<string>('Выберите тип тарифа');

  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка тарифа</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка тарифа">
        <FormContainer title="Настройки тарифа">
          <Form.Group controlId="carName">
            <Form.Label>Тип тарифа</Form.Label>
            <Form.Select
              size="sm"
              value={selectedRateType}
              onChange={(e) => setSelectedRateType(e.target.value)}
              disabled={loading}
            >
              <option value="Выберите тип тарифа">Выберите тип</option>
              {rateTypes && rateTypes.data.map((rateType) => (
                <option key={rateType.id} value={rateType.id}>{`${rateType.name} - ${rateType.unit}`}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="ratePrice">
            <Form.Label>Цена, ₽</Form.Label>
            <div className="input-wrap">
              <Form.Control
                type="text"
                placeholder="Введите цену"
                aria-describedby="ratePrice"
                onKeyDown={(e) => checkPriceValue(e)}
              />
            </div>
          </Form.Group>
        </FormContainer>
      </ContentContainer>
    </>
  );
};

export default RateEdit;

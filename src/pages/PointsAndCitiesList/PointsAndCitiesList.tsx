import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PointItem from './components/CityItem/PointItem';
import { Point } from '../../types/PointsAndCitiesList';

const points: Point[] = [
  {
    name: 'Торговый центр Джуниор',
    address: 'Улица Пушкина 24',
    city: 'Санкт-Петербург',
    id: 1,
  },
  {
    name: 'Академия №666',
    address: 'Проспект Сеньоров-разработчиков 67',
    city: 'Ульяновск',
    id: 2,
  },
  {
    name: 'Симбирсофтово',
    address: 'поселок Симбирсофтово',
    city: 'Нижне-Симбирсофтово',
    id: 3,
  }
];

const PointsAndCitiesList = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);

  return (
    <ContentContainer title="Список городов">
      <div className="entity-header">
        <div className="entity-header__options">
          <Form.Select size="sm">
            <option>Все города</option>
            <option>Санкт-Петербург</option>
            <option>Ульяновск</option>
          </Form.Select>
        </div>

        <div className="entity-header__buttons">
          <Button
            variant="danger"
            size="sm"
            type="button"
          >
            Сбросить
          </Button>
          <Button
            variant="primary"
            size="sm"
            type="button"
          >
            Применить
          </Button>
        </div>
      </div>
      <div className="table-container">
        <Table
          hover
          borderless
          responsive={isResponsive}
        >
          <thead>
            <tr>
              <th>Пункт выдачи</th>
              <th>Адрес</th>
              <th>Город</th>
            </tr>
          </thead>
          <tbody>
            {points.map((point) => (
              <PointItem
                key={point.id}
                city={point.city}
                name={point.name}
                address={point.address}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </ContentContainer>
  );
};

export default PointsAndCitiesList;

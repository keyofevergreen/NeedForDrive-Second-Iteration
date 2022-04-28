import React from 'react';
import { Button, Form, InputGroup, ProgressBar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import FormContainer from '../FormContainer/FormContainer';
import Car from '../../../../assets/carsDefaultImage.png';
import styles from './styles.module.scss';

const CarsEdit = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка автомобиля</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer
        title="Карточка автомобиля"
        className={styles['cars-edit-container-wrap']}
      >
        <div className={styles['cars-edit']}>
          <div className={styles['cars-edit__card']}>
            <img src={Car} alt="car-name" />
            <div className={styles['cars-edit__details']}>
              <h2>
                Hyndai, i30N
              </h2>
              <span>
                Компакт-кар
              </span>
            </div>
            <Form.Control
              type="file"
              size="sm"
              className={styles['cars-edit__file-input']}
            />
            <div className={styles['cars-edit__progress-wrap']}>
              <div className={styles['cars-edit__progress-details']}>
                <span>
                  Заполнено
                </span>
                <span>
                  75%
                </span>
              </div>
              <ProgressBar now={75} className={styles['cars-edit__progress']} animated />
            </div>
            <Form.Group className={styles['cars-edit__description-textarea']} controlId="description.Textarea">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
              />
            </Form.Group>
          </div>
          <FormContainer title="Настройки автомобиля">
            <Form.Group controlId="carName">
              <Form.Label>Модель автомобиля</Form.Label>
              <div className="input-wrap">
                <Form.Control
                  type="text"
                  placeholder="Введите модель"
                  aria-describedby="carName"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="categoryName">
              <Form.Label>Тип автомобиля</Form.Label>
              <div className="input-wrap">
                <Form.Control
                  isInvalid
                  type="text"
                  placeholder="Введите тип"
                  defaultValue="Ковер-самолет"
                  aria-describedby="categoryName"
                />
                <Form.Text
                  id="username"
                  bsPrefix="input-message"
                >
                  Вышла ошибочка
                </Form.Text>
              </div>
            </Form.Group>
            <Form.Group controlId="colors">
              <Form.Label>Доступные цвета</Form.Label>
              <div className="input-wrap">
                <InputGroup className={styles['form__colors-input-group']}>
                  <Form.Control
                    type="text"
                    placeholder="Введите цвет"
                    aria-describedby="colors"
                  />
                  <Button variant="outline-primary" className={styles['form__colors-add-button']}>
                    Add Color
                  </Button>
                </InputGroup>
              </div>
              <div className={styles['form__colors-checkbox']}>
                <Form.Check
                  type="checkbox"
                  label="Красный"
                  defaultChecked
                />
                <Form.Check
                  type="checkbox"
                  label="Зеленый"
                  defaultChecked
                />
                <Form.Check
                  type="checkbox"
                  label="Легендарный"
                  defaultChecked
                />
              </div>
            </Form.Group>
          </FormContainer>
        </div>
      </ContentContainer>
    </>
  );
};

export default CarsEdit;

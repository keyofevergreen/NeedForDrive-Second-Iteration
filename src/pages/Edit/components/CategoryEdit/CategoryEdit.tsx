import React from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../../../components/ContentContainer/ContentContainer';
import FormContainer from '../../../../components/FormContainer/FormContainer';

const CategoryEdit = (): React.ReactElement => {
  return (
    <>
      <Helmet>
        <title>Need For Drive - Карточка категории</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ContentContainer title="Карточка категории">
        <FormContainer title="Настройки категории">
          <Form.Group controlId="categoryName">
            <Form.Label>Название категории</Form.Label>
            <div className="input-wrap">
              <Form.Control
                type="text"
                placeholder="Введите название"
                aria-describedby="categoryName"
              />
            </div>
          </Form.Group>
          <Form.Group controlId="categoryDescription">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              size="sm"
              as="textarea"
              rows={4}
              aria-describedby="categoryDescription"
              defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
            />
          </Form.Group>
        </FormContainer>
      </ContentContainer>
    </>
  );
};

export default CategoryEdit;

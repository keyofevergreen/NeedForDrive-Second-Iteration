import React from 'react';
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useResize from '../../hooks/useResize';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import TableItem from '../../components/TableItem/TableItem';
import { useCategory, useSearchSortedCategory } from './hooks';
import Spin from '../../components/Spin/Spin';
import ErrorProvider from '../../components/ErrorProvider/ErrorProvider';

const Categories = (): React.ReactElement => {
  const isResponsive = useResize(1, 1024);
  const [categories, categoriesLoading, categoriesError] = useCategory();
  const sortedCategory = useSearchSortedCategory(categories);

  return (
    <>
      <Helmet>
        <title>Need For Drive - Категории</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Home page" />
      </Helmet>
      <ErrorProvider errorStatus={[categoriesError]}>
        <ContentContainer title="Категории">
          <div className="table-container">
            {categories && !categoriesLoading && (
              <Table
                hover
                borderless
                responsive={isResponsive}
              >
                <thead>
                  <tr>
                    <th>Категория</th>
                    <th>Описание</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCategory.map((category) => (
                    <TableItem
                      key={category.description}
                      columns={[category.name, category.description]}
                    />
                  ))}
                  {sortedCategory.length === 0 && (
                    <tr>
                      <td>
                        По вашему запросу ничего не найдено
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            )}
            {categoriesLoading && (
              <Spin />
            )}
          </div>
        </ContentContainer>
      </ErrorProvider>
    </>
  );
};

export default Categories;

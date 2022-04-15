import React from 'react';
import { Pagination } from 'react-bootstrap';

const MyPagination = ({ className }: { className: string }): React.ReactElement => {
  return (
    <div className={className}>
      <Pagination size="sm">
        <Pagination.First />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item active>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{31}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default MyPagination;

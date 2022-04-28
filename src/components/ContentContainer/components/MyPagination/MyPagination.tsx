import React, { Dispatch, SetStateAction } from 'react';
import { Pagination } from 'react-bootstrap';

interface IPaginationProps {
  className?: string,
  page?: number,
  itemCount?: number,
  onSetPage?: Dispatch<SetStateAction<number>>,
}

const MyPagination = ({ className, page, itemCount, onSetPage }: IPaginationProps): React.ReactElement => {
  const pageCount = Math.ceil(itemCount / 10);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, currPage: number): void => {
    onSetPage(currPage - 1);
    event.preventDefault();
  };

  const currentPage = (): number => {
    return page + 1;
  };

  if (pageCount > 1) {
    return (
      <div className={className}>
        <Pagination size="sm">
          {pageCount > 3 && currentPage() !== 1 && (
            <Pagination.First onClick={(e) => handleClick(e, 1)} />
          )}
          {pageCount > 1 && currentPage() !== 1 && (
            <Pagination.Item onClick={(e) => handleClick(e, 1)}>{1}</Pagination.Item>
          )}
          {pageCount > 3 && currentPage() > 3 && (
            <Pagination.Ellipsis onClick={(e) => handleClick(e, page - 2)} />
          )}
          {pageCount > 2 && currentPage() > 2 && (
            <Pagination.Item onClick={(e) => handleClick(e, currentPage() - 1)}>{currentPage() - 1}</Pagination.Item>
          )}
          <Pagination.Item active>{currentPage()}</Pagination.Item>

          {currentPage() < pageCount - 1 && (
            <Pagination.Item onClick={(e) => handleClick(e, currentPage() + 1)}>{currentPage() + 1}</Pagination.Item>
          )}

          {pageCount > 3 && currentPage() < pageCount - 2 && (
            <Pagination.Ellipsis onClick={(e) => handleClick(e, currentPage() + 2)} />
          )}

          {currentPage() !== pageCount && (
            <Pagination.Item onClick={(e) => handleClick(e, pageCount)}>{pageCount}</Pagination.Item>
          )}
          {currentPage() !== pageCount && pageCount > 3 && (
            <Pagination.Last onClick={(e) => handleClick(e, pageCount)} />
          )}
        </Pagination>
      </div>
    );
  }
  if (pageCount === 1 || !pageCount) {
    return <div />;
  }
};

export default MyPagination;

import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames/bind';
import MyPagination from './components/MyPagination/MyPagination';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IContentContainerProps {
  children: React.ReactNode,
  title?: string,
  page?: number,
  itemCount?: number,
  onSetPage?: Dispatch<SetStateAction<number>>,
  className?: string,
}

const ContentContainer = ({ children, title, page, itemCount, onSetPage, className }: IContentContainerProps): React.ReactElement => (
  <div className={styles['container']}>
    {title && (
      <h1 className={styles['content-title']}>
        {title}
      </h1>
    )}
    <div className={cx('content-wrap', className)}>
      <div className={styles['content']}>
        {children}
      </div>
      <MyPagination
        className={styles['content__pagination-line']}
        page={page}
        itemCount={itemCount}
        onSetPage={onSetPage}
      />
    </div>
  </div>
);

export default ContentContainer;

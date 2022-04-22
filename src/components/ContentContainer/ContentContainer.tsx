import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';
import MyPagination from './components/MyPagination/MyPagination';

interface IContentContainerProps {
  children: React.ReactNode,
  title?: string,
  page?: number,
  itemCount?: number,
  onSetPage?: Dispatch<SetStateAction<number>>,
}

const ContentContainer = ({ children, title, page, itemCount, onSetPage }: IContentContainerProps): React.ReactElement => (
  <div className={styles['container']}>
    {title && (
      <h1 className={styles['content-title']}>
        {title}
      </h1>
    )}
    <div className={styles['content-wrap']}>
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

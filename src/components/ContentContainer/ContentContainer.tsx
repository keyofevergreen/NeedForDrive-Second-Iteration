import React from 'react';
import styles from './styles.module.scss';
import MyPagination from './components/MyPagination/MyPagination';

interface IContentContainerProps {
  children: React.ReactNode,
  title?: string,
}

const ContentContainer = ({ children, title }: IContentContainerProps): React.ReactElement => (
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
      <MyPagination className={styles['content__pagination-line']} />
    </div>
  </div>
);

export default ContentContainer;

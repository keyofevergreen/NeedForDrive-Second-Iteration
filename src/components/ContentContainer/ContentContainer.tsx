import React from 'react';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode,
  title: string,
}

const ContentContainer = ({ children, title }: Props): React.ReactElement => (
  <div className={styles['content-wrap']}>
    <h1 className={styles['content-title']}>
      {title}
    </h1>
    <div className={styles['content']}>
      {children}
    </div>
  </div>
);

export default ContentContainer;

import React from 'react';
import styles from './styles.module.scss';
import { useImage } from '../../hooks';
import Image from '../../../../../../untitled/src/components/Image';

// eslint-disable-next-line import/prefer-default-export
export const ImageArea = (): React.ReactElement => {
  const [loading, error, url] = useImage();

  return (
    <div className={styles['image-holder']}>
      <Image
        loading={loading}
        error={error}
        url={url}
      />
    </div>
  );
};

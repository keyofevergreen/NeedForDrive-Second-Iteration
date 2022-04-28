import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface ISpinProps {
  className?: string,
}

const Spin = ({ className }: ISpinProps): React.ReactElement => (
  <div className={cx('spin-wrapper', className)}>
    <div className={styles['spinner']} />
  </div>
);

export default Spin;

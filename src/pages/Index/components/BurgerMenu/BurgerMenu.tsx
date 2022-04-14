import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar/Sidebar';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

interface IBurgerMenuProps {
  className?: string;
}

const BurgerMenu = ({ className }: IBurgerMenuProps): React.ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className={cx(
          'menu-btn',
          className,
        )}
      >
        <div />
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
      >
        <Sidebar />
      </Offcanvas>
    </>
  );
};

export default BurgerMenu;

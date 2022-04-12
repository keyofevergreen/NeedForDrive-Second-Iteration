import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import CheckMark from '../../assets/CheckMark.component.svg';
import CancelIcon from '../../assets/CancelIcon.component.svg';
import SettingsIcon from '../../assets/SettingsIcon.component.svg';
import styles from './styles.module.scss';
import useResize from '../../hooks/useResize';

const ActionButtonGroup: React.FC = () => {
  const isVertical = useResize(768, 1024);

  console.log('rerender');

  return (
    <ButtonGroup className={styles['action-group-btn']} vertical={isVertical}>
      <Button
        variant="outline-primary"
        size="sm"
        id="ready-btn"
      >
        <CheckMark />
        Готово
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        id="cancel-btn"
      >
        <CancelIcon />
        Отмена
      </Button>
      <Button
        variant="outline-primary"
        size="sm"
        id="setting-btn"
      >
        <SettingsIcon />
        Изменить
      </Button>
    </ButtonGroup>
  );
};

export default ActionButtonGroup;

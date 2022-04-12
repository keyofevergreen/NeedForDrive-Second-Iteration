import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import CheckMark from '../../assets/CheckMark.component.svg';
import CancelIcon from '../../assets/CancelIcon.component.svg';
import SettingsIcon from '../../assets/SettingsIcon.component.svg';
import styles from './styles.module.scss';
import useResize from '../../hooks/useResize';

const ActionButtonGroup: React.FC = () => {
  const windowSize = useResize();

  return (
    <ButtonGroup className={styles['action-group-btn']} vertical={windowSize.width < 1024 && windowSize.width > 768}>
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

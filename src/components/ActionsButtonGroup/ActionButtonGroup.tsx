import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import CheckMark from '../../assets/CheckMark.component.svg';
import CancelIcon from '../../assets/CancelIcon.component.svg';
import SettingsIcon from '../../assets/SettingsIcon.component.svg';
import styles from './styles.module.scss';
import useResize from '../../hooks/useResize';

const ActionButtonGroup: React.FC = () => {
  const [vertical, setVertical] = useState<boolean>(false);
  const windowSize = useResize();

  useEffect(() => {
    setVertical(windowSize.width < 1024 && windowSize.width > 768);
  }, [windowSize]);

  console.log('render');

  return (
    <ButtonGroup className={styles['action-group-btn']} vertical={vertical}>
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

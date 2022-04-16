import React from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import SettingsIcon from '../../assets/SettingsIcon.component.svg';

const cx = classNames;

interface IActionButtonGroupProps {
  className?: string;
}

const SettingButton = ({ className }: IActionButtonGroupProps): React.ReactElement => {
  return (
    <Button
      variant="outline-primary"
      className={cx(
        'setting-btn',
        className
      )}
      size="sm"
    >
      <SettingsIcon />
      Изменить
    </Button>
  );
};

export default SettingButton;

import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './styles.module.scss';

interface IInputErrorMessageProps {
  children: React.ReactElement,
  error: any,
}

const InputErrorMessageProvider = ({ children, error }: IInputErrorMessageProps): React.ReactElement => {
  return (
    <div className={styles['input-wrap']}>
      {children}
      {(error?.message) && (
        <Form.Text
          id="username"
          bsPrefix="input-message"
        >
          {error.message}
        </Form.Text>
      )}
    </div>
  );
};

export default InputErrorMessageProvider;

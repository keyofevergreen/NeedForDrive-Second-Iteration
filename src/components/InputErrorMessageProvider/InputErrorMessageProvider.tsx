import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './styles.module.scss';

interface IInputErrorMessageProps {
  children: React.ReactElement,
  errorMessage: string | null,
}

const InputErrorMessageProvider = ({ children, errorMessage }: IInputErrorMessageProps): React.ReactElement => {
  return (
    <div className={styles['input-wrap']}>
      {children}
      {(errorMessage) && (
        <Form.Text
          id="username"
          bsPrefix="input-message"
        >
          {errorMessage}
        </Form.Text>
      )}
    </div>
  );
};

export default InputErrorMessageProvider;

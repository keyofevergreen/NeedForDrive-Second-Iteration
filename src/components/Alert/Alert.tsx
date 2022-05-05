import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';
import { Dispatcher } from '../../types/store';
import CheckMark from '../../assets/CheckMark.component.svg';
import CloseIcon from '../../assets/CloseIcon.component.svg';
import { UploadedEntityState } from '../../types/Edit';
import { clearSuccessAlertMessage } from '../../store/Edit/actions';
import styles from './styles.module.scss';

const Alert = (): React.ReactElement => {
  const dispatch = useDispatch<Dispatcher>();
  const [show, setShow] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const { successAlertMessage } = useSelector<{
    uploadedEntity: UploadedEntityState;
  }, UploadedEntityState>((state) => state.uploadedEntity);

  useEffect(() => {
    if (successAlertMessage) {
      setAlertMessage(successAlertMessage);
      setShow(true);
      dispatch(clearSuccessAlertMessage());
    }
  }, [successAlertMessage]);

  return (
    <Toast
      show={show}
      className={styles['success-alert-message']}
      delay={5000}
      onClose={() => setShow(false)}
      autohide
      animation
    >
      <Toast.Body>
        <div>
          <CheckMark />
          <span>
            {`Успех! ${alertMessage}`}
          </span>
        </div>
        <button type="button" onClick={() => setShow(false)}>
          <CloseIcon />
        </button>
      </Toast.Body>
    </Toast>
  );
};

export default Alert;

import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FieldError } from 'react-hook-form';
import styles from '../../styles.module.scss';

interface IMyProgressBar {
  formStates: FormState[];
}

export type FormState = {
  isDirty: boolean,
  isTouched: boolean,
  invalid: boolean,
  error?: undefined | FieldError,
};

const MyProgressBar = ({ formStates }: IMyProgressBar): React.ReactElement => {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    const readyStates = formStates.filter((state) => !state.invalid && state.isDirty);
    setProgress((Math.floor((readyStates.length / formStates.length) * 100)));
  }, [formStates]);

  return (
    <div className={styles['car-edit__progress-wrap']}>
      <div className={styles['car-edit__progress-details']}>
        <span>
          Заполнено
        </span>
        <span>
          {`${progress}%`}
        </span>
      </div>
      <ProgressBar now={progress} className={styles['car-edit__progress']} />
    </div>
  );
};

export default MyProgressBar;

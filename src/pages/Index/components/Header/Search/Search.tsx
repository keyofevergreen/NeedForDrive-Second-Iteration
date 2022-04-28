import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatcher } from '../../../../../types/store';
import { SearchState } from '../../../../../types/Search';
import { setSearchSort } from '../../../../../store/Search/actions';
import CloseIcon from '../../../../../assets/CloseIcon.component.svg';
import styles from '../styles.module.scss';

const Search = (): React.ReactElement => {
  const dispatch = useDispatch<Dispatcher>();
  const location = useLocation();
  const { pathname } = location;
  const [value, setValue] = useState<string>('');
  const { searchSort } = useSelector<{
    search: SearchState;
  }, SearchState>((state) => state.search);
  const [placeholder, setPlaceholder] = useState<string | null>('Поиск...');

  useEffect(() => {
    setValue('');

    if (pathname === '/categories') {
      setPlaceholder('Поиск по названию категории...');
    } else if (pathname === '/cities') {
      setPlaceholder('Поиск по названию города...');
    } else if (pathname === '/order-status') {
      setPlaceholder('Поиск по названию статуса заказов...');
    } else {
      setPlaceholder('Поиск...');
    }
  }, [location]);

  useEffect(() => {
    dispatch(setSearchSort(value));
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const clearSearch = (): void => {
    setValue('');
    dispatch(setSearchSort(''));
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      />
      {(value || searchSort) && (
        <button
          type="button"
          onClick={clearSearch}
          className={styles['close-btn']}
        >
          <CloseIcon />
        </button>
      )}
    </>
  );
};

export default Search;

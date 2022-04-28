import React, { Dispatch, SetStateAction } from 'react';
import { Form } from 'react-bootstrap';
import { getTime, startOfToday, subDays, subMonths } from 'date-fns';
import { Checkbox, Filter } from '../../../../types/Filter';
import { useCities } from '../../../Cities/hooks';
import { useOrderStatus } from '../../../OrderStatus/hooks';
import styles from './styles.module.scss';

const TODAY = startOfToday();
const LAST_WEEK = subDays(TODAY, 7);
const LAST_MONTH = subMonths(TODAY, 1);

const dateFilterOptions = [
  {
    id: getTime(TODAY),
    name: 'За день',
  },
  {
    id: getTime(LAST_WEEK),
    name: 'За неделю',
  },
  {
    id: getTime(LAST_MONTH),
    name: 'За месяц',
  },
];

interface IOrderFilters {
  dateFilter: string,
  setDateFilter: Dispatch<SetStateAction<string>>,
  cityFilter: string,
  setCityFilter: Dispatch<SetStateAction<string>>,
  orderStatusFilter: string,
  setOrderStatusFilter: Dispatch<SetStateAction<string>>,
  setFullTankFilter: Dispatch<SetStateAction<boolean>>
  isFullTankFilter: boolean,
  setNeedChildChairFilter: Dispatch<SetStateAction<boolean>>
  isNeedChildChairFilter: boolean,
  setRightWheelFilter: Dispatch<SetStateAction<boolean>>
  isRightWheelFilter: boolean,
}

const OrderFilters = (
  {
    dateFilter,
    setDateFilter,
    cityFilter,
    setCityFilter,
    orderStatusFilter,
    setOrderStatusFilter,
    setFullTankFilter,
    isFullTankFilter,
    setNeedChildChairFilter,
    isNeedChildChairFilter,
    setRightWheelFilter,
    isRightWheelFilter,
  }: IOrderFilters
): React.ReactElement => {
  const [cities, citiesLoading] = useCities();
  const [orderStatus, orderStatusLoading] = useOrderStatus();
  const filters: Filter[] = [
    {
      id: 1,
      value: dateFilter,
      defaultValue: 'За все время',
      onChange: setDateFilter,
      options: dateFilterOptions,
    },
    {
      id: 2,
      value: cityFilter,
      defaultValue: 'Все города',
      disabled: citiesLoading,
      onChange: setCityFilter,
      options: cities,
    },
    {
      id: 3,
      value: orderStatusFilter,
      defaultValue: 'Все заказы',
      disabled: orderStatusLoading,
      onChange: setOrderStatusFilter,
      options: orderStatus,
    },
  ];

  const checkboxes: Checkbox[] = [
    {
      label: 'Полный бак',
      value: isFullTankFilter,
      onChange: setFullTankFilter,
    },
    {
      label: 'Детское кресло',
      value: isNeedChildChairFilter,
      onChange: setNeedChildChairFilter,
    },
    {
      label: 'Правый руль',
      value: isRightWheelFilter,
      onChange: setRightWheelFilter,
    },
  ];
  return (
    <>
      {filters.map((filter) => (
        <Form.Select
          key={filter.id}
          size="sm"
          value={filter.value}
          onChange={(e) => filter.onChange(e.target.value)}
          disabled={filter.disabled}
        >
          <option value={filter.defaultValue}>
            {filter.defaultValue}
          </option>
          {filter.options && filter.options.map((option) => (
            <option
              value={option.id}
              key={option.id}
            >
              {option.name}
            </option>
          ))}
        </Form.Select>
      ))}
      <div className={styles['checkbox-wrap']}>
        {checkboxes.map((checkbox) => (
          <Form.Check
            type="checkbox"
            key={checkbox.label}
            label={checkbox.label}
            onChange={() => checkbox.onChange(!checkbox.value)}
            checked={checkbox.value}
          />
        ))}
      </div>
    </>
  );
};

export default OrderFilters;

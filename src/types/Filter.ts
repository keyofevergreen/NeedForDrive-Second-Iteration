import { Dispatch, SetStateAction } from 'react';

export type Filter = {
  id: number,
  value: string,
  defaultValue: string,
  onChange: Dispatch<SetStateAction<string>>,
  disabled?: boolean,
  options: any[]
};

export type Option = {
  id: string | number,
  name: string,
};

export type Checkbox = {
  label: string,
  value: boolean,
  onChange?: Dispatch<SetStateAction<boolean>>,
};

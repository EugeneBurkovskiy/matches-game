import { useEffect, useState } from 'react';

import styles from './OptionsInput.module.scss';

interface IProps {
  title: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  id?: string;
}

const OptionsInput = ({ title, onChange, defaultValue, id }: IProps) => {
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <label className={styles.label} htmlFor={id}>
      <p>{title}</p>
      <input
        type="number"
        className={styles.input}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export { OptionsInput };

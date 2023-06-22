import { ReactNode } from 'react';

import styles from './PlayerWrapper.module.scss';

interface IProps {
  children: ReactNode;
  active: boolean;
}
const PlayerWrapper = ({ children, active }: IProps) => {
  return <div className={`${styles.wrapper} ${active && styles.active}`}>{children}</div>;
};

export { PlayerWrapper };

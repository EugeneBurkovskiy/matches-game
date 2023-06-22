import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface IProps {
  children: ReactNode;
}

const Container = ({ children }: IProps) => {
  return <section className={styles.container}>{children}</section>;
};

export { Container };

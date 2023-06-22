import styles from './BurgerButton.module.scss';

interface IProps {
  onClick: () => void;
}

const BurgerButton = ({ onClick }: IProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      ☰
    </button>
  );
};

export { BurgerButton };

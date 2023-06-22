import styles from './CloseButton.module.scss';

interface IProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: IProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      ✕
    </button>
  );
};

export { CloseButton };

import styles from './CustomButton.module.scss';

interface IProps {
  text: string;
  onClick: () => void;
}

const CustomButton = ({ text, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export { CustomButton };

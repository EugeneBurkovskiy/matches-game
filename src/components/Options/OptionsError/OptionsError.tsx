import styles from './OptionsError.module.scss';

interface IProps {
  text: string;
}

const OptionsError = ({ text }: IProps) => {
  return (
    <div className={styles.error}>
      <p>
        It looks like you have some issues, your options will not be saved until you solve them:
      </p>
      <p className={styles.error__message}>"{text}"</p>
    </div>
  );
};

export { OptionsError };

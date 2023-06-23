import { CloseButton } from '../UI';
import { SelectPlayer } from './SelectPlayer/SelectPlayer';

import styles from './Options.module.scss';

interface IProps {
  active: boolean;
  closeFunc: () => void;
}

const Options = ({ active, closeFunc }: IProps) => {
  return (
    <nav className={`${styles.options} ${active && styles.show}`}>
      <div className={styles.options__button}>
        <CloseButton onClick={closeFunc} />
      </div>
      <div className={styles.options__content}>
        <h2 className={styles.options__title}>Options</h2>
        <SelectPlayer />
      </div>
    </nav>
  );
};

export { Options };

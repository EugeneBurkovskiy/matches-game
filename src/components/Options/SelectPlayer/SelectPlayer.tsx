import { EPlayer } from '../../../store/playersStore';

import styles from './SelectPlayer.module.scss';

const SelectPlayer = () => {
  return (
    <div className={styles.wrapper}>
      <p>First turn:</p>
      <select className={styles.select}>
        <option value={EPlayer.human}>{EPlayer.human}</option>
        <option value={EPlayer.AI}>{EPlayer.AI}</option>
      </select>
    </div>
  );
};

export { SelectPlayer };

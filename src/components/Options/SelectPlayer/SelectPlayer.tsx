import { EPlayer, usePlayers, playerType } from '../../../store/playersStore';

import styles from './SelectPlayer.module.scss';

const SelectPlayer = () => {
  const { setInitialPlayer } = usePlayers();
  const handleChangePlayer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value as playerType;
    setInitialPlayer(value);
  };

  return (
    <div className={styles.wrapper}>
      <p>First turn:</p>
      <select
        className={styles.select}
        defaultValue={EPlayer.human}
        onChange={(e) => handleChangePlayer(e)}
      >
        <option value={EPlayer.human}>{EPlayer.human}</option>
        <option value={EPlayer.AI}>{EPlayer.AI}</option>
      </select>
    </div>
  );
};

export { SelectPlayer };

import styles from './GameInstructions.module.scss';

const GameInstructions = () => {
  return (
    <div className={styles.instructions}>
      <h2 className={styles.instructions__title}>Instructions</h2>
      <p className={styles.instructions__text}>
        You are playing a game against AI. From the pile of 25 matches, each player takes either 1,
        2 or 3 matches on each turn. The game is over once all matches are taken. Whoever has the
        even amount of matches wins.
      </p>
    </div>
  );
};

export { GameInstructions };

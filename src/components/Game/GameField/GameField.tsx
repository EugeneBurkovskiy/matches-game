import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { MatchItem } from '../GameUI/MatchItem/MatchItem';

import { useMatchesCount } from '../../../store/matchesStore';
import { EPlayer, usePlayers } from '../../../store/playersStore';

import { generateMatchesArr } from '../../../utils/generateMatchesArr';
import { MAX_MATCHES_PER_TURN } from '../../../utils/variables';

import styles from './GameField.module.scss';

const GameField = () => {
  const { leftMathesCount, incrCurrentTurnMatchesCount, currentTurnMatchesCount } =
    useMatchesCount();
  const { currentPlayer } = usePlayers();

  const isActive = currentPlayer === EPlayer.human;

  const matches = useMemo(() => generateMatchesArr(leftMathesCount), [leftMathesCount]);

  const handleClick = () => {
    if (
      currentTurnMatchesCount < MAX_MATCHES_PER_TURN &&
      currentTurnMatchesCount < leftMathesCount
    ) {
      incrCurrentTurnMatchesCount(1);
    }
  };

  return (
    <section>
      <h2 className={styles.field__title}>Matches left: {leftMathesCount}</h2>
      <ul className={styles.field__matches}>
        {matches.map(() => (
          <li
            onClick={handleClick}
            className={`${styles.field__match} ${!isActive && styles.field__disabled}`}
            key={nanoid()}
          >
            <MatchItem />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { GameField };

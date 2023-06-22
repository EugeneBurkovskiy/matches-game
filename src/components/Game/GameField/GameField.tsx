import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { MatchItem } from '../GameUI/MatchItem/MatchItem';

import { useMatchesCount } from '../../../store/matchesStore';
import { generateMatchesArr } from '../../../utils/generateMatchesArr';
import { MAX_MATCHES_PER_TURN } from '../../../utils/rules';

import styles from './GameField.module.scss';

interface IProps {
  active: boolean;
}

const GameField = ({ active }: IProps) => {
  const { leftMathesCount, incrCurrentTurnMatchesCount, currentTurnMatchesCount } =
    useMatchesCount();

  const matches = useMemo(() => generateMatchesArr(leftMathesCount), [leftMathesCount]);

  const handleClick = () => {
    if (currentTurnMatchesCount < MAX_MATCHES_PER_TURN && active) {
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
            className={`${styles.field__match} ${!active && styles.field__disabled}`}
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

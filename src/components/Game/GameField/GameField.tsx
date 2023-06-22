import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { MatchItem } from '../GameUI/MatchItem/MatchItem';

import { useMatchesCount } from '../../../store/matchesStore';
import { generateMatchesArr } from '../../../utils/generateMatchesArr';

import styles from './GameField.module.scss';

const GameField = () => {
  const { leftMathesCount, incrPlayerMatchesCount } = useMatchesCount();

  const matches = useMemo(() => generateMatchesArr(leftMathesCount), [leftMathesCount]);

  const handleClick = () => {
    incrPlayerMatchesCount(1);
  };

  return (
    <section>
      <h2 className={styles.field__title}>Matches left: {leftMathesCount}</h2>
      <ul className={styles.field__matches}>
        {matches.map(() => (
          <li onClick={handleClick} className={styles.field__match} key={nanoid()}>
            <MatchItem />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { GameField };

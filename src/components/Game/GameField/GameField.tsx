import { useEffect, useState } from 'react';

import { MatchItem } from '../GameUI';

import { useMatchesCount } from '../../../store/matchesStore';
import { EPlayer, usePlayers } from '../../../store/playersStore';

import { generateMatchesArr } from '../../../utils/generateMatchesArr';

import styles from './GameField.module.scss';

const GameField = () => {
  const {
    leftMathesCount,
    currentTurnMatchesCount,
    totalMathesCount,
    maxMatchesPerTurn,
    incrCurrentTurnMatchesCount,
  } = useMatchesCount();

  const { currentPlayer } = usePlayers();
  const [matches, setMatches] = useState<string[]>(generateMatchesArr(totalMathesCount));

  const isActive = currentPlayer === EPlayer.human;

  useEffect(() => {
    setMatches((prev) => {
      if (totalMathesCount === leftMathesCount || leftMathesCount === 0) {
        return generateMatchesArr(totalMathesCount);
      }
      const removedMatchesCount = prev.length - leftMathesCount;

      return prev.slice(removedMatchesCount);
    });
  }, [leftMathesCount, totalMathesCount]);

  const handleClick = () => {
    if (currentTurnMatchesCount < maxMatchesPerTurn && currentTurnMatchesCount < leftMathesCount) {
      incrCurrentTurnMatchesCount(1);
    }
  };

  return (
    <section>
      <h2 className={styles.field__title}>Matches left: {leftMathesCount}</h2>
      <ul className={`${styles.field__matches} ${!isActive && styles.field__disabled}`}>
        {matches.map((item) => (
          <li onClick={handleClick} className={styles.field__match} key={item}>
            <MatchItem />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { GameField };

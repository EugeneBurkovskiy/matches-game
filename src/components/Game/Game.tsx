import { useEffect, useState } from 'react';

import { AIBoard } from './AIBoard/AIBoard';
import { GameField } from './GameField/GameField';
import { HumanBoard } from './HumanBoard/HumanBoard';

import { useMatchesCount } from '../../store/matchesStore';
import { getWinner } from '../../utils/getWinner';
import { ModalWindow } from '../UI/ModalWindow/ModalWindow';

import styles from './Game.module.scss';

const Game = () => {
  const {
    playerMatchesCount,
    AIMatchesCount,
    totalMathesCount,
    leftMathesCount,
    setLeftMatchesCount,
    resetCounters,
  } = useMatchesCount();

  const [winnerPhrase, setwinnerPhrase] = useState<string>('');

  useEffect(() => {
    const calculatedLeftMatchesCount = totalMathesCount - (playerMatchesCount + AIMatchesCount);
    setLeftMatchesCount(calculatedLeftMatchesCount);
  }, [playerMatchesCount, AIMatchesCount, totalMathesCount, setLeftMatchesCount]);

  useEffect(() => {
    if (leftMathesCount === 0) {
      const phrase = getWinner(AIMatchesCount);
      setwinnerPhrase(phrase);
      setTimeout(() => setwinnerPhrase(''), 2000);
      resetCounters();
    }
  }, [AIMatchesCount, leftMathesCount, resetCounters]);

  return (
    <article className={styles.game}>
      <AIBoard />
      <GameField />
      <HumanBoard />
      {winnerPhrase && <ModalWindow text={winnerPhrase} />}
    </article>
  );
};

export { Game };

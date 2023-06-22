import { useEffect, useState } from 'react';

import { Container } from '../UI/Container/Container';
import { AIBoard } from './AIBoard/AIBoard';
import { GameField } from './GameField/GameField';
import { HumanBoard } from './HumanBoard/HumanBoard';

import { useMatchesCount } from '../../store/matchesStore';

import styles from './Game.module.scss';

const Game = () => {
  const { playerMatchesCount, AIMatchesCount, totalMathesCount, setLeftMatchesCount } =
    useMatchesCount();

  const [playerTurnStatus, setPlayerTurnStatus] = useState(true);

  useEffect(() => {
    const calculatedLeftMatchesCount = totalMathesCount - (playerMatchesCount + AIMatchesCount);
    setLeftMatchesCount(calculatedLeftMatchesCount);
  }, [playerMatchesCount, AIMatchesCount, totalMathesCount, setLeftMatchesCount]);

  return (
    <Container>
      <article className={styles.game}>
        <AIBoard active={!playerTurnStatus} />
        <GameField />
        <HumanBoard active={playerTurnStatus} />
      </article>
    </Container>
  );
};

export { Game };

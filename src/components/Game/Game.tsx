import { Container } from '../UI/Container/Container';
import { AIBoard } from './AIBoard/AIBoard';
import { GameField } from './GameField/GameField';
import { PlayerBoard } from './PlayerBoard/PlayerBoard';

import styles from './Game.module.scss';

const Game = () => {
  return (
    <Container>
      <article className={styles.game}>
        <AIBoard />
        <GameField />
        <PlayerBoard />
      </article>
    </Container>
  );
};

export { Game };

import { useEffect, useState } from 'react';

import { AIBoard } from './AIBoard/AIBoard';
import { GameField } from './GameField/GameField';
import { HumanBoard } from './HumanBoard/HumanBoard';

import { ModalWindow } from '../UI';

import { useMatchesCount } from '../../store/matchesStore';
import { usePlayers } from '../../store/playersStore';

import { MODAL_WINDOW_TIME } from '../../utils/variables';

import styles from './Game.module.scss';

enum EFinalPhrase {
  win = 'You win !',
  lose = 'You lose :(',
}

const Game = () => {
  const {
    playerMatchesCount,
    AIMatchesCount,
    totalMathesCount,
    maxMatchesPerTurn,
    setLeftMatchesCount,
    resetCounters,
  } = useMatchesCount();

  const [finishGame, setFinishGame] = useState(false);

  const { initialPlayer, setCurrentPlayer } = usePlayers();

  const finalPhrase = AIMatchesCount % 2 === 0 ? EFinalPhrase.lose : EFinalPhrase.win;

  useEffect(() => {
    const calculatedLeftMatchesCount = totalMathesCount - (playerMatchesCount + AIMatchesCount);
    setLeftMatchesCount(calculatedLeftMatchesCount);
  }, [playerMatchesCount, AIMatchesCount, totalMathesCount, setLeftMatchesCount]);

  useEffect(() => {
    resetCounters();
  }, [initialPlayer, totalMathesCount, maxMatchesPerTurn, resetCounters]);

  useEffect(() => {
    if (finishGame) {
      const timer = setTimeout(() => {
        setFinishGame(false);
        setCurrentPlayer(initialPlayer);
      }, MODAL_WINDOW_TIME);
      return () => {
        resetCounters();
        clearTimeout(timer);
      };
    }
  }, [finishGame, initialPlayer, resetCounters, setCurrentPlayer]);

  return (
    <article className={styles.game}>
      <AIBoard setFinishGame={setFinishGame} />
      <GameField />
      <HumanBoard setFinishGame={setFinishGame} />
      {finishGame && <ModalWindow text={finalPhrase} />}
    </article>
  );
};

export { Game };

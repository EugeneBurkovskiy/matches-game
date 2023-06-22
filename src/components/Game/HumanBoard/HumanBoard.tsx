import { useState } from 'react';

import { useMatchesCount } from '../../../store/matchesStore';
import { Avatar } from '../../UI/Avatar/Avatar';
import { MatchesCountBoard } from '../GameUI/MatchesCountBoard/MatchesCountBoard';
import { PlayerWrapper } from '../GameUI/PlayerWrapper/PlayerWrapper';
import { CustomButton } from '../../UI/Buttons/CustomButton/CustomButton';

import { AI_TURN_TIME } from '../../../utils/variables';
import { generateAIMatchesPickCount } from '../../../utils/generateAIMatchesPickCount';
import { EPlayer, usePlayers } from '../../../store/playersStore';

import styles from './HumanBoard.module.scss';

const HumanBoard = () => {
  const {
    playerMatchesCount,
    currentTurnMatchesCount,
    leftMathesCount,
    incrPlayerMatchesCount,
    incrAIMatchesCount,
  } = useMatchesCount();

  const [gender, setGender] = useState(false);

  const { currentPlayer, setCurrentPlayer } = usePlayers();

  const isActive = currentPlayer === EPlayer.human;
  const currentGender = gender ? '👧' : '👦';

  const handleGender = () => {
    setGender((prev) => !prev);
  };

  const handleTake = () => {
    if (currentTurnMatchesCount) {
      incrPlayerMatchesCount(currentTurnMatchesCount);
      setCurrentPlayer(EPlayer.AI);

      if (currentTurnMatchesCount === leftMathesCount) {
        setCurrentPlayer(EPlayer.human);
      } else {
        setTimeout(() => {
          const AIPickCount = generateAIMatchesPickCount();
          incrAIMatchesCount(AIPickCount);
          setCurrentPlayer(EPlayer.human);
        }, AI_TURN_TIME);
      }
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.player}>
        <MatchesCountBoard count={playerMatchesCount} />
        <PlayerWrapper active={isActive}>
          <button onClick={handleGender}>
            <Avatar avatar={currentGender} />
          </button>
        </PlayerWrapper>
      </div>
      <CustomButton text={`Take: ${currentTurnMatchesCount}`} onClick={handleTake} />
    </section>
  );
};

export { HumanBoard };

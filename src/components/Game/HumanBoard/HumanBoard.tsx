import { useState } from 'react';

import { Avatar, CustomButton } from '../../UI';

import { MatchesCountBoard, PlayerWrapper } from '../GameUI';

import { useMatchesCount } from '../../../store/matchesStore';
import { EPlayer, usePlayers } from '../../../store/playersStore';

import styles from './HumanBoard.module.scss';

interface IProps {
  setFinishGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const HumanBoard = ({ setFinishGame }: IProps) => {
  const { playerMatchesCount, currentTurnMatchesCount, leftMathesCount, incrPlayerMatchesCount } =
    useMatchesCount();

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
      if (currentTurnMatchesCount === leftMathesCount) {
        setFinishGame(true);
      } else {
        setCurrentPlayer(EPlayer.AI);
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

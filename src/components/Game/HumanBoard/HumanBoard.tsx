import { useState } from 'react';
import { useMatchesCount } from '../../../store/matchesStore';
import { Avatar } from '../../UI/Avatar/Avatar';
import { MatchesCountBoard } from '../GameUI/MatchesCountBoard/MatchesCountBoard';

import styles from './HumanBoard.module.scss';
import { PlayerWrapper } from '../GameUI/PlayerWrapper/PlayerWrapper';
import { CustomButton } from '../../UI/CustomButton/CustomButton';

interface IProps {
  active: boolean;
  setTurnStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const HumanBoard = ({ active, setTurnStatus }: IProps) => {
  const { playerMatchesCount, currentTurnMatchesCount, incrPlayerMatchesCount } = useMatchesCount();
  const [gender, setGender] = useState(false);

  const handleGender = () => {
    setGender((prev) => !prev);
  };

  const handleTake = () => {
    if (currentTurnMatchesCount) {
      incrPlayerMatchesCount(currentTurnMatchesCount);
      setTurnStatus(false);
      setTimeout(() => {
        console.log('AI Turn');
        setTurnStatus(true);
      }, 3000);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.player}>
        <MatchesCountBoard count={playerMatchesCount} />
        <PlayerWrapper active={active}>
          <button onClick={handleGender}>
            <Avatar avatar={gender ? '👧' : '👦'} />
          </button>
        </PlayerWrapper>
      </div>
      <CustomButton text={`Take: ${currentTurnMatchesCount}`} onClick={handleTake} />
    </section>
  );
};

export { HumanBoard };

import { useState } from 'react';
import { useMatchesCount } from '../../../store/matchesStore';
import { Avatar } from '../../UI/Avatar/Avatar';
import { MatchesCountBoard } from '../GameUI/MatchesCountBoard/MatchesCountBoard';

import styles from './HumanBoard.module.scss';
import { PlayerWrapper } from '../GameUI/PlayerWrapper/PlayerWrapper';

interface IProps {
  active: boolean;
}

const HumanBoard = ({ active }: IProps) => {
  const { playerMatchesCount } = useMatchesCount();
  const [gender, setGender] = useState(false);

  const handleGender = () => {
    setGender((prev) => !prev);
  };

  return (
    <section className={styles.player}>
      <MatchesCountBoard count={playerMatchesCount} />
      <PlayerWrapper active={active}>
        <button onClick={handleGender}>
          <Avatar avatar={gender ? '👧' : '👦'} />
        </button>
      </PlayerWrapper>
    </section>
  );
};

export { HumanBoard };

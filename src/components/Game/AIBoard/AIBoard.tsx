import { useMatchesCount } from '../../../store/matchesStore';
import { Avatar } from '../../UI/Avatar/Avatar';
import { MatchesCountBoard } from '../GameUI/MatchesCountBoard/MatchesCountBoard';
import { PlayerWrapper } from '../GameUI/PlayerWrapper/PlayerWrapper';

import styles from './AIBoard.module.scss';

interface IProps {
  active: boolean;
}

const AIBoard = ({ active }: IProps) => {
  const { AIMatchesCount } = useMatchesCount();

  return (
    <section className={styles.player}>
      <MatchesCountBoard count={AIMatchesCount} />
      <PlayerWrapper active={active}>
        <Avatar avatar="🤖" />
      </PlayerWrapper>
    </section>
  );
};

export { AIBoard };

import { useMatchesCount } from '../../../store/matchesStore';
import { EPlayer, usePlayers } from '../../../store/playersStore';
import { Avatar } from '../../UI/Avatar/Avatar';
import { MatchesCountBoard } from '../GameUI/MatchesCountBoard/MatchesCountBoard';
import { PlayerWrapper } from '../GameUI/PlayerWrapper/PlayerWrapper';

import styles from './AIBoard.module.scss';

const AIBoard = () => {
  const { AIMatchesCount } = useMatchesCount();
  const { currentPlayer } = usePlayers();
  const isActive = currentPlayer === EPlayer.AI;

  return (
    <section className={styles.player}>
      <MatchesCountBoard count={AIMatchesCount} />
      <PlayerWrapper active={isActive}>
        <Avatar avatar="🤖" />
      </PlayerWrapper>
    </section>
  );
};

export { AIBoard };

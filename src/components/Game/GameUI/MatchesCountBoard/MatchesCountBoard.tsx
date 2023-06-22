import { MatchItem } from '../MatchItem/MatchItem';
import styles from './MatchesCountBoard.module.scss';

interface IProps {
  count: number;
}

const MatchesCountBoard = ({ count }: IProps) => {
  return (
    <div className={styles.count}>
      <span>{count}</span>
      ✕
      <MatchItem />
    </div>
  );
};

export { MatchesCountBoard };

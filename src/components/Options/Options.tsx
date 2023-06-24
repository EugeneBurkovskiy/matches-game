import { useCallback, useState } from 'react';

import { CloseButton } from '../UI';
import { SelectPlayer } from './SelectPlayer/SelectPlayer';
import { OptionsInput } from './OptionsInput/OptionsInput';
import { OptionsError } from './OptionsError/OptionsError';
import { GameInstructions } from '../GameInstructions/GameInstructions';

import { DEFAULT_MAX_MATCHES_PER_TURN, DEFAULT_TOTAL_MATCHES_NUMBER } from '../../utils/variables';

import { useMatchesCount } from '../../store/matchesStore';

import styles from './Options.module.scss';

interface IProps {
  active: boolean;
  closeFunc: () => void;
}

const Options = ({ active, closeFunc }: IProps) => {
  const { setTotalMatchesCount, setMaxMatchesPerTurn, maxMatchesPerTurn, totalMathesCount } =
    useMatchesCount();
  const [error, setError] = useState('');

  const handleTotalMatches = useCallback(
    (value: string) => {
      const numValue = +value * 2 + 1;
      if (numValue % 2 !== 0 && numValue > maxMatchesPerTurn && numValue && numValue % 1 === 0) {
        setTotalMatchesCount(numValue);
        setError('');
      } else {
        setError('Value must be odd and not 0 !');
      }
    },
    [maxMatchesPerTurn, setTotalMatchesCount]
  );

  const handleMaxTurns = useCallback(
    (value: string) => {
      const numValue = +value;
      if (numValue <= totalMathesCount / 3 && numValue && numValue % 1 === 0) {
        setMaxMatchesPerTurn(numValue);
        setError('');
      } else {
        setError('Value must be less than total matches count in 3 times !');
      }
    },
    [setMaxMatchesPerTurn, totalMathesCount]
  );

  return (
    <nav className={`${styles.options} ${active && styles.show}`}>
      <div className={styles.options__button}>
        <CloseButton onClick={closeFunc} />
      </div>
      <div className={styles.options__content}>
        <h2 className={styles.options__title}>Options</h2>
        <SelectPlayer />
        <OptionsInput
          title="Total matches count 2n+1 (result must be odd number)!:"
          defaultValue={`${(DEFAULT_TOTAL_MATCHES_NUMBER - 1) / 2}`}
          onChange={handleTotalMatches}
        />
        <OptionsInput
          title="Max matches per turn:"
          defaultValue={`${DEFAULT_MAX_MATCHES_PER_TURN}`}
          onChange={handleMaxTurns}
        />
        {error && <OptionsError text={error} />}
      </div>
      <GameInstructions />
    </nav>
  );
};

export { Options };

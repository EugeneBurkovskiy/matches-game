const generateAIMatchesPickCount = (
  leftMatchesCount: number,
  maxMatchesPerTurn: number,
  AIMatchesCount: number
) => {
  const evenLeftMatchesCount = leftMatchesCount % 2 === 0;
  const evenHandMatchesCount = AIMatchesCount % 2 === 0;

  const findMaxPossibleCount = (
    maxMatchesPerTurn: number,
    leftMatchesCount: number,
    flag: 'odd' | 'even'
  ) => {
    const possibleCounts = [...new Array(maxMatchesPerTurn)]
      .map((_, i) => i + 1)
      .filter((item) => {
        if (flag === 'even') return item <= leftMatchesCount && item % 2 === 0;
        else if (flag === 'odd') return item <= leftMatchesCount && item % 2 !== 0;
      });

    const maxPossibleOddCount = Math.max(...possibleCounts);

    if (isFinite(maxPossibleOddCount)) {
      return maxPossibleOddCount;
    }

    return 1;
  };

  const maxPossibleEvenCount = findMaxPossibleCount(maxMatchesPerTurn, leftMatchesCount, 'even');
  const maxPossibleOddCount = findMaxPossibleCount(maxMatchesPerTurn, leftMatchesCount, 'odd');

  if (evenLeftMatchesCount) {
    if (evenHandMatchesCount) {
      if (leftMatchesCount === maxMatchesPerTurn) {
        return maxMatchesPerTurn;
      } else {
        return maxPossibleEvenCount;
      }
    } else {
      return maxPossibleOddCount;
    }
  } else {
    if (evenHandMatchesCount) {
      return maxPossibleEvenCount;
    } else {
      if (leftMatchesCount === maxMatchesPerTurn + 1) {
        return maxPossibleOddCount;
      } else {
        return maxPossibleOddCount;
      }
    }
  }
};

export { generateAIMatchesPickCount };

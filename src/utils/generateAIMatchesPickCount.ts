const generateAIMatchesPickCount = (
  leftMatchesCount: number,
  maxMatchesPerTurn: number,
  AIMatchesCount: number
) => {
  const evenLeftMatchesCount = leftMatchesCount % 2 === 0;
  if (AIMatchesCount % 2 !== 0) {
    return 1;
  }
  if (evenLeftMatchesCount) {
    if (leftMatchesCount === maxMatchesPerTurn) {
      return maxMatchesPerTurn;
    } else if (leftMatchesCount < maxMatchesPerTurn) {
      return leftMatchesCount;
    }
    return 2;
  }
  return 1;
};

export { generateAIMatchesPickCount };

const generateAIMatchesPickCount = (leftMathesCount: number, maxMatchesPerTurn: number) => {
  for (let i = 1; i <= maxMatchesPerTurn; i++) {
    if ((leftMathesCount - i) % (maxMatchesPerTurn + 1) === 0) {
      return i;
    }
  }

  return Math.ceil(Math.random() * maxMatchesPerTurn);
};

export { generateAIMatchesPickCount };

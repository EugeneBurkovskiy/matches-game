const getWinner = (AIScore: number) => {
  if (AIScore % 2 === 0) {
    return 'You lose :(';
  }
  return 'You Win !';
};

export { getWinner };

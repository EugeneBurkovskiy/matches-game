const generateMatchesArr = (count: number) => {
  return [...Array(count)].map((_, index) => index + 1);
};

export { generateMatchesArr };

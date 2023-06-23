import { nanoid } from 'nanoid';

const generateMatchesArr = (count: number) => {
  return [...Array(count)].map(() => nanoid());
};

export { generateMatchesArr };

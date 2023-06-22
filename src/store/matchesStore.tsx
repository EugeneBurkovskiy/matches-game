import { create } from 'zustand';

interface IMatchesCount {
  totalMathesCount: number;
  leftMathesCount: number;
  playerMatchesCount: number;
  AIMatchesCount: number;
  incrPlayerMatchesCount: (count: number) => void;
  incrAIMatchesCount: (count: number) => void;
  setLeftMatchesCount: (count: number) => void;
}

const useMatchesCount = create<IMatchesCount>((set) => ({
  totalMathesCount: 25,
  leftMathesCount: 0,
  playerMatchesCount: 0,
  AIMatchesCount: 0,
  incrPlayerMatchesCount: (count) =>
    set((state) => ({ playerMatchesCount: state.playerMatchesCount + count })),
  incrAIMatchesCount: (count) => set((state) => ({ AIMatchesCount: state.AIMatchesCount + count })),
  setLeftMatchesCount: (count) => set({ leftMathesCount: count }),
}));

export { useMatchesCount };

import { create } from 'zustand';
import { MATCHES_NUMBER } from '../utils/rules';

interface IMatchesCount {
  totalMathesCount: number;
  leftMathesCount: number;
  playerMatchesCount: number;
  AIMatchesCount: number;
  currentTurnMatchesCount: number;
  incrPlayerMatchesCount: (count: number) => void;
  incrAIMatchesCount: (count: number) => void;
  setLeftMatchesCount: (count: number) => void;
  incrCurrentTurnMatchesCount: (count: number) => void;
}

const useMatchesCount = create<IMatchesCount>((set) => ({
  totalMathesCount: MATCHES_NUMBER,
  leftMathesCount: 0,
  playerMatchesCount: 0,
  AIMatchesCount: 0,
  currentTurnMatchesCount: 0,
  incrPlayerMatchesCount: (count) =>
    set((state) => ({
      playerMatchesCount: state.playerMatchesCount + count,
      currentTurnMatchesCount: 0,
    })),
  incrAIMatchesCount: (count) => set((state) => ({ AIMatchesCount: state.AIMatchesCount + count })),
  setLeftMatchesCount: (count) => set({ leftMathesCount: count }),
  incrCurrentTurnMatchesCount: (count) =>
    set((state) => ({ currentTurnMatchesCount: state.currentTurnMatchesCount + count })),
}));

export { useMatchesCount };

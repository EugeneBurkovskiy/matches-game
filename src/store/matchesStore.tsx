import { create } from 'zustand';
import { DEFAULT_MAX_MATCHES_PER_TURN, DEFAULT_TOTAL_MATCHES_NUMBER } from '../utils/variables';

interface IMatchesCount {
  totalMathesCount: number;
  leftMathesCount: number;
  playerMatchesCount: number;
  AIMatchesCount: number;
  currentTurnMatchesCount: number;
  maxMatchesPerTurn: number;
  setTotalMatchesCount: (count: number) => void;
  incrPlayerMatchesCount: (count: number) => void;
  incrAIMatchesCount: (count: number) => void;
  setLeftMatchesCount: (count: number) => void;
  incrCurrentTurnMatchesCount: (count: number) => void;
  setMaxMatchesPerTurn: (count: number) => void;
  resetCounters: () => void;
}

const useMatchesCount = create<IMatchesCount>((set) => ({
  totalMathesCount: DEFAULT_TOTAL_MATCHES_NUMBER,
  leftMathesCount: DEFAULT_TOTAL_MATCHES_NUMBER,
  playerMatchesCount: 0,
  AIMatchesCount: 0,
  currentTurnMatchesCount: 0,
  maxMatchesPerTurn: DEFAULT_MAX_MATCHES_PER_TURN,

  setTotalMatchesCount: (count) => set({ totalMathesCount: count, leftMathesCount: count }),

  incrPlayerMatchesCount: (count) =>
    set((state) => ({
      playerMatchesCount: state.playerMatchesCount + count,
      currentTurnMatchesCount: 0,
    })),

  incrAIMatchesCount: (count) => set((state) => ({ AIMatchesCount: state.AIMatchesCount + count })),

  setLeftMatchesCount: (count) => set({ leftMathesCount: count }),

  incrCurrentTurnMatchesCount: (count) =>
    set((state) => ({ currentTurnMatchesCount: state.currentTurnMatchesCount + count })),

  setMaxMatchesPerTurn: (count) => set({ maxMatchesPerTurn: count }),

  resetCounters: () =>
    set((state) => ({
      leftMathesCount: state.totalMathesCount,
      maxMatchesPerTurn: state.maxMatchesPerTurn,
      playerMatchesCount: 0,
      AIMatchesCount: 0,
      currentTurnMatchesCount: 0,
    })),
}));

export { useMatchesCount };

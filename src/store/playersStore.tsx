import { create } from 'zustand';

export type playerType = 'human' | 'AI';

export enum EPlayer {
  human = 'human',
  AI = 'AI',
}

interface IPlayer {
  initialPlayer: playerType;
  currentPlayer: playerType;
  setInitialPlayer: (player: playerType) => void;
  setCurrentPlayer: (player: playerType) => void;
}

const usePlayers = create<IPlayer>((set) => ({
  initialPlayer: EPlayer.human,
  currentPlayer: EPlayer.human,
  setInitialPlayer: (player) => set({ currentPlayer: player }),
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
}));

export { usePlayers };

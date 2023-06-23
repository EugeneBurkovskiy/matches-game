import { create } from 'zustand';

export type playerType = 'human' | 'AI';

export enum EPlayer {
  human = 'human',
  AI = 'AI',
}

interface IPlayer {
  initialPlayer: playerType;
  secondPlayer: playerType;
  currentPlayer: playerType;
  setInitialPlayer: (player: playerType) => void;
  setCurrentPlayer: (player: playerType) => void;
}

const usePlayers = create<IPlayer>((set) => ({
  initialPlayer: EPlayer.human,
  secondPlayer: EPlayer.AI,
  currentPlayer: EPlayer.human,
  setCurrentPlayer: (player) => set({ currentPlayer: player }),
  setInitialPlayer: (player) => {
    if (player === EPlayer.human) {
      set({ initialPlayer: EPlayer.human, currentPlayer: EPlayer.human, secondPlayer: EPlayer.AI });
    } else {
      set({ initialPlayer: EPlayer.AI, currentPlayer: EPlayer.AI, secondPlayer: EPlayer.human });
    }
  },
}));

export { usePlayers };

import { MOVE, REBOOT, PLAYER_WON, DRAW } from "../types";

const initialGameState = {
  field: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  isDraw: false,
  isGameEnded: false,
};

export const gameReducer = (state = initialGameState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVE: {
      return {
        ...state,
        ...payload,
      };
    }
    case REBOOT: {
      return {
        ...payload,
      };
    }

    case PLAYER_WON: {
      return {
        ...state,
        ...payload,
      };
    }
    case DRAW: {
      return {
        ...state,
        isDraw: payload,
      };
    }

    default:
      return state;
  }
};

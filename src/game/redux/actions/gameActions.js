import { store } from "../store";
import { WIN_PATTERNS } from "../../constants";

export function playersMove(el, index) {
  const { currentPlayer, isGameEnded, field } = store.getState();

  if (!isGameEnded) {
    let copyField = Object.assign([], field);
    let indexValue = index;
    if (el === "") {
      copyField.splice(indexValue, 1, currentPlayer);

      if (currentPlayer === "X") {
        store.dispatch({
          type: "MOVE",
          payload: { field: copyField, currentPlayer: "O" },
        });
      } else {
        store.dispatch({
          type: "MOVE",
          payload: { field: copyField, currentPlayer: "X" },
        });
      }
      checkDraw(copyField);
      getWinner(copyField, isGameEnded);
    }
  }
}

export function resetGame() {
  store.dispatch({
    type: "REBOOT",
    payload: {
      field: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X",
      isDraw: false,
      isGameEnded: false,
    },
  });
}

function getWinner(field, isGameEnded) {
  if (!isGameEnded) {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      let el = WIN_PATTERNS[i];
      let fildEl = [];
      for (let j = 0; j < el.length; j++) {
        fildEl.push(field[el[j]]);
      }
      if (fildEl.join("") === "XXX") {
        store.dispatch({
          type: "PLAYER_WON",
          payload: { isGameEnded: true, currentPlayer: "X" },
        });
      }
      if (fildEl.join("") === "OOO") {
        store.dispatch({
          type: "PLAYER_WON",
          payload: { isGameEnded: true, currentPlayer: "O" },
        });
      }
    }
  }
}

function checkDraw(field) {
  let x = field.every((el) => {
    return el !== "";
  });

  if (x === true) {
    store.dispatch({
      type: "DRAW",
      payload: true,
    });
  }
}

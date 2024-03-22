import { InformationLayout } from "./InformationLayout.js";
import { store } from "../../redux/store.js";
import { useState } from "react";

export const Information = () => {
  const { currentPlayer } = store.getState();
  const [status, setStatus] = useState(`Ходит: ${currentPlayer}`);

  store.subscribe(() => {
    const { currentPlayer, isDraw, isGameEnded } = store.getState();
    if (!isDraw && !isGameEnded) {
      setStatus(`Ходит: ${currentPlayer}`);
    }
    if (isGameEnded) {
      setStatus(`Победил: ${currentPlayer}`);
    } else if (isDraw) {
      setStatus("Ничья");
    }
  });

  return <InformationLayout status={status} />;
};

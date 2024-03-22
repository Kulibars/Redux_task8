import { FieldLavout } from "./FieldLavout.js";
import { playersMove } from "../../../redux/actions/gameActions.js";
import { store } from "../../../redux/store.js";
import { useState } from "react";

export const Field = () => {
  const { field } = store.getState();
  const [fieldRender, setFieldRender] = useState(field);
  store.subscribe(() => {
    const { field } = store.getState();
    setFieldRender(field);
  });

  return <FieldLavout playersMove={playersMove} fieldRender={fieldRender} />;
};

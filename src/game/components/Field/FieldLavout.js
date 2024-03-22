import styles from "./FieldLavout.module.css";

export const FieldLavout = ({ fieldRender, playersMove }) => {
  return fieldRender.map((el, index) => (
    <button
      className={styles.buttons}
      key={index}
      id={index}
      onClick={() => playersMove(el, index)}
    >
      {el}
    </button>
  ));
};

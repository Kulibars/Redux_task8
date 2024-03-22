import styles from "./InformationLayout.module.css";

export const InformationLayout = ({ status }) => {
  return <div className={styles.nformation}>{status}</div>;
};

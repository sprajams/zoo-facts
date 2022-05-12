import styles from "./style.module.scss";
const Button = ({ onClick, label }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <span className={styles.btnTop}>{label}</span>
      <span className={styles.btnBottom}></span>
    </button>
  );
};
export default Button;

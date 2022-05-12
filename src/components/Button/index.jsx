import PropTypes from "prop-types";
import styles from "./styles.module.scss";
const Button = ({ onClick, label }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <span className={styles.btnTop}>{label}</span>
      <span className={styles.btnBottom}></span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default Button;

import PropTypes from "prop-types";
import styles from "./styles.module.scss";
const Button = ({ onClick, label, disabled }) => {
  if (disabled) {
    return (
      <button className={styles.btn} disabled>
        <span className={styles.btnTop}>{label}</span>
        <span className={styles.btnBottom}></span>
      </button>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      <span className={styles.btnTop}>{label}</span>
      <span className={styles.btnBottom}></span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;

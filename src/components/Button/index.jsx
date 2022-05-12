import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Button = ({ onClick, label, disabled, darkMode }) => {
  //if the button is disabled display the below styles
  if (disabled) {
    return (
      <button className={styles.btn} disabled>
        <span className={styles.btnTop}>{label}</span>
        <span className={styles.btnBottom}></span>
      </button>
    );
  }
  //all other buttons will have the below styling
  return (
    <button className={styles.btn} onClick={onClick}>
      <span className={clsx(styles.btnTop, darkMode && styles.isDark)}>
        {label}
      </span>
      <span
        className={clsx(styles.btnBottom, darkMode && styles.isDark)}
      ></span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;

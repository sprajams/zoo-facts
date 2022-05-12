import "./style.scss";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleIOS from "../ToggleIOS";

function ToggleDark(props) {
  const { handleClick, darkMode } = props;

  return (
    <div className="modeWrap">
      <div>Dark Mode</div>
      <FormControlLabel
        control={<ToggleIOS sx={{ m: 1 }} />}
        checked={darkMode}
        onChange={handleClick}
      />
    </div>
  );
}

export default ToggleDark;

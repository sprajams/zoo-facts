import "./style.scss";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleIOS from "../ToggleIOS";

function ToggleDark(props) {
  const { handleClick, isDarkMode } = props;

  return (
    <div>
      {/* <span className="lightMode">Light Mode</span>
      <Switch
        checked={isDarkMode}
        onChange={handleClick}
            />
      <span className="darkMode">Dark Mode</span> */}
      <FormControlLabel
        control={<ToggleIOS sx={{ m: 1 }} />}
        label="Dark Mode"
        checked={isDarkMode}
        onChange={handleClick}
        labelPlacement="start"
      />
    </div>
  );
}

export default ToggleDark;

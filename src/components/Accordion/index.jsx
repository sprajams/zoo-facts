import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./style.scss";

function Accordion(props) {
  const { title, detail, handleClick, open, darkMode } = props;

  return (
    <div className={darkMode ? "accordion accordion--dark" : "accordion"}>
      <button onClick={handleClick} className="accordion__button">
        {title}
        {open ? (
          <div>
            <RemoveIcon />
          </div>
        ) : (
          <div>
            <AddIcon />
          </div>
        )}
      </button>
      {open ? <div className="accordion__detail">{detail}</div> : null}
    </div>
  );
}

export default Accordion;

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./style.scss";

function Accordion(props) {
  const { title, detail, handleClick, open } = props;

  return (
    <div className="accordion">
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

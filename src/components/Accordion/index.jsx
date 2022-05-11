import "./style.scss";

function Accordion(props) {
  const { title, detail, handleClick, open } = props;

  return (
    <div className="accordion">
      <button onClick={handleClick} className="accordion__button">
        {title} {open ? <span>-</span> : <span>+</span>}
      </button>
      {open ? <div className="accordion__detail">{detail}</div> : null}
    </div>
  );
}

export default Accordion;

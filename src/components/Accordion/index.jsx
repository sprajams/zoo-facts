import "./style.scss";

function Accordion(props) {
  const { title, detail, handleClick, open } = props;

  return (
    <div className="accordion">
      <button onClick={handleClick} className="accordion__button">
        {title}
        {open ? (
          <div>
            <img src="/icons/minus.png" alt="minus or expanded icon" />
          </div>
        ) : (
          <div>
            <img src="/icons/plus.png" alt="plus or expandable icon" />
          </div>
        )}
      </button>
      {open ? <div className="accordion__detail">{detail}</div> : null}
    </div>
  );
}

export default Accordion;

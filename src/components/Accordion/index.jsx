import "./style.scss";

function Accordion(props) {
  const { title, detail, handleClick, open } = props;

  const openStyle = {
    flexGrow: 1,
  };

  return (
    <div className="accordion" style={open ? openStyle : null}>
      <button onClick={handleClick} className="accordion__button">
        {title}
      </button>
      {open ? (
        <div className="accordion__detail" style={open ? openStyle : null}>
          {detail}
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;

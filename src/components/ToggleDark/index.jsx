import "./style.scss";

function ToggleDark(props) {
  const { handleClick } = props;
  return (
    <button onClick={handleClick} className="mode">
      mode
    </button>
  );
}

export default ToggleDark;

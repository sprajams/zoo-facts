import { getCardBg } from "../../util";
import "./style.scss";

function CardMini(props) {
  const { handleClick, animal, index } = props;

  function addLeadingZero(num, totalLength) {
    return String(num).padStart(totalLength, "0");
  }
  let formattedIndex = addLeadingZero(parseInt(index) + 1, 3);

  if (!animal) {
    return <div className="cardMini__unknown">{formattedIndex}</div>;
  }
  const bgStyle = getCardBg(animal.animal_type);
  return (
    <button style={bgStyle} className="cardMini" onClick={handleClick}>
      <div className="cardMini__inner"></div>
    </button>
  );
}
export default CardMini;

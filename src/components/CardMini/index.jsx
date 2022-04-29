import { getCardBg } from "../../util";
import "./style.scss";

function CardMini(props) {
  const { handleClick, animal } = props;
  const bgStyle = getCardBg(animal.animal_type);
  return (
    <button style={bgStyle} className="cardMini" onClick={handleClick}>
      <div className="cardMini__inner"></div>
    </button>
  );
}
export default CardMini;

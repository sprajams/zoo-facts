import { useState } from "react";
import Accordion from "../Accordion";
import Start from "../Start";
import CardMini from "../CardMini";
import "./style.scss";

function AccordionGroup(props) {
  const { cardList, setInfo, setCardList } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Shop",
      detail: <Start setInfo={setInfo} setCardList={setCardList} />,
    },
    {
      title: "Collection",
      detail: (
        <ul className="collectionList">
          {cardList.map((card, index) => {
            const handleClick = () => {
              setInfo(card);
            };
            return (
              <li key={index}>
                {card ? (
                  <CardMini handleClick={handleClick} animal={card} />
                ) : (
                  <div className="cardMini__unknown">???</div>
                )}
              </li>
            );
          })}
        </ul>
      ),
    },
    { title: "Settings", detail: "dark mode" },
  ];

  return (
    <div className="accordionGroup">
      {accordionData.map((data, index) => {
        const { title, detail } = data;
        const handleClick = () => {
          setActiveIndex(index);
        };
        return (
          <Accordion
            handleClick={handleClick}
            title={title}
            detail={detail}
            key={index}
            open={activeIndex === index}
          />
        );
      })}
    </div>
  );
}
export default AccordionGroup;

import { useState } from "react";
import Accordion from "../Accordion";
import Start from "../Start";
import CardMini from "../CardMini";
import ToggleDark from "../ToggleDark";
import "./style.scss";

function AccordionGroup(props) {
  const { cardList, setInfo, setCardList, handleClick, isDarkMode } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Shop",
      detail: <Start setInfo={setInfo} setCardList={setCardList} />,
    },
    {
      title: "Collection",
      detail:
        // TODO: match shop grid spacing
        cardList.length > 0 ? (
          <ul className="collectionList">
            {cardList.map((card, index) => {
              const handleClick = () => {
                setInfo(card);
              };
              return (
                <li key={index}>
                  <CardMini handleClick={handleClick} animal={card} />

                  {/* {card ? (
                    // TODO: pass in active state
                  ) : (
                    // TODO: handle unknown inside CardMini
                    <div className="cardMini__unknown"></div>
                  )} */}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="collectionList--empty">
            Oops, looks like this is empty 🥺 <br /> Please visit the Shop to
            get started!
          </div>
        ),
    },
    {
      title: "Settings",
      detail: <ToggleDark handleClick={handleClick} isDarkMode={isDarkMode} />,
    },
  ];

  console.log(cardList);
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

import { useState, useEffect } from "react";
import CardMini from "../CardMini";
import "./style.scss";

function Start(props) {
  const { setInfo, setCardList } = props;
  const [animalData, getAnimalData] = useState([]);

  const fetchData = () => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5")
      .then((res) => res.json())
      .then((data) => {
        getAnimalData(data);
      });
  };

  useEffect(() => {
    // adding new cards to collection
    setCardList((curr) => {
      const newList = [...curr];
      for (let i = 1; i < animalData.length; i++) {
        const cardId = animalData[i].id;
        newList[cardId - 1] = animalData[i];
      }
      // replace empty elements with undefined
      for (let i = 0; i < newList.length; i++) {
        if (newList[i] === undefined) {
          newList[i] = undefined;
        }
      }
      return [...newList];
    });
  }, [animalData, setCardList]);

  const [cardNum, setCardNum] = useState(NaN);

  useEffect(() => {
    if (animalData && animalData[cardNum]) {
      let activeAnimal = animalData[cardNum];
      setInfo(activeAnimal);
    }
  }, [animalData, cardNum, setInfo]);

  return (
    <div>
      {animalData.length ? (
        <>
          <div className="newCardTitle"> New Cards:</div>
          <ul className="newDeck">
            {animalData.map((animal, index) => {
              const handleClick = () => {
                setCardNum(index);
              };
              return (
                <li className="newDeck__miniCard" key={index}>
                  <CardMini handleClick={handleClick} animal={animal} />
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      <div>
        <button className="btn btn--newData" onClick={fetchData}>
          Get New Cards
        </button>
      </div>
    </div>
  );
}

export default Start;

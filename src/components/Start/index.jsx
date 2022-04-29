import { useState, useEffect } from "react";
import { getCardBg } from "../../util";
import "./style.scss";

function Start(props) {
  const { setInfo, setCardList } = props;
  const [animalData, getAnimalData] = useState([]);

  const fetchData = () => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6")
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
          <div> New Cards:</div>
          <ul className="newDeck">
            {animalData.map((animal, index) => {
              const handleClick = () => {
                setCardNum(index);
              };
              const bgStyle = getCardBg(animal.animal_type);
              return (
                <li key={index}>
                  <button
                    className={`btn bg-color btn--newCard`}
                    style={bgStyle}
                    onClick={handleClick}
                  >
                    <div className="smallCard-inner"></div>
                  </button>
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

import { useState, useEffect } from "react";
import CardMini from "../CardMini";
import Button from "../Button";
import styles from "./styles.module.scss";

function Shop(props) {
  const { setInfo, setCardList, info, darkMode } = props;
  const [animalData, getAnimalData] = useState([]);

  //get 5 random animal info
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

  // active mini card
  useEffect(() => {
    if (animalData && animalData[cardNum]) {
      let activeAnimal = animalData[cardNum];
      setInfo(activeAnimal);
    }
  }, [animalData, cardNum, setInfo]);

  //buttons for each of the 5 random animals fetched from the API
  return (
    <div>
      <ul className={styles.grid}>
        {animalData.length
          ? animalData.map((animal, index) => {
              const handleClick = () => {
                setCardNum(index);
              };
              let isActive = false;
              if (info) {
                isActive = animal.id === info.id;
              }
              return (
                <li className={styles.gridItem} key={index}>
                  <CardMini
                    handleClick={handleClick}
                    animal={animal}
                    active={isActive}
                  />
                </li>
              );
            })
          : [...Array(5)].map((e, i) => {
              return (
                <li className={styles.gridItem} key={i}>
                  <CardMini />
                </li>
              );
            })}
      </ul>

      <div className={styles.btnWrap}>
        <Button disabled label="View Packs" />
        <Button
          onClick={fetchData}
          label={animalData.length ? "Anotha One" : "New Pack"}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default Shop;

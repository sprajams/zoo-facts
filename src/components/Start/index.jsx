import { useState, useEffect } from "react";
import "./style.scss";

function Start(props) {
  const { setInfo } = props;
  const [animalData, getAnimalData] = useState([]);

  const fetchData = () => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5")
      .then((res) => res.json())
      .then((data) => {
        getAnimalData(data);
      });
  };
  // get and store 5 animals data into useState, animal data once
  useEffect(() => {
    fetchData();
  }, []);

  // const start = () => {
  //   toggleHidden();
  //   setCardNum(0);
  //   console.log("started");
  // };

  const [cardNum, setCardNum] = useState(NaN);

  // const nextScreen = () => {
  //   if (cardNum < 4) {
  //     setCardNum(cardNum + 1);
  //     console.log("next");
  //   }
  // };

  // const prevScreen = () => {
  //   if (cardNum > 0) {
  //     setCardNum(cardNum - 1);
  //     console.log("prev");
  //   }
  // };

  useEffect(() => {
    if (animalData && animalData[cardNum]) {
      let activeAnimal = animalData[cardNum];
      setInfo({
        name: activeAnimal.name,
        latinName: activeAnimal.latin_name,
        url: activeAnimal.image_link,
        active_time: activeAnimal.active_time,
        animal_type: activeAnimal.animal_type,
        weight_max: activeAnimal.weight_max,
        weight_min: activeAnimal.weight_min,
        diet: activeAnimal.diet,
        habitat: activeAnimal.habitat,
        geo_range: activeAnimal.geo_range,
        lifespan: activeAnimal.lifespan,
        id: activeAnimal.id,
      });
    }
  }, [animalData, cardNum, setInfo]);

  // const [active, setActive] = useState(false);
  // const toggleHidden = () => {
  //   setActive(!active);
  // };
  // useEffect(() => {
  //   if (cardNum === 4) {
  //     console.log("disableeee");
  //   }
  // });

  return (
    <div>
      {animalData.map((animal, index) => {
        const handleClick = () => {
          setCardNum(index);
        };
        return (
          <button onClick={handleClick}>
            {animal.name} {index}
          </button>
        );
      })}
      {/* {!active && (
        <div className={`btnContainer start`}>
          <button className="btn btn-random" onClick={start}>
            START
          </button>
        </div>
      )}
      <div className={`btnContainer btnAction ${active ? `` : "hidden"}`}>
        <button className="btn btn--active btn--right" onClick={prevScreen}>
          PREV
        </button>
        <button className="btn btn--active btn--next" onClick={nextScreen}>
          NEXT
        </button>
      </div> */}
    </div>
  );
}

export default Start;

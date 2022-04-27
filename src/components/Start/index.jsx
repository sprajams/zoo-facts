import { useState, useEffect } from "react";
import "./style.scss";

function Start(props) {
  const { setInfo } = props;
  const [animalData, getAnimalData] = useState([]);

  const fetchData = () => {
    // fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setInfo({
    //       name: data[cardNum].name,
    //       latinName: data[cardNum].latin_name,
    //       url: data[cardNum].image_link,
    //       active_time: data[cardNum].active_time,
    //       animal_type: data[cardNum].animal_type,
    //       weight_max: data[cardNum].weight_max,
    //       weight_min: data[cardNum].weight_min,
    //       diet: data[cardNum].diet,
    //       habitat: data[cardNum].habitat,
    //       geo_range: data[cardNum].geo_range,
    //       lifespan: data[cardNum].lifespan,
    //       id: data[cardNum].id,
    //     });
    //   });
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/5")
      .then((res) => res.json())
      .then((data) => {
        getAnimalData(data);
      });
    // console.log(data);
    // setInfo({
    // });
    // );
  };
  // get and store 5 animals data into useState, animal data once
  useEffect(() => {
    fetchData();
  }, []);

  const start = () => {
    toggleHidden();
    setCardNum(0);
    console.log("started");
  };

  const [cardNum, setCardNum] = useState(NaN);

  const nextScreen = () => {
    if (cardNum < 4) {
      setCardNum(cardNum + 1);
      console.log("next");
    }
  };

  const prevScreen = () => {
    if (cardNum > 0) {
      setCardNum(cardNum - 1);
      console.log("prev");
    }
  };
  console.log(cardNum);
  // const activeScreen = () => {
  //   console.log(cardNum, "active");
  //   if (animalData) {
  //     let activeAnimal = animalData[cardNum];
  //     setInfo({
  //       name: activeAnimal.name,
  //       latinName: activeAnimal.latin_name,
  //       url: activeAnimal.image_link,
  //       active_time: activeAnimal.active_time,
  //       animal_type: activeAnimal.animal_type,
  //       weight_max: activeAnimal.weight_max,
  //       weight_min: activeAnimal.weight_min,
  //       diet: activeAnimal.diet,
  //       habitat: activeAnimal.habitat,
  //       geo_range: activeAnimal.geo_range,
  //       lifespan: activeAnimal.lifespan,
  //       id: activeAnimal.id,
  //     });
  //   }
  // };

  useEffect(() => {
    console.log(cardNum, "active");
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

  const [active, setActive] = useState(false);
  const toggleHidden = () => {
    setActive(true);
  };
  // useEffect(() => {
  //   if (cardNum === 4) {
  //     console.log("disableeee");
  //   }
  // });
  return (
    <div>
      <div className={`btnContainer start ${active ? `hidden` : ""}`}>
        <button className="btn btn-random" onClick={start}>
          START
        </button>
      </div>

      <div className={`btnContainer btnAction ${active ? `` : "hidden"}`}>
        <button className="btn btn--active btn--right" onClick={prevScreen}>
          PREV
        </button>
        <button className="btn btn--active btn--next" onClick={nextScreen}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Start;

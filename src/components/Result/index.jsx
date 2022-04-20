import { useState } from "react";
import "./style.css";

function Result() {
  const [info, setInfo] = useState({
    name: null,
    latinName: null,
    url: null,
    active_time: null,
    animal_type: null,
    weight_max: null,
    weight_min: null,
    diet: null,
    habitat: null,
  });

  const getAnimal = () => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo({
          name: data.name,
          latinName: data.latin_name,
          url: data.image_link,
          active_time: data.active_time,
          animal_type: data.animal_type,
          weight_max: data.weight_max,
          weight_min: data.weight_min,
          diet: data.diet,
          habitat: data.habitat,
        });
      });
  };

  const {
    name,
    latinName,
    url,
    active_time,
    animal_type,
    weight_max,
    weight_min,
    diet,
    habitat,
  } = info;

  return (
    <div>
      <h1>ANIMALS</h1>

      <button onClick={getAnimal} className="btn btn-random">
        Random Animal
      </button>

      <section className="outer nocturnal">
        <div className="nameContainer">
          <h3>Latin Name: {latinName}</h3>
          <h3>{name}</h3>
        </div>
        <div className="animalContainer">
          <img src={url} alt="animal" className="animalImg"></img>
        </div>

        <div className="physicalInfo">
          <h4>
            {active_time} {animal_type}.
          </h4>
          <h4>
            Weight: {weight_min} - {weight_max} lbs
          </h4>
        </div>

        <h4>Diet: {diet}</h4>
        <h4>Habitat: {habitat}</h4>
      </section>
    </div>
  );
}

export default Result;

// https://zoo-animal-api.herokuapp.com
//Animal lengths are in feet (ft.)
// Animal weights are in pounds (lbs.)
// Animal lifespan is in years

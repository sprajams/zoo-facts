import { useState } from "react";
import "./style.scss";

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
    geo_range: null,
    lifespan: null,
    id: 0,
  });
  const [bgColor, setBgColor] = useState(null);

  const getAnimal = () => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((res) => res.json())
      .then((data) => {
        setBgColor(() => {
          let newBgColor;
          switch (data.animal_type) {
            case "Bird":
              newBgColor = "bg--bird";
              break;
            case "Mammal":
              newBgColor = "bg--mammal";
              break;
            case "Reptile":
              newBgColor = "bg--reptile";
              break;
            case "Fish":
              newBgColor = "bg--fish";
              break;
            case "Amphibian":
              newBgColor = "bg--amphibian";
              break;
            default:
              newBgColor = "bg--default";
          }
          return newBgColor;
        });

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
          geo_range: data.geo_range,
          lifespan: data.lifespan,
          id: data.id,
        });
      });

    // fetch("https://zoo-animal-api.herokuapp.com/animals/rand/3")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let allAnimals = data;

    //     console.log(allAnimals[0]);
    //   });
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
    geo_range,
    lifespan,
    id,
  } = info;

  return (
    <div>
      <h1 className="title">Zoo-nimals Facts</h1>

      <button onClick={getAnimal} className="btn btn-random">
        Random Animal
      </button>

      <section className={`outer nocturnal ${bgColor}`}>
        <div className="nameContainer">
          <h3 className="name">{name}</h3>
          <h3 className="latinName">{latinName}</h3>
        </div>
        <div className="animalContainer">
          <img src={url} alt="animal" className="animalImg"></img>
        </div>

        <div className="physicalInfo">
          <h4>
            {active_time} {animal_type}.
          </h4>
          <h4>
            Weight: {weight_min} - {weight_max} lbs.
          </h4>
        </div>

        <div className="mainInfo">
          <h4>Diet: {diet}</h4>
          <h4>Habitat: {habitat}</h4>
          <h4>Geo-Range: {geo_range}</h4>
          <h4>Lifespan: {lifespan} years</h4>
        </div>

        <span className="cardNum">{id} / 200</span>
      </section>
    </div>
  );
}

export default Result;

// https://zoo-animal-api.herokuapp.com
//Animal lengths are in feet (ft.)
// Animal weights are in pounds (lbs.)
// Animal lifespan is in years

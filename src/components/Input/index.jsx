// import { useState } from "react";

function Input(props) {
  const { setInfo } = props;
  const getAnimal = () => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then((res) => res.json())
      .then((data) => {
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
  };
  return (
    <div>
      <h1 className="title">Zoo-nimals Facts</h1>
      <button className="btn btn-random" onClick={getAnimal}>
        Random Animal
      </button>
    </div>
  );
}

export default Input;

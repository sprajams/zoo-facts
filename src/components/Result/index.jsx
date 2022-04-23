import { useState, useEffect } from "react";
import "./style.scss";

function Result(props) {
  const { info } = props;
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
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    setBgColor(() => {
      let newBgColor;
      switch (animal_type) {
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
  }, [animal_type, setBgColor]);

  return (
    <div>
      <section className={`outer ${bgColor}`}>
        <div className="front ">
          <div className="nameContainer">
            <div className="nameYear">
              <div className="logo">Z</div>
              <h3 className="name">{name}</h3>
              <h3 className="yearNum">
                {lifespan}
                <span className="year">YR</span>
              </h3>
            </div>

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
            <h4>
              Diet: <span className="info_element">{diet}</span>
            </h4>
            <h4>
              Habitat: <span className="info_element">{habitat}</span>
            </h4>
            <h4>
              Geo-Range: <span className="info_element">{geo_range}</span>
            </h4>
            <h4>
              Lifespan: <span className="info_element">{lifespan}</span> years
            </h4>
          </div>

          <span className="cardNum">{id} / 200</span>
        </div>
      </section>
    </div>
  );
}
export default Result;

// https://zoo-animal-api.herokuapp.com
//Animal lengths are in feet (ft.)
// Animal weights are in pounds (lbs.)
// Animal lifespan is in years

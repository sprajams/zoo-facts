export function getCardBg(animal_type) {
  let bgStyle;
  switch (animal_type) {
    case "Bird":
      bgStyle = {
        background: `rgb(254 249 110)`,
      };
      break;
    case "Mammal":
      bgStyle = {
        background: `rgb(217 184 183)`,
      };
      break;
    case "Reptile":
      bgStyle = {
        background: `rgb(161 160 160)`,
      };
      break;
    case "Fish":
      bgStyle = {
        background: `rgb(168 193 221)`,
      };
      break;
    case "Amphibian":
      bgStyle = {
        background: `rgb(127 174 146)`,
      };
      break;
    default:
      bgStyle = {
        background: `rgb(171 119 119)`,
      };
  }
  return bgStyle;
}

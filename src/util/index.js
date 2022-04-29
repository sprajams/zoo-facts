export function getCardBg(animal_type) {
  let bgStyle;
  switch (animal_type) {
    case "Bird":
      bgStyle = {
        backgroundImage: `radial-gradient(
        circle,
        rgba(255, 253, 229, 1) 0%,
        rgb(240, 239, 219) 45%,
        rgb(234, 231, 183) 70%,
        rgb(249, 251, 107) 100%
      )`,
      };
      break;
    case "Mammal":
      bgStyle = {
        backgroundImage: `radial-gradient(
        circle,
        rgba(186, 162, 162, 1) 0%,
        rgb(217, 191, 191) 50%,
        rgb(198, 179, 179) 75%,
        rgb(140, 109, 109) 100%
      )`,
      };
      break;
    case "Reptile":
      bgStyle = {
        backgroundImage: `radial-gradient(
        circle,
        rgb(187, 185, 185) 0%,
        rgb(131, 129, 129) 50%,
        rgb(163, 162, 162) 75%,
        rgb(107, 107, 107) 100%
      )`,
      };
      break;
    case "Fish":
      bgStyle = {
        backgroundImage: `radial-gradient(
        circle,
        rgb(210, 228, 244) 0%,
        rgb(201, 215, 230) 50%,
        rgb(167, 192, 220) 75%,
        rgb(99, 179, 249) 100%
      )`,
      };
      break;
    case "Amphibian":
      bgStyle = {
        backgroundImage: `radial-gradient(
        circle,
        rgba(39, 154, 85, 1) 0%,
        rgba(89, 155, 115, 1) 15%,
        rgba(136, 180, 154, 1) 50%,
        rgba(20, 99, 51, 1) 100%
      )`,
      };
      break;
    default:
      bgStyle = {
        backgroundImage: `radial-gradient(
        circle,
        rgb(187, 143, 143) 0%,
        rgb(223, 184, 184) 50%,
        rgb(187, 135, 135) 75%,
        rgb(147, 94, 94) 100%
      )`,
      };
  }
  return bgStyle;
}

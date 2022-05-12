import "./App.css";
import "./components/Card";
import { useState } from "react";
import Card from "./components/Card";
import Cover from "./components/Cover";
import AccordionGroup from "./components/AccordionGroup";

function App() {
  const [info, setInfo] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "activeDisplay--dark appOuter " : "appOuter"}>
      <div className="activeDisplay">
        <section className="cardMain">
          {info ? <Card info={info} /> : <Cover />}
        </section>
        <section className="collectionContainer">
          <AccordionGroup
            cardList={cardList}
            setInfo={setInfo}
            info={info}
            setCardList={setCardList}
            darkMode={darkMode}
            handleClick={handleClick}
          />
        </section>
      </div>
    </div>
  );
}

export default App;

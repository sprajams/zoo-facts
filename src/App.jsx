import "./App.css";
import "./components/Card";
import { useState } from "react";
import Card from "./components/Card";
import Cover from "./components/Cover";
import AccordionGroup from "./components/AccordionGroup";

function App() {
  const [info, setInfo] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="appOuter">
      <div
        className={
          isDarkMode ? "activeDisplay--dark activeDisplay " : "activeDisplay"
        }
      >
        <section className="cardMain">
          <h1 className="title">Zoonimals</h1>
          {info ? <Card info={info} /> : <Cover />}
        </section>
        <section className="collectionContainer">
          <AccordionGroup
            cardList={cardList}
            setInfo={setInfo}
            setCardList={setCardList}
            isDarkMode={isDarkMode}
            handleClick={handleClick}
          />
        </section>
      </div>
    </div>
  );
}

export default App;

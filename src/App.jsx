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
  const darkStyle = {
    color: "white",
    background: "black",
  };

  return (
    <div className="activeDisplay" style={isDarkMode ? darkStyle : null}>
      <section className="cardMain">
        <h1 className="title">Zoonimals</h1>
        {info ? <Card info={info} /> : <Cover />}
      </section>

      <section className="collectionContainer">
        <AccordionGroup
          cardList={cardList}
          setInfo={setInfo}
          setCardList={setCardList}
          handleClick={handleClick}
        />
      </section>
    </div>
  );
}

export default App;

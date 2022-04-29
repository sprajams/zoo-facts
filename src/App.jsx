import "./App.css";
import "./components/Card";
import { useState } from "react";
import Start from "./components/Start";
import Card from "./components/Card";
import Cover from "./components/Cover";

function App() {
  const [info, setInfo] = useState(null);
  const [cardList, setCardList] = useState([]);
  console.log(cardList);
  return (
    <div>
      <h1 className="title">Zoo-nimals Facts</h1>
      <main className="activeDisplay">
        <div>{info ? <Card info={info} /> : <Cover />}</div>
        <section className="buttonContainer">
          <Start setInfo={setInfo} setCardList={setCardList} />
          <ul className="collectionList">
            {cardList.map((card, index) => {
              const handleClick = () => {
                setInfo(card);
              };
              return (
                <li key={index}>
                  {card ? (
                    <button onClick={handleClick}>{card.name}</button>
                  ) : (
                    "???"
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import "./components/Card";
import { useState } from "react";
import Start from "./components/Start";
import Card from "./components/Card";
import Cover from "./components/Cover";
import CardMini from "./components/CardMini";

function App() {
  const [info, setInfo] = useState(null);
  const [cardList, setCardList] = useState([]);
  console.log(cardList);
  return (
    <div>
      <h1 className="title">Zoo-nimals Facts</h1>

      <main className="activeDisplay">
        <div className="cardMain">
          {info ? <Card info={info} /> : <Cover />}
        </div>

        <section className="buttonContainer">
          <div className="newPack">
            <Start setInfo={setInfo} setCardList={setCardList} />
          </div>
          <div className="collectionTitle">Card Collection:</div>
          <ul className="collectionList">
            {cardList.map((card, index) => {
              const handleClick = () => {
                setInfo(card);
              };
              return (
                <li key={index}>
                  {card ? (
                    // <button onClick={handleClick}>{card.name}</button>
                    <CardMini handleClick={handleClick} animal={card} />
                  ) : (
                    <div className="cardMini__unknown">???</div>
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

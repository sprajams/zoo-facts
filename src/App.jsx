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
  const [accordianActive, setAccordianActive] = useState(false);
  console.log(cardList);
  return (
    <div>
      <h1 className="title">Zoo-nimals Facts</h1>

      <main className="activeDisplay">
        <section className="cardMain">
          {info ? <Card info={info} /> : <Cover />}
        </section>

        {/* <section className="buttonContainer"> */}
        <div>
          <section className="newPack">
            <Start setInfo={setInfo} setCardList={setCardList} />
          </section>

          <section className="collectionContainer">
            <button
              className="collectionAccordian"
              onClick={() => setAccordianActive(!accordianActive)}
            >
              My Card Collection:
            </button>
            {accordianActive ? (
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
            ) : null}
          </section>
        </div>
        {/* </section> */}
      </main>
    </div>
  );
}

export default App;

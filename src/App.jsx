import "./App.css";
import "./components/Card";
import { useState } from "react";
import Card from "./components/Card";
import Cover from "./components/Cover";

import AccordionGroup from "./components/AccordionGroup";

function App() {
  const [info, setInfo] = useState(null);
  const [cardList, setCardList] = useState([]);

  return (
    <div className="outterMain">
      <h1 className="title">Zoo-nimals Facts</h1>

      <main className="activeDisplay">
        <section className="cardMain">
          {info ? <Card info={info} /> : <Cover />}
        </section>

        <div className="newCard__Collection">
          <section className="collectionContainer">
            <AccordionGroup
              cardList={cardList}
              setInfo={setInfo}
              setCardList={setCardList}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import "./components/Card";
import { useState } from "react";
import Start from "./components/Start";
import Card from "./components/Card";
import Cover from "./components/Cover";

function App() {
  const [info, setInfo] = useState(null);
  const [cardList, setCardList] = useState([]);
  return (
    <div>
      <h1 className="title">Zoo-nimals Facts</h1>
      {info ? <Card info={info} /> : <Cover />}
      <Start setInfo={setInfo} setCardList={setCardList} />
      <ul>
        {cardList.map((card, index) => {
          return <li key={index}>{card ? card.name : "???"}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

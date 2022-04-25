import "./App.css";
import "./components/Card";
import { useState } from "react";
import Start from "./components/Start";
import Card from "./components/Card";
import Cover from "./components/Cover";

function App() {
  const [info, setInfo] = useState(null);
  return (
    <div>
      <h1 className="title">Zoo-nimals Facts</h1>
      {info ? <Card info={info} /> : <Cover />}
      <Start setInfo={setInfo} />
    </div>
  );
}

export default App;

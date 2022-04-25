import "./App.css";
import "./components/Card";
import { useState } from "react";
import Input from "./components/Input";
import Card from "./components/Card";
import Cover from "./components/Cover";

function App() {
  const [info, setInfo] = useState(null);
  return (
    <div>
      <Input setInfo={setInfo} />
      {info ? <Card info={info} /> : <Cover />}
    </div>
  );
}

export default App;

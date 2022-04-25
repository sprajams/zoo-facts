import "./App.css";
import "./components/Result";
import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import Cover from "./components/Cover";

function App() {
  const [info, setInfo] = useState(null);
  return (
    <div>
      <Input setInfo={setInfo} />
      {info ? <Result info={info} /> : <Cover />}
    </div>
  );
}

export default App;

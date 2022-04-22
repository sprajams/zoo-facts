import "./App.css";
import "./components/Result";
import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [info, setInfo] = useState(null);
  return (
    <div>
      <Input setInfo={setInfo} />
      {info ? <Result info={info} /> : null}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import { useState } from "react";

function App() {
  let userName = "Akshatha";

  let [data, setData] = useState("Nayana");

  return (
    <div className="App">
      <h1>{data}</h1>
      <ComponentA userName={userName} data={data} setData={setData} />
    </div>
  );
}

export default App;
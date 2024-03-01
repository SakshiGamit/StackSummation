import React from "react";
import JsonDataDisplay from "./table";
import "./index.css";
import Card from "./Card";
import Netdata from "./Netdata";

let count = 1;
function IncNum() {
  count++;
}

function App() {
  return (
    <div className="App">
      <h1 className="net">Netflix Series</h1>
      <JsonDataDisplay />
      <div className="cards">
        {Netdata.map((info) => {
          return (
            <Card
              key={info.id}
              imgsrc={info.imgsrc}
              alt={info.alt}
              title={info.title}
              sname={info.sname}
              link={info.link}
            />
          );
        })}
      </div>
        <div className="btnInc">
        <h1 className="count">{count}</h1>
        <button className="btn" onClick={IncNum}>Click Me</button>
        </div>
    </div>
  );
}
export default App;
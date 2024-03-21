import React from "react";
import JsonDataDisplay from "./table";
import "./index.css";
import Card from "./Card";
import Netdata from "./Netdata";   
import Hooks from "./Hooks"

function App() {
  //usestate hook
  
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
      <Hooks />
    </div>
  );
}
export default App;
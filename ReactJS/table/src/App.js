import JsonDataDisplay from "./table";
import "./index.css";
import Card from "./Card";
import Netdata from "./Netdata";

// function cardinfo(info) {
//   return(
//   <Card
//   imgsrc={info.imgsrc}
//   alt={info.alt}
//   title={info.title}
//   sname={info.sname}
//   link={info.link}
// />);
// }

function App() {
  return (
    <div className="App">
      <h1 className="net">Netflix Series</h1>
      <JsonDataDisplay />
      <div className="cards">
        {Netdata.map((info) => {
          return (
            <Card
              imgsrc={info.imgsrc}
              alt={info.alt}
              title={info.title}
              sname={info.sname}
              link={info.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
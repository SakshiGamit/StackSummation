import JsonDataDisplay from "./table";
import "./index.css";
import Card from "./Card";
import Netdata from "./Netdata";
  

function App() {
  return (
    <div className="App">
      <h1 className="net">Netflix Series</h1>
      <JsonDataDisplay />
      <div className="cards">
        <Card
          imgsrc={Netdata[0].imgsrc}
          alt={Netdata[0].alt}
          title={Netdata[0].title}
          sname={Netdata[0].sname}
          link={Netdata[0].link}
        />
        <Card
          imgsrc={Netdata[1].imgsrc}
          alt={Netdata[1].alt}
          title={Netdata[1].title}
          sname={Netdata[1].sname}
          link={Netdata[1].link}
        />
        <Card
          imgsrc={Netdata[2].imgsrc}
          alt={Netdata[2].alt}
          title={Netdata[2].title}
          sname={Netdata[2].sname}
          link={Netdata[2].link}
        />
      </div>
    </div>
  );
}

export default App;

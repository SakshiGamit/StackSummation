import JsonDataDisplay from "./table";
import "./App.css";

const head = {
  color : 'red',
  textAlign : 'center'
};

function App() {
    return (
        <div className="App">
            <h1 style={head}>Netflix Series</h1>
            <JsonDataDisplay />
        </div>
    );
}
 
export default App;
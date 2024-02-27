import JsonDataDisplay from "./table";
import "./App.css";

const head = {
  color : 'red',
  textAlign : 'center'
};

function App() {
    return (
        <div className="App">
            <h2 style={head}>Netflix Series</h2>
            <JsonDataDisplay />
        </div>
    );
}
 
export default App;
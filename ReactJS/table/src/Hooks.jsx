import React, { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0); //used array destructuring
  
  function IncNum() {
    setCount(count + 1);
  }

  let time = new Date().toLocaleTimeString();

  const[cTime, setCtime] = useState(time);

  const currTime = () =>{
    let newCtime = new Date().toLocaleTimeString();
    setCtime(newCtime);
  }
 
  //digital Clock
  const[dTime, setDtime] = useState(time);

  const currDtime = () =>{
    let newDtime = new Date().toLocaleTimeString();
    setDtime(newDtime);
  }
  setInterval(currDtime,1000);

  return (
    <div className="btnInc">
      <h1 className="count">{count}</h1>
      <button className="btn" onClick={IncNum}>
        Click Me
      </button>

      <h2>{cTime}</h2>
      <button className="btn" onClick={currTime}>Get Time</button>

      <h1>{dTime}</h1>
    </div>
  );
}
export default Hooks ;

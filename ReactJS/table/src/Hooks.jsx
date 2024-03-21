import React, { useEffect, useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0); //used array destructuring

  //useEffect hook
  useEffect(() => {
    // alert("Clicked me!");
    document.title = `clicked me ${count} times`;
  }, [count]);

  // function IncNum() {
  //   setCount(count + 1);
  // }

  let time = new Date().toLocaleTimeString();

  const [cTime, setCtime] = useState(time);

  const currTime = () => {
    let newCtime = new Date().toLocaleTimeString();
    setCtime(newCtime);
  };

  //digital Clock
  const [dTime, setDtime] = useState(time);

  const currDtime = () => {
    let newDtime = new Date().toLocaleTimeString();
    setDtime(newDtime);
  };
  setInterval(currDtime, 1000);

  //Pokemon value state
  const [pokNum, setPokNum] = useState();

  return (
    <div className="btnInc d-flex flex-column align-items-center">
      <h1 className="count">{count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>

      <h2>{cTime}</h2>
      <button className="btn" onClick={currTime}>
        Get Time
      </button>

      <h1>{dTime}</h1>

      {/* use of axious */}
      <br />
      <h1>Pokemon</h1>
      <p>You choose {pokNum}</p>
      <select
        className=" w-auto form-select mb-3"
        value={pokNum}
        onChange={(event) => {
          setPokNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="25">25</option>
      </select>
    </div>
  );
}  
export default Hooks;

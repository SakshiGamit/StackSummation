import React, { useState } from "react";

const IncDec = () => {
    const[count, setCount]=useState(0);
    const incNum =()=>{
        setCount(count + 1);
    }
    const decNum = ()=>{
       if(count>0){
        setCount(count - 1);
       }else{
        alert("The limit reahed to 0.");
       }
    }
  return (
    <div className="incDec d-flex flex-column align-items-center">
      <h1>{count}</h1>
      <div className="d-flex gap-4 mb-3 ">
        <button className="btn btn-primary" onClick={incNum}>+</button>
        <button className="btn btn-primary" onClick={decNum}>-</button>
      </div>
    </div>
  );
};
export default IncDec;

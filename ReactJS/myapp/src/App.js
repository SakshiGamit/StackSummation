import React from "react";
import Head from "./component/Head";
import Greet, { today, time } from "./component/Greet";
import List from "./component/List";
import { add, sub, mul, div } from "./component/Calc1";
import Form from "./component/Form";
import "./index.css";
import IncDec from "./component/IncDec";
import "./App.css";

function App() {
  return (
    <>
    <Greet />
    <Head />
    <List />
    <p>Practicing import & export :<br />
    Today the date is {today}.<br />
    Time : {time}</p>
    
    <ul>
      <li>The sum of two numbers is {add(40,4)}</li>
      <li>The sunstraction of two numbers is {sub(40,4)}</li>
      <li>The division of two numbers is {div(40,3)}</li>
      <li>The multiplication of two numbers is {mul(40,4)}</li>
    </ul>

    <Form />
    <IncDec />
    </>
  );
}

export default App;

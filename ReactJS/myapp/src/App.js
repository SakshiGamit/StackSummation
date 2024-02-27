import React from 'react';
import Head from './Head';
import Greet, {today, time} from './Greet';
import List from './List';
import {add, sub, mul, div} from './Calc1';
import './App.css';

function App() {
  return ( <>
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
    </>
  );
}

export default App;

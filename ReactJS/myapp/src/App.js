import React from 'react';
import Head from './Head';
import Greet, {today, time} from './Greet';
import List from './List';
import './App.css';

function App() {
  return ( <>
    <Greet />
    <Head />
    <List />
    <p>Practicing import & export :<br />
    Today the date is {today}.<br />
    Time : {time}</p>
    </>
  );
}

export default App;

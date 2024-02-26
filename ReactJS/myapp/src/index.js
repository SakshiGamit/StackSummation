import React from "react";
import ReactDOM from "react-dom";
import Head from './Head';
import List from './List';

const today = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const Time = new Date().getHours();
let greeting = ''
const Greet ={
  color : 'green'
};
if(Time >=1 && Time<=12){
  greeting ='Good Morning';
  Greet.color = 'Yellow';
}else if(Time>=13 &&Time<=16){
  greeting='Good Afternoon';
  Greet.color = 'Orange';
}else if(Time>=17 &&Time<=22)
{
  greeting='Good Evening';
  Greet.color = 'Pink';
}else{
  greeting='Good Night';
  Greet.color = 'Blue';
}

ReactDOM.render(
  //[ use , while using array in render method to separate elements
    //<div>
    <>
    {/* <React.Fragment> */}
    <h1>Hello Sir, <span style={Greet}>{greeting}</span></h1>
    <p>Today the date is {today}</p>
    <p>The time is {time}</p>

    <Head></Head>
    <h3>Ways to add multiple elements in render method.</h3>
   
    <List></List>
    {/* </div> */}
    {/* </React.Fragment> */}
    </> 
  //]
  , document.getElementById("root")
);

//example1
// ReactDOM.render( 
//   <>
//     <h1>React JS Practice</h1> 
//     <p>List of Heros :</p>
//     <ol>
//       <li>Ruth</li>
//       <li>Moses</li>
//       <li>David</li>
//       <li>Shamuel</li>
//       <li>Ester</li>
//     </ol>
//   </> , document.getElementById("root")
// );
  




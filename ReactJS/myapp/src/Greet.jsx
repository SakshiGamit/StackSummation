import React from 'react';

function Greet(){
const today = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const Time = new Date().getHours();
let greeting = '';
const greet = {
    color : 'green'
};

if(Time >=1 && Time<=12){
    greeting ='Good Morning';
    greet.color = 'Yellow';
  }else if(Time>=13 &&Time<=16){
    greeting='Good Afternoon';
    greet.color = 'Orange';
  }else if(Time>=17 &&Time<=22)
  {
    greeting='Good Evening';  
    greet.color = 'Pink';
  }else{
    greeting='Good Night';
    greet.color = 'Blue';
  }          

return( <>
<h1>Hello Sir, <span style={greet}>{greeting}</span></h1>
<p>Today the date is {today}</p>
<p>The time is {time}</p>
</>
); 
}
export default Greet;


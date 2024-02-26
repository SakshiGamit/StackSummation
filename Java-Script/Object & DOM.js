//object 
const product = {
    name : "Parker ballpen",
    rating : 4,
    isDeal : true,
    price : 270,
    offer : 5
};
console.log(product); // acsessing whole object
console.log(product.name);//acsessing properties using ".key"
console.log(product["rating"]);//acsessing properties using ["key"]

//updating values
product["name"] ="Ballpen";
console.log(product.name); //Ballpen

//finding all the properties of an object
for(let key in product){
    console.log(key + " : " + product[key]);
}
//name : Ballpen
// rating : 4
// isDeal : true
// price : 270
// offer : 5

//object.leys() method - rerurns array of all the keys of object
for(let key of Object.keys(product)){
    console.log(key);
}
//name 
//rating 
//isDeal 
//price 
//offer

//Object.values - returns array of all the values of the object
for(let val of Object.values(product)){
    console.log(val);
}
//Ballpen
//4
//true
//270
//5

//Object.entries 
for(let [key, val] of Object.entries(product))
{
    console.log(`${key} : ${val}`);
}
//name : Ballpen
// rating : 4
// isDeal : true
// price : 270
// offer : 5

delete product.offer;
console.log(product); //removing properties

console.log(JSON.stringify(product));//{"name":"Ballpen","rating":4,"isDeal":true,"price":270} - takes JavaScript object and returning a string of JSON data

let today = new Date();
console.log(today);
console.log(typeof today);//object
console.log(today.getDay());// day of the week 0-sunday to 6-saturday
console.log(today.getDate());//day of the month
console.log(today.getMonth());//finds month from date 0-Jan to 11-Dec
console.log(today.getFullYear());//returns year from 

//example 1
const profile ={
    userName : "@shradhakhapra",
    isFollow : true,
    posts: 195,
    followers :569000,
    following : 4,
    name : "Shradha Khapra",
    isThread : true
};

console.log(profile);
console.log(typeof profile);//object
console.log(profile.userName);//@shradhakhapra
console.log(typeof profile["userName"]);
console.log(profile["posts"]);//195
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//DOM
console.dir(document);
console.dir(document.body);
console.dir(document.body.childNodes[5]);

//accessing elements
let button = document.getElementById("btn");
console.dir(button);// by id

let heading2 = document.getElementsByClassName("heading2");
console.dir(heading2); //by class

let para = document.getElementsByTagName("h1");
console.dir(para); //by tag name

let firstEl = document.querySelector("p");
console.dir(firstEl); //by query selector

let allEl = document.querySelectorAll("p");
console.dir(allEl);// returns nodelist 

let queryClass = document.querySelector(".heading2");
console.dir(queryClass);

let queryId = document.querySelector("#btn");
console.dir(queryId);

//example
 let div = document.querySelector("div");
 console.dir(div);

 console.dir(div.innerText);
 console.dir(div.innerHTML);

 //Practice
 // append the h2 heading text into Stack summation
 let h2 = document.querySelector("h2");
 console.dir(h2.innerText);

h2.innerText = h2.innerText + " Stack Summation";//appending new value
console.dir(h2.innerText);

//give unique value to class "box" 
let divs = document.querySelectorAll(".box");
//simple way
// divs[0].innerText  = "Unique val 1";
// divs[1].innerText  = "Unique val 2";
// divs[2].innerText  = "Unique val 3";

let i = 1
for(div of divs){
    div.innerText = `Unique Val ${i}`;
    i++;
}//using for-of loop

//Attrinutes
let div4 = document.querySelector(".boxy");
console.log(div4);//accessing element using class 

let Class = div4.getAttribute("class");
console.log(Class);

let Name = div4.getAttribute("name");
console.log(Name);

console.log(div4.setAttribute("class", "newBOX"));//changing the attribugte using setAttribute()

//style property in js
div4.style.backgroundColor = "purple";//

div4.style.fontSize = "25px";

div4.innerText = "Hello!";

//inserting elements
 let newBtn = document.createElement("button");//creating element
 console.log(newBtn);
 newBtn.innerText = "Click me!";

div4.before(newBtn);//adds before div4-outside
div4.after(newBtn);//adds just after the div4 tags
div4.prepend(newBtn);//placing it in div4 tag and in starting
div4.append(newBtn);//placing it in div4 tag and in the last

//example2 for adding element
let newheading = document.createElement("h1");//creating element
newheading.innerHTML = "<i>Stack Summation!</i>";
newheading.style.color = "purple";

document.querySelector("body").prepend(newheading);//adding element

//example
let hello = document.createElement("button");//creating element
hello.innerText = "Hello!";
hello.style.backgroundColor = "red";
hello.style.color = "white";
document.querySelector("body").append(hello);//adding element on html page

//deleting element
let Para = document.querySelector(".delete");
Para.remove();

//example

let Content = document.querySelector(".content");
//Content.setAttribute("class","newContent"); //it will overwrite the old class name instead of appending
Content.classList.add("newContent");



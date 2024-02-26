let str = "Stack Summation"; // Js strings are immutable
let Str = '   Stack Summation    ';

console.log(str.length);
console.log(str[6]);//S
console.log("This is 'Ms.Rachel' from US.")

//template literals
let templateliteral = `This is the Special string.`;
console.log(typeof templateliteral);//string

let bottle = {
    price: 10 ,
    color: "Pink",
};
console.log("The cost of the bottle is",bottle.price, "rupees and color is", bottle.color);//using traditional way

console.log(`The cost of the bottle is ${bottle.price} and color is ${bottle.color}`);//using template literals

console.log(`This is done using template literal ${3+6+2}`);//11

//escape characters
let escapeN = "Stack\nSummation";
console.log(escapeN);
console.log(escapeN.length)//expected lenght =16 actual=15 \n considered as 1  
console.log("This is \"Rachel\" from US.");//to print \"- double quote in output
console.log('This is \'Rachel\' from US.')// to print \' - single quote in o/p

//string methods-built-in functions
 
console.log(str.toUpperCase());//STACK SUMMATION - converted to uppercase - it does not change orignal string
console.log(str.toLowerCase());

console.log(Str.trim());//trim() method removes extra spaces from string from starting and ending only

console.log(str.slice(6,9));//Sum - ending index in not inclusive
console.log(str.slice(6));//Summation

let str1 = "is in Ahmedabad.";
console.log(str.concat(str1));//"Stack Summation is in Ahmedabad" joins two strings


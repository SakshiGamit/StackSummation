// function --> 2 num sum
function sum(x, y) {
  console.log(x + y);
}
sum(3545, 545); //4090

let arrowSum = (a, b) => {
  return a + b;
};

//Practice

//example1 - find vowels from string
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  console.log(count);
}
//ex.2 perform same task by arrow function
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  console.log(count);
};

//reverse a number
function reverse(num) {
  let reverse = 0;
  let remainder;

  while(num>0){
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num=Math.floor(num/10);
  }
  console.log(reverse);
}

//function expression example
let square = function(l){
  return l*l;
}
console.log(square(5));// 0/p : 25

//factorial function
function factorial(n){
  if(n===0 || n===1){
    return 1;
  }else{
    return n*factorial(n-1);
  }
}
console.log(factorial(5));//o/p : 120

//celsius to fahrenhit

function celToferen(cel){
  return (cel * 9/5)+32;
}
console.log(celToferen(40));//104

//string palidrom 
function palidrom(str){
  for(i=0; i<str.length; i++){
    if(str.charAt(i)!=str.charAt(str.length-i-1)){
      return false;
    }
  }
  return true;
}

console.log(palidrom("banana"));//false
console.log(palidrom("madam"));//true

//caculate simple inerest based on principle 

function simpleInt(p, rate, time){
  i = (p*rate*time)/100;
  finalAmt = p+i;
  console.log("simple interest :", i);
  console.log("Final amount : ", finalAmt);
}

// find count of letter in string
function countLetter(str, l){
  let count = 0;
  str = str.toLowerCase();
  for(let i = 0;i<str.length; i++){
    if(str.charAt(i)==l){
      count++;
    }
  }
  return count;
}
//age calculater

function calculateAge(birthYr){
  let currentDate = new Date();
  let currentYr = currentDate.getFullYear();

  let age = currentYr - birthYr;
  console.log("You are either " + age + " or " + (age-1));
}

console.log(calculateAge(2003));//You are either 21 or 20


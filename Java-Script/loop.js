// for loop 

let sum=0;
let n=100
for( let i=0; i<=n; i++){
    sum=sum+i;
}
console.log( "sum = ", sum); // 325

//ex2
for (let bottles=10; bottles>0; bottles--){
    console.log(`There are ${bottles} bottles ,hanging on the wall.`);
}

//ex3 - print all even numbers grom 0 to 100
for(let i=0; i<=100; i++){
    if(i%2===0){
    console.log("num =", i);
    }
}

//while loop

let bottles=5;
while(bottles>0){
    console.log(`There are ${bottles} bottles ,which are hanging on the wall.`);
    bottles--;
}

//ex2 - Create a game where you start with any random number. ask user to keep guessing the game number until the user enters correct value.

let gameNum =3;
let userNum = prompt("Guess the Game number : ");

while(userNum!=gameNum){
   userNum = prompt("You enetred wrong number, Guess the right Game number : ");
}
console.log(" Conratulations, you enetred rignt number.");


//do...while loop
let bottle=3;
do{
    console.log(`There are ${bottle} bottles ,hanging on the wall.`);
    bottle--;
}while(bottle>0);

//for-of LOOP
let str = "StackSummation";

let size=0;
 for(let val of str){
    console.log("val = ",val);
    size++;
 }
 console.log("String size = ",size);

 //for-in loop => returns the keys of object
 const student = {
    name : "Jeti",
    age : 22,
    CGPA : 8.0,
    isPass : true
 };
 for(let key in student){
    console.log(" key = ", key, "Value = ", student[key]);
 }

//ternary operators 
let age = 19;
age>=18 ? console.log("adult") : console.log("not adult");

//conditionals statments

// excercise using prompt
// let num = prompt(" Enter a number : ");
let num =55;
if((num%5)===0){
    console.log(num, " is multiple of 5");
}
else{
    console.log(num, " is not a multiple of 5");
}


//let score = prompt(" Enter your score");
let score = 75;
let Grade;
if(score<=100 && score>=90){
    Grade= "A";
}
else if(score<=89 && score>=70){
    Grade= "B";
}
else if(score<=69 && score>=60){
    Grade= "C";
}
else if(score<=59 && score>=50){
    Grade= "D";
}
else if(score<=49 && score>=0){
    Grade= "F";
}
else{
    console.log("enter valid number.");
}
console.log("According to your score your grade is : ", Grade) 



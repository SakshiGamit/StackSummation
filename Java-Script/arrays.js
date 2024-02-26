let  heroes=["Peter", "Andrew", "Philip", "Mary", "Eden","Matthew" ];
let marks = [33, 54, 43, 50, 23];
let stud = ["jeti", 88, "NothEast"];

console.log(marks);
console.log(marks.length); // lenght property

console.log(heroes[3]);//array index accesing
let hero = heroes[heroes.length - 1];
console.log(hero); // accesing last element of array
console.log(stud); // accessing full array
heroes[1] = "John";// changing the value of array index
console.log(heroes[1]);

console.log("Looping of Array :")
for(let i=0; i< heroes.length; i++){
    console.log( heroes[i]);
}
//printing of array using for-of loop
console.log("printing of array using for-of loop.")
for(let val of heroes){
    console.log(val.toUpperCase());
}
/////////////////////////////////////////////////////////////////////////
//PRACTICE

//example1
let Marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let val of Marks){
    sum += val;
}
let avg = sum/Marks.length;
console.log(`The average marks of class = ${avg}`); 

//example2
let items =[250, 645, 300, 900,50];

console.log("Before applying offer the array :",items);
for(let i =0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log("After applying offer the array :",items);

//Array Methods
heroes.push("Paul"); //added to the end by push() method
console.log(heroes);

let deletedItem = heroes.pop();//deletes item from end and returns 
console.log(heroes);
console.log("Deleted item by pop() is ",deletedItem);

console.log(marks);
console.log(marks.toString()); // converted to string without changing orignal array

let newHeroes = ["Peter", "Andrew", "Philip", "Mary", "Eden","Matthew" ];
let oldHeroes = ["Moses", "David", "Ruth", "Elisa"];
let latestHeroes =["Paul", "Jeti", "Ayongla", "Sakshi"];

let allHerores = newHeroes.concat(oldHeroes, latestHeroes);
console.log(allHerores);// concat() method joins multiple array without changing original array
 
console.log(newHeroes.slice(3, 5)); // slice() method gives piece of an array : 'Mary', 'Eden
console.log(newHeroes.slice(2)); // 'Philip', 'Mary', 'Eden', 'Matthew'

console.log(oldHeroes.reverse()); // reverse() method tho reverse the array

console.log(oldHeroes.sort()); // 'David', 'Elisa', 'Moses', 'Ruth', sorting the array - property

console.log(oldHeroes.indexOf('Elisa')); // 1

console.log(latestHeroes.unshift("Peri"));
console.log(latestHeroes);//Adds new elements in starting of an array, and returns the new length, here 5-new length

////////////////////////////////////////////////////////////////////////
//Practice- example

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

companies.shift(); 
console.log(companies); //remove 1st company from array :'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

companies.splice(2,1, "Ola"); 
console.log(companies); //Remove uber and add ola : 'Microsoft', 'Uber', 'Ola', 'IBM', 'Netflix'

companies.push("Amazon");
console.log(companies); //add amazon at the end :'Microsoft', 'Uber', 'Ola', 'IBM', 'Netflix', 'Amazon'

/////////////////////////////////////////////////////////////////////

let marvel = ['Captain America', 'Ironman', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];

let Hero = console.log(marvel.at(1)); // at() method returns indexed element
let Hero1 = console.log(marvel.at(-1));// index -1 returns last element

let Const = console.log(marvel.constructor);// ƒ Array() { [native code] }

let Marvel = ['Captain America', 'Ironman', 'Thor','Hulk', 'Blackpanther'];
console.log(Marvel.copyWithin(3,1,2));//'Captain America', 'Ironman', 'Thor', 'Ironman', 'Blackpanther' - copies array element to another position within array and overwrites existing value and does not add item

let entry = marvel.entries(); //entries() returns array iterator object with key value pair
for(let val of entry){
    console.log(val);
} 
// [0, 'Captain America']
// [1, 'Ironman']
// [2, 'Thor']
// [3, 'Hulk']
// [4, 'Hawkeye']
// [5, 'Black Widow']

let ages = [32, 45, 23, 20];
function checkAge(age){
    return age > 18;
}
console.log(ages.every(checkAge));// every()  checks if every elemnt of array fulfills the conditions or not and returns true or false

age = [32, 45, 23,20];
console.log(age.fill("18",1,3));//[32, '18', '18', 20] fills the element in array with value

let adult = console.log(ages.filter(checkAdult));
function checkAdult(age){
    return age>= 18;
}// filter() creates new array containing elements that pass the condition

let Ages = [3, 17, 23, 20, 45];
console.log(Ages.find(checkAge));//23 returns the value of 1st element that pass a test
console.log(Ages.findIndex(checkAge));// findIndex() returns index of 1st element that pass the test
console.log(Ages.findLast(checkAge));// findLast() returns the last element that pass the test
console.log(Ages.findLastIndex(checkAge));// findLastIndex returns the index of last element that pass the test

let arr = [1, 5, 6, [3,4], 3, [8,9,10],2];
console.log(arr.flat()); //flat() used to join the sub-array elements

let Arr = [3,4,5,8,4,5]
console.log(Arr.flatMap((x) => x*2));// flatMap() creates a new array from calling a function for every array element

console.log(Arr.lastIndexOf(4));//returns the last index of given element(from iteration of number you can easily understand)

let array = Array.from("Stack Summ");
console.log(array); //from() creates array from object

console.log(Marvel.includes("Ironman"));// includes() checks if array contains specified value or not and returns true /false

console.log(Marvel.indexOf("Ironman"));//returns the index of given array element

console.log(Array.isArray("Stack Summation"));
console.log(Array.isArray(Marvel)); // isArray() checks if the object is array or not

let Join = console.log(Marvel.join(" and ")); // joins the elements of array into string

let iterator = Marvel.keys();
for(let val of iterator){
    console.log(val);
}//Returns a Array Iteration Object, containing the keys of the original array

let map1=Arr.map((x) =>x*2);
console.log(map1);//Creates a new array with the result of calling a function for each array element

console.log(Array.of("Sta", "ckS","umm", "ati","on"));//create array from number of arguments

function Reduce(total, num){
    return total-num;
}
console.log(Arr.reduce(Reduce));//Reduce the values of an array to a single value
console.log(Arr.reduceRight(Reduce));//Reduce the values of an array to a single value

console.log(Ages.some(checkAge));//Checks if any of the elements in an array pass a test and returns true/false

console.log(ages.valueOf());//returns array itself

console.log(ages.with(2,10));//updates a specified array element without changing original array
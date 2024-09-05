//CREATE AN ARRAY
// let marks = [97, 88, 72, 81, 47];
// console.log(marks);

//LOOPING OVER AN ARRAY
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
            for (let idx = 0; idx < heroes.length; idx++)(
                console.log(heroes[idx])
            )


let marks = [22, 33, 53, 48, 43, 35];

let sum = 0
for ( let val of marks){
    sum += val;
}
    let avg = sum / marks.length;
    console.log(`avg marks of the class= ${avg}`);


    //FUNCTION.....
function myFunction() {
    console.log("welcome to Apna College!");
    console.log("we are learning JS:");
}

myFunction();
myFunction();
myFunction();
myFunction();
myFunction();



function myFunction(msg){
    //parameter -> input
    console.log(msg);
}

myFunction("I Love JS"); //arguments

//functins to calculate the add of two numbers

function add(x, y){
    s = x+y;
    return s;
}
let val = (3, 4);
console.log(val);


//addition function
function addition(a, b){
    return a + b;
}
const plus = (a, b) => {
    console.log(a + b);
};

//multiplication function
function mul(a, b){
    return a*b;
}
const multi = (a, b) => {
    console.log(a*b);
};


function countvowels(str){
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char ==="i" || char === "0" || char ==="u" ){
           count++;
        }
       
    }
   return count;
}



let arr = ["DELHI", "MUMBAI", "PUNE", "GUJRAT"];

arr.forEach ( (val, idx, arr) =>{
    console.log(val.toLowerCase(), idx, arr);
});

//ForEach loop Array

let nums = [2, 3, 4, 5 ,6];
 
nums.forEach((num) => {
    console.log(num * num);
}
);

//map
let number = [35, 62, 35, 24];
 
let newarray = number.map((val) => {
    return val * 2;
});
 console.log(newarray);

let calcSquare = (numbetr) => {
    console.log(number * number);
};
  

//filter
let Array = [2, 3, 434, 44, 33 ]; 

let evenarray = Array.filter((val) => {
    return val % 2 === 0;
});

console.log(evenarray);

//reduce
let arrr = [2, 4, 5, 7];

const output = arrr.reduce((previous, current) => {
  return   previous + current;
}); 
console.log(output);


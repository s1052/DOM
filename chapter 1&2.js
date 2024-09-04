//This code is showing hello world
console.log("Hello World");
//Arithmetic Operators
let a = 2;
let b = 5;
console.log("a = ", a ,"& b = ", b );
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b", a % b);
console.log("a ** b", a ** b);

//Unary Operators

console.log("a = ", a," & b = " , b );
a = a + 1;
console.log("a = ", a );
a--;
console.log("a = ", a );

//Assignment Operators

// let c = 5;
// let d = 2;
a += b;
a -= 4;
a *= b;
a %= 3;
a **= 9;

console.log("a = ", a ); //7

//Comparison Operators

// let c = 5;
// let d = 2;
console.log("5 == 2", a == b); //false
console.log("5 === 2", a === b); //false
console.log("5 > 2", a > b); //false
console.log("5 < 2", a < b); //true

//Logical Operators
let n = 6;
let s = 5;

let cond1 = n > s; //true
let cond2 = n === 96; //false
console.log("cond1 && cond2", cond1 && cond2 );

//Conditional Statement
// 

// let age = 15;
// let mode="dark";
// let color;
  
if (mode === "dark") {
    color="black";
} else{
    color="white";
}

if (mode === "light") {
    color="white";
}

console.log(color);

// IF-ELSE STATEMENT
// let age=15;
if (age >= 18){
    console.log("you can vote");
 } else{
    console.log("you CANNT vote");
}

let num=10;
if (num%2 === 0){
    console.log("Even");
} else{
    console.log("Odd");
}

//ELSE-IF STATEMENT
let mode ="blue";
let color;

if (mode === "dark"){
    color="black";
} else if(mode =="blue"){
    color="blue";
} else if(mode =="pink"){
    color="pink";
} else{
    color="white";
}
console.log(color);  

// TERNARY OPERATOTS
let age=15;
let result = age>=18? "adult": "not adult";
console.log(result);



let name= prompt("hello");
console.log(name);




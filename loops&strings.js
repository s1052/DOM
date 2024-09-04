                                //LOOPS//
// FOR LOOP

// Print 1 to 5
for(let i = 1; i <= 5; i++){
    console.log("Sohana Singh");
}

// for (i=1; i<=5; i++){
//     console.log("i = ", i);
// }x
// Calculate the sum of 1 to n
let sum = 0;
let n = 6 ;
for ( let i = 1; i <= n; i++ ) {
    sum = sum + i;
}
console.log("sum = ", sum)
console.log("loop has ended");

//WHILE LOOP

let i = 1;
while(i <= 5){
    console.log("i = ", i);
    i++;
}

//FOR-OF LOOP

let str =" Sohana Singh";
   for (let i of str){
    console.log("i =", i);
   }

   //FOR-IN LOOP

   let student = {
    name:"Rahul Singh",
    age: 21,
    cgpa: 8.5,
    isPass: true
 };
  
for(let key in student){
    console.log("key =", key, "value =", student[key]);
} 

//PRACTICE SET 1
//CREATE A GAME.........???

// let gameNum = 25;
// let userNum = prompt("guess the game number:");
// console.log(userNum);

// while(userNum != gameNum){
//    userNum =  prompt("You entered wrong number . Guess it again:")
// }
//     console.log("Congratulations you entered a right number")


  //STRINGS

  let string = "Sohana Singh";
  let string2 = 'Disha';
  console.log(str[2]);

  //TEMPLATE LITERALS
  let specialstring = `This is a template literal`;
  console.log(typeof specialstring);

  let str3 = "rahul singh";
  str3.toLocaleUpperCase();
  console.log(str3);


  let fullName = prompt("enter your fullName without spaces");
  let username = "@" + fullName + fullName.length
  console.log(username);


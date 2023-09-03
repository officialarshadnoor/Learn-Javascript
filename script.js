// // defining js
// function sum(x, y) {
//     return x + y;
// }

// function sum(x, y) {
//     return x + y;
//     console.log("Hello World"); // this will NEVER run
//     // return will return to function already so it will not go further for execution
// }

// console.log("Hello World!");


// let vs var
// let is local variable  - we can use only within the block
// var is a global variable  - we can use anywhere

// let age = prompt("What's your age?");

// let status = (age >= 18 ) ? 'Yes Vote' : 'Can\'t vote';
// console.log(status)


// Logical operators

// Shadi conditions

// 1. Age > 18
// 3. Bank Balance > 10 Cr

// Let's make program on above conditions
// var age = prompt("Enter your age ");  // taking age input from user
// var bank = prompt("What's your bank balance");  // taking bank balance
// let status = (age >= 18 && bank >= 100000000) ? 'You can marry. ' : 'You can\'t marry';
// alert(status);

// program working perfectly

// Marks grade calculator using Javascript
// let marks = prompt("Enter your marks ");
// let str = 'Your marks is ';
// if (marks>=90) {
//     alert(str+'A');  // here we can also use console.log
// }
// else if (marks >= 80) {
//     alert(str+'B');
// }
// else if (marks >= 70) {
//     alert(str+'C');
// }
// else if (marks >= 60) {
//     alert(str+'D');
// }
// else {
//     alert ('You are fail');
// }

// Switch cases on Javascript

// num = 4;
// switch(num) {
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     case 4: console.log('D');
//     break;
//     default: console.log('You are fail');
// }

// loop

// for (let i=0;i<5;i++){
//     console.log(i);
// }


// Creating object
// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function() {
//         console.log('draw');
//     }
// };
// function createRectangle(len,bre) {
// return rectangle = {
//     length: len,
//     breadth: bre,

//     draw(){
//         console.log('drawing rectangle');
//     }
// };
// }
// let rectangleObj1 = createRectangle(5, 4);


// function Rectangle(){
//     this.length = 1;
//     this.breadth = 2;
//     this.draw = function {
//         console.log('drawing');
//     }
// }


// String basics
// let firstName = 'Arshad';
// let lastName = "Noor";
// let longPara = `This is used when we have to store long paragraph.`; 
// // we use ` ` when we have to store long paragraph
// console.log(longPara);

// let random = 'It\'s my job';  // we have to add \ to takkle with error
// console.log(random);

// // concatinate two strings
// let fullName = firstName + " " +lastName;

// // we can use comma also. In comma it gives a space between two variable while printing
// console.log(firstName, lastName);

// // METHODS 
// let firstName = 'Arshad';
// let lastName = 'Noor';
// let random = 'Learning Javascript';
// let fullName = firstName+ " "+lastName;

// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// // we use index of to get the position of character
// console.log(firstName.indexOf('s'));  //output will be 2
// // A = 0, r = 1, s = 2

// // indexOf will return the first character
// // for last character index we use below property
// console.log(firstName.lastIndexOf('a'));

// // use of replace
// console.log(firstName.replace('A','S'));  // now it will print Srshad

// // we can replace all characters by below method
// console.log(fullName.replaceAll('r','l'));  // it will print Alshad Nool

// // while working on blog website project where lots of data is there we have to repace ' with \' then we can use replaceAll
// let abc = "It's my choice to learn something new";
// let modifyabc = abc.replaceAll("'","\'");
// console.log(modifyabc);
// // this is used to handle the string errors

// // also we use replaceAll while creating a url for website 
// // in url we have to repace space with - , lets try

// let url = 'this is not a better url';
// let fixurl = url.toLowerCase().replaceAll(' ','-'); // this will convert to lowercase first and then spaces will replaced by -
// console.log(fixurl);


// use of substring
// let fullName = 'Arshad Noor';
// let firstName = fullName.substring(0,6);
// let lastName = fullName.substring(7,11);
// console.log(fullName,firstName, lastName);

// Type conversion
// let value = true;
// // alert(typeof(value));

// value = String(value);
// alert (typeof(value));

// alert("6"/"2"); // here string will auto convert to number

// let str = "123";
// alert(typeof(str));
// let num = Number(str);  // it will convert string to number type data
// alert(typeof(num));


// alert('1' + 2); // 12
// alert(Number('1')+2); // 3 here typeconversion is applied 

// // we can also use + for number type conversion
// alert(+'5'+ +'4');


// let i = 0;
// while (i<10){
//     alert(i);
//     i++
// }


// Template literals

// let firstName = "Arshad";
// let lastName = "Noor";
// let videos = 10;
// let subscribers = 10000;

// // let result = "Youtube channel "+firstName+" "+lastName+" has "+videos+" videos and "+subscribers+ " subscribers.";
// // console.log(result);
// // this is a little confusing so we use template literals instead of this 

// let result = `Youtube channel ${firstName} ${lastName} 
// has ${videos} videos and 
// ${subscribers} subscribers.`;
// console.log(result);
// it may have multiple lines, doesn't throw error


/* -------------------
---- Arrays ----------
----------------------*/

// let items = ["bread","butter","salt","jam"];

// for (let i=0;i<items.length;i++){
//     console.log(items[i]);
// }

// console.log(items.join(", "));

// concatinate two lists
// let products = ["bread","butter","salt","jam"];
// let veg = ["potato", "ladyfinger","tomato"];

// let allproducts = products.concat(veg);

// console.log(allproducts);


// Deep dive into loops

// 3 Types of loop - for loop, while loop and do while loop

// let students = ["Shubham","alex","mark","deepak"];

// for (let i=0;i<students.length;i++){
//     console.log(students[i]);
// }

// let students = ["karan","aman","keshav","kajal"];
// students.push("anjali");
// for (let student of students ){
//     console.log(student);
// }

// let student = {
//     username : "Arshad",
//     age : 18
// };

// for (let key of student){
//     console.log(key);
// }

// const username = "arshadnoor";
// for (let character of username){
//     console.log(character);
// }

// // while loop
// let i = 0;
// while (i<username.length){
//     console.log(username[i]);
//     i++;
// }

// infinite loop
// while (true) {
//  console.log("Arshad");
// }

// never ever try infinite loop, otherwise your system will be hang
// My system got hanged before saving the infinite while loop :P


// Now let's move on, The next is do while loop
// Fact : Do while loop will always run atleast once.

// let count = 0;
// do{
//     console.log(count);
//     count++;
// }while(count<5);  //condition


// Conditions
// const loggedIn = true;

// if (loggedIn){
//     console.log("Welcome user!");
// } else {
//     console.log("Welcome guest! Please login");
// }

// let signal = "green";

// if (signal == "red") {
//     console.log("Please STOP!");
// } else if (signal == "yellow") {
//     console.log("Be ready!");
// } else if(signal == "green"){
//     console.log("Goooooooooooooooo!");
// } else {
//     console.log("Please check the signal input!");
// }

// let password = "1234@56789";

// if (password.length >= 8 && password.includes("@")){
//     console.log("Password is strong!");
// } else if (password.length >= 5 && password.length <=8 || password.includes("@")){
//     console.log("Medium");
// } else {
//     console.log("Weak");
// }

// Logical not (!)  -  It will reverse the result

// let loggedIn = true;
// if (!loggedIn){  // it will make loggedIn false
//     console.log("Hello");
// } else {
//     console.log("You are loggin in.");
// }


// Break and Continue

// let rating = [7,8,5,3,0,6,10,7,8];

// for (let i=0;i<rating.length;i++){
//     if(rating[i]==0){
//         console.log(`Rating: ${rating[i]} - SKIP`);
//     }
//     if(rating[i]==10){
//         console.log(`Rating: ${rating[i]} - MUST WATCH`);
//     }
//     console.log(`Rating: ${rating[i]}`);
// }

// Switch case
// let rating = 3;

// switch(rating){
//     case 5: console.log("Must Watch");
//     break;
//     case 4: console.log("Above Good"); 
//     break;
//     case 3: console.log("Average");
//     break;
//     case 2: console.log("SKIP");
//     break;
//     case 1: console.log("Ignore");
//     break;
//     default:console.log("INVALID");
// }

// We use function whenever we need to do the same task but for different parameters

// we can create a function and run it multiple times with different parameters

// function addition(numOne,numTwo){
//     return numOne+numTwo;
// }

// let result = addition(2, 5);
// console.log(result);

// Some website have to generate certificate for multiple users
// In this case, we can create a function and pass with different parameters to generate the certificate

// function intro(){
//     console.log("Welcome to the course!");
// }

// intro();  // function calling


// when we store a function inside variable we have to use ; at the end like below
// let intro = function(){
//     console.log("Welcome to the course!");
// };
// intro();

// use of return
// function addition(numOne, numTwo){
//     let result = numOne + numTwo;
//     return result;  // this will return result to function call
// }

// console.log(addition(15,25));


// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// console.log(fullName("Arshad","Noor"));


// Now lets move towards arrow function 

// let welcome = () => {
//     console.log("WELCOME");
// };

// welcome();

// passing arguments

// let welcome = (name) => {
//     console.log(`Welcome ${name}`);
// };

// welcome("Arshad");  // it will print Welcome Arshad


// let add = (numOne, numTwo) => {
//     return numOne + numTwo;
// };

// console.log(add(5,2));

// write extact same code in just one line
// let add = (numOne, numTwo) => numOne + numTwo;
// console.log(add(15,20));

// // For above, when we have one line inside the function block we don't need to create full block, we can just write like above

// // Lets take another example
// let welcome = (name) => {
//     return `WELCOME ${name}`;
// };

// let welcome2 = (name) =>`WELCOME ${name}`;
// // this will work same as above function

// console.log(welcome);
// console.log(welcome2);

//Remember : we use single line return function when we only have single parameter
// In case of muliple parameters we have to create full block


/* ---------------
-------------- Foreach Method ---------------
--------------*/

// let products = ["bread","butter","jam","bottle"];
// // let callback = (product) => console.log(`My product name is ${product}`);
// // products.forEach(callback);

// // products.forEach((product) => console.log(product));

// // here by using forEach method we have access to each item in the list
// products.forEach((product) => console.log(product.length)); // product length

/* ------------------
----------Object Literals --------------
---------*/
// let user = {
//     name : "Arshad Noor",
//     email: "arshadnoor585@gmail.com",
//     age: 18,
//     isLoggediIn: false
// }

// console.log(user);
// console.log(user.name);
// console.log(typeof(user));

// let user = {
//     name: "Arshad Noor",
//     email: "arshadnoor585@gmail.com",
//     age: 18,
//     isLoggedIn: false,
//     login: function (nickName){
//         return `${nickName} LOGIN PLEASE`;
//     },
//     logout: function(){
//         console.log("LOGOUT");
//     }
// };

// console.log(user.login("SS"));  // SS LOGIN PLEASE

// Objects in arrays 
// If we have to store multiple users information in array then objects come into the picture

let users = [
    {
        "name": "Arshad Noor",
        "age":18,
        "email":"arshadnoor585@gmail.com"
    }, 
    {
        "name":"Mohammad Ahmad",
        "age":20,
        "email":"ahmad@gmail.com"
    }, 
    {
        "name":"Aman",
        "age":19,
        "email":"aman@gmail.com"
    }
];

console.log(users[0]);  // we can access with the index number


// let dog = {
//     name: 'puppy', 
//     age : 1
// }
// let cat = {
//     name: 'meow', 
//     age : 2
// }
// // 
// let pets = [
// {  name: 'puppy', 
//     age : 1 }, cat
// ]
// pets.push({name: 'flash', age: 2})

// // adding a property inside an object 
// cat.type = 'yellow'


// // accessing objects literal in array

// pets[0].type = 'white'

// pets[2].type = 'white'
// console.console.log(pets);
// console.log(cat);


// // for loop

// let Form1Student = ['mark', 'john', 'peter','mercy','Haron','Mecury', 'Venus']
// let nameNum = Form1Student
// // iterating
// // initialized =>where it begins; test => lenght of array increment => for adding since it a start from array 0;
// for (let i = 0; i < nameNum.length; i++) {
//     const element = nameNum[i];

//     console.log(element);
    
// } 


// const student = {
//     name:'mark', 
//     age:'john',
//     height:'peter',
//     tall:'mercy',
//     black:'Haron',
//     live:'Mecury',
//     home:'Venus'
// }
   



// for in

// for ( let  pop in student){
   

// console.log(`in ${pop} : there is ${student[pop]} `);
// }
// const salaries= {
//     Jack : 24000,
//     Paul : 34000,
//     Monica : 55000
// }

// using for...in
// for ( let i in salaries) {

//     // add a currency symbol
//     let salary = "$" + salaries[i];

//     // display the values
//     console.log(`${i} : ${salary}`);
// }

// while loop
//  let total = 0
//  while (total !== 20){

//     total++;
//     console.log('while',total);
//   }
// do While
// do {
//     total += 1;
//     console.log('Do',total)
// } while (total > 23);

// function

// let food = null;
// let beer = 2100
// let pizza = 1000
// let fries = 500
// let balance = 1000


// food = ( function (){
// IIFE
// runs then returns  value passed to the variable

// return 42;
// return function (){
//     console.log('Am home');
// }

// return {
     
// }
// })();
// function is passed in a container 
// food()

// console.log(food);;

// function sum(a, b){

//     return a + b

// }
// console.log(sum(2, 2));


// 5/7/2023

// Arrow function

// let x = (num1, num2) => num1 * num2
// console.log(x(20, 2));

// // in array methods
// const int = [22, 3, 4, 10, 45];
// const integer = int.map((element) => element + 9
// )
// console.log(integer);

// // arrow function in object
// const parent = {
//     father_name: "Omuse King",
//     fatherReal: function (){
//         return `${this.father_name} is my father.`;
//     },
//     father: () => {
//       return `${this.father_name} is my father.`;
//     },
//   };
// //   function will work
//   console.log(parent.fatherReal());
// //   function won'twork
//   console.log(parent.father());

// // Foreach loop

// // it's high order function / has argument
// // Can be used in object / i.e json
// // calling a function using forEach
// constconsole.log = console.log
//  const colors = ['blue', 'green', 'white']
// function iterate(item, index, array) {
// log(item);
// log(array)
// if (index === array.length -1 ) {
// log('The last iteration!' );
// }
// }
// colors.forEach(iterate);



// // forEach in numbers

// const numbers = [22, 3, 4, 10, 45];

// numbers.forEach(number => {
//     if (number === 45) {
//       // console.log("terminate the current loop");
//       return true;
//     }
//     console.log(number);
//    });


//    forEach in 
// let Form2Student = ['mark', 'john', 'peter','mercy','Haron','Mecury', 'Venus']
// // let Value = Form2Student.join('')
// // console.log(Value);
//    Form2Student.forEach((item,index, array) => {
//     console.log(item); //( callback  )
//     console.log(index) //( optional  )
//     console.log(array) //( optional  )
  
//   });
  
   
// importance of forEach in object

// Data set of students
// let Students = [
//     { rollNo: 21, name: 'Alpha' },
//     { rollNo: 22, name: 'Beta' },
//     { rollNo: 23, name: 'Gamma' },
//     { rollNo: 24, name: 'Delta' },
//     { rollNo: 25, name: 'Omega'}
// ];
  
// // Use forEach() function
// let StudentRollNo = [];
  
// Students.forEach(function (item) {
//     StudentRollNo.push(item.rollNo);
//     // StudentRollNo.push(item.name);
// });
  
// Display rollNo data
// console.log(StudentRollNo);


// scope

// const print = () => {
//   for (var i = 0; i < 4; i++){
//       setTimeout(() => {
//           console.log(i);
//       }, i*1000);//i is closure
//   }
// }

// print();


// callback function
// Main function
// const mainFunction = (callback) => {
//   setTimeout(() => {
//       callback([2, 3, 4]);
//   }, 10000)
// }

// // Add function
// const add = (array) => {
//   let sum = 0;
//   for(let i of array) {
//       sum += i;
//   }
//   console.log(sum);
// }

// // Calling main function
// mainFunction(add);
   

// callback Hell
// hoisting in this because it is an arrow function
// let words = document.querySelectorAll(".word");

// const animateAll = (animate) => {
//     setTimeout(function(){
//         animate(words[0]);
//         setTimeout(function() {
//             animate(words[1]);
//             setTimeout(() => {
//                 animate(words[2]);
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// const animate = (word) => {
//     word.classList.add("animate");
// }

// animateAll(animate);


// Block scope

// function sayHello() {
//   let name = "Hark"; // Function variable

//   if (true) {
//       let message = "Hello"; // Block variable
//       console.log(message + " " + name); 
//       // Output: "Hello John"
//   }
// }

// sayHello();

// lexical scope /in function

// function myName(){
//   let mark = "Hark"
 
//   function greeting(){
//     console.log(`Hi ${mark}`);
//   }
//   greeting()
  
// }
// myName()


// lexical scope in setTimeout/arrow function

// let obj = {
//   name: "Rob",
//   print() {
//   setTimeout(() => {
//     console.log(this.name)
//   }, 100);
// }
// };
// window.print()

// Split() and Join()
// split => Is turning strings into array of strings using substrings with specified operator you provide in the argument
// substrings => Are strings inside a string. Depending on which index you start and end
// function func() {
 
//   // Original string
//   let str = 'It is Saba Saba Day.'

//   // Splitting up to 2 terms
//   // After split it can take in any array method
//   const strCopy = str.split(" ")
//   const join = strCopy.join(" ")

//   //.forEach((element,index,array)=>{
//       console.log('split:',strCopy)
//       console.log('join:', join);
      
//   // });
 
// }
// func();

// Join () method


//  new keyword

// class ready {
//   constructor() {
//     this.c = 1
//     this.a = 100
//   }
// }

// // Set the function prototype
// ready.prototype.b = 200;

// // Create an object
// let obj = new ready();

// // Display the result on console
// console.log(obj.c);

// console.log(obj.b);


// // This keyWord using call(),bind() and apply() methods

// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person2 = {
//   firstName:"William",
//   lastName: "Kalibo",
// }
// const copy = person1.fullName.apply(person2)
// console.log(copy);



// // bind()
// // function Borrowing
const person = {
  firstName:"John",
  lastName: "Doe",

  fullName: function(middleName, nickName) {
    return this.firstName + " " + this.lastName + " "  + nickName + " " + middleName;
  }
}


const member = {
  firstName:"Wiz",
  lastName: "Kizo",
  middleName: "chesoni"
}

const fullMember = person.fullName.bind(member, "Kalibo", "Chesoni");
console.log(fullMember());



// // map()method

// let map1 = new Map();
  
// map1.set("first name", "sumit");
// map1.set("last name", "ghosh");
// map1.set("website", "geeksforgeeks")
//     .set("friend 1","gourav")
//     .set("friend 2","sourav");
  
// console.log(map1);
      
// console.log("map1 has website ? "+ 
//                     map1.has("website"));
  
// console.log("map1 has friend 3 ? " + 
//                     map1.has("friend 3"));
  
// console.log("get value for key website "+
//                     map1.get("website"));
  
// console.log("get value for key friend 3 "+
//                     map1.get("friend 3"));
// console.log("delete element with key website " 
//                     + map1.delete("website"));
      
// console.log("map1 has website ? "+ 
//                     map1.has("website"));
  
// console.log("delete element with key website " +
//                     map1.delete("friend 3"));
  
// map1.clear();
  
// console.log(map1);

// // filter method 

// const ages = [32, 15, 60, 33, 16, 40];
// const result = ages.filter(checkAdult);



// function checkAdult(age) {
  
//   return age >= 18;

//   // Return Even numbers
//   return age%2 === 0

//   // Returning oddNumbers
// //  return age & 1
// }

// console.log(result)


// let ageSum =  []
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21 ){
//     ageSum.push("print ages",ages[i])
//   }
  
// }
// console.log(ageSum);
// // using foreach in filters
// ages.forEach((element)=>{
// if (element >= 21)
  
//     ageSum.push(element)

// })
// console.log('Wow!:',ageSum)


// using arrow func in filter
// const arrow = ages.filter(age => age >= 21)
// console.log(arrow);

// array find()

// Input array contain some elements.
// let array = [10, 20, 30, 40, 50];
 
// // condition
// let found = array.filter(function (element) {
//     return element > 60;
// });
 
// console.log("find - f",found);

// // function sum(x, y, z) {
// //   return x + y + z;
// // }

// // const cookies = [1, 2, 3];

// // // console.log(sum(''...cookies));
// // // Expected output: 6

// // console.log(sum.apply(null, numbers));


// // Array reduce
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// let initialValue = 0;
// // const sumWithInitial = array1.reduce(
// //   (array1,currentValue) => array1 + currentValue,
// //   initialValue
  
// // );

// // console.log(sumWithInitial);

// // for loop 
// for (let i = 0; i < array1.length; i++) {
//   initialValue += array1[i];

// }
// console.log('forloop',initialValue);

// // Expected output: 10

// // Array concat
// // joining two arrays
// function func() {
  
//   // Original string
//   let num = [1, 3, 55.70, 50 ,23, 67,16,]
//   let nmu2 = [1, 3, 55.70, 50 ,23, 67,16,]
//   let num3 =[1, 3, 55.70, 50 ,23, 67,16,]


//   // Joining the strings together
//   let numValue = num.concat(nmu2,num3)
//   let str = 'It';
//   let value = str.concat(' is', ' a', ' great', ' day.');
//   console.log(numValue)
//   console.log(value);
// }

// func();


// //  include();

// let strinIcd = "Can you , recieve that call it's from Hark man."
// let gold = strinIcd.split(" ")

//  console.log(gold);
// const incde = gold.includes(",");
// // console.log(gold);
// console.log('includes', incde)

// // Array reduce
// let num = [1, 3, 55.70, 50 ,23, 67,16,]
// const sumI = num.reduce(
//   function(accumulator, value){
//     // what is accumulated  to give to another 
//     console.log(accumulator, value);
// return accumulator + value
//   }, 0)
// console.log("reduce",sumI)
// // for loop
// let valueFirst = 0
// for(let i = 0; i < num.length; i++){
//  valueFirst += num[i]
// }
// console.log("for loop:",valueFirst);

// // forEach
// //  num.forEach(
// //   valueFirst.push(num)
// //  )
  
 
// // // console.log(valueFirst);
// // })
// console.log("foreach",sumI)

// let dom = ['mark', 'john', 'peter','mercy','Haron','Mecury','Alan', 'Venus','Don']
// const condition = dom.reduce(function(first, initial){

// // comparing to sort the array string alphabetically

// console.log("compare",first, 'to',initial);

//  return (first < initial)? first : initial;
// },"\u0434")
// console.log('condition',condition);

// // some ()

// // making the code DRY
// const some1 = [33,2, 30, 18, 20];

// const available2 = some1.some(function(element){ 
//   return element >= 3
// })
  

// console.log("available2",available2)




// const some1 = [3, 10, 18, 20];

// const available2 = some1.some(checkAdult)
// function checkAdult(age) {
//   return age >= 20;
// }
// console.log(available2)

// forloop some

// const some1 = [3, 10, 18, 20];

// const available2 = some1.some(
//   function(){

//   for (let i = 0; i < some1.length; i++) {

//  if( some1[i] >= 20){
//   return true;
//  }
//   }
// }
// );
// console.log(available2);


// forEach some

// const some1 = [3, 10, 18, 20];

// // This variable checks whether the loop is true or false. 
// let isGreaterThanOrEqualTo20 = false;

// let available2 = some1.some(function() {
//   some1.forEach(function(numbers) {
//     if (numbers >= 20) {
//      isGreaterThanOrEqualTo20 = true;
//     }
//   });
//   return isGreaterThanOrEqualTo20;
// });

// console.log(available2); // Output: true


// Converting for loop to forEach
// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// // for (let i = 0; i < items.length; i++) {
// //   copyItems.push(items[i]);

// // }
// // console.log(copyItems);
// // after
// items.forEach(function(item){
//   copyItems.push(item);
// });

// console.log(copyItems);



// Reduce array method


// const People = [
//   {
//     name: "John Smith",
//     age: 30
//   },
//   {
//     name: "William Lane",
//     age: 25
//   },
//   {
//     name: "Michael vonder",
//     age: 19
//   }
// ];

// const oldAge = People.reduce((acc, curr) => {
//   if (curr.age > acc) {
//     return curr.age;
//   }
//   return acc;
// }, 0);

// console.log(oldAge); // Output: 30


// const initialName = People.reduce((acc, curr, i ,  a) => { 
//   const split = curr.name.split(" ");
//   let initial = split[0];
// })



// every () method
// const evey = [3, 30, 18, 20, 41];

// let every = evey.every(function (mute){
//   return mute <= 40;
// //   for (let i = 0; i < evey.length; i++){
// //   if (evey[i] >= 4){
// //     return true;
// //   }else{
// //     return false;
// //   }
  
// // }

// });

// console.log("every",every); // Output:false



// console.log(every);


// combining arrays methods
// find all the names of people with @replicant.io
// let people = [
//   {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
//   {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
//   {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
//   {"id":258, "name":"Pris", "email":"pris@replicant.io"}
// ];
// // filter
// let replicant = people.filter(function(person){
//   return person.email.includes("@replicant.io") > -1;
// } )

// // using map
// let name1 = replicant.map(function(person){
//   return person.name;
// })


// chaining the Arrays 
// let replicantsNames = people.filter(function(person){
//   return person.email.indexOf("@replicant.io") > -1;
// }).map(function(person){ return person.name}).sort()


// console.log("combined:", replicantsNames );


// // Arrow function

// let arrowF = people.filter( (person) => ( person.email.indexOf("@replicant.io") > -1 ) ).map( (person) => (person.name) ).sort().reverse()
// console.log( 'Arrow func:',arrowF);




// // Ajax Technology
// const btn = document.getElementById('btn');
// btn.addEventListener('click', showCountries);
// function showCountries(){


// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
// xhr.onload = function() {
//   if (xhr.status === 200) {
//       console.log('ok')
//       let countries= JSON.parse(this.response)
//       // console.log(countries);
//       // console.log(this.response)
//       countries.forEach(country =>{
//         const countryName = document.getElementById('country')
//          const userName = document.createElement('div')
//          userName.innerHTML = country.name.common;
//         const flagCountry = document.createElement('img')
//         console.log(flagCountry);
           
//               flagCountry.src = country.flag.png;

//               userName.appendChild(flagCountry)
//              countryName.appendChild(userName)
             
//             });
// };
// };
// xhr.onerror = function() {
//   console.error('An error occurred while making the request.');
// };
// xhr.send();

// fetch('https://restcountries.com/v3.1/all')
// .then((response) => response.json())


// .then(function(data) { 
// data.forEach(function(country){

//   const countryName = document.getElementById('country')
//   console.log(countryName);
//   const userName = document.createElement('div')
//   const textH1 = document.createElement('h1')
//   const textli = document.createElement('li')
//   textli.textContent = country.id;
//   userName.appendChild(textli);
//   textH1.textContent = 'Proff'
//   countryName.appendChild(textH1)
//   // userName.innerHTML = country.name;
//   const flagCountry = document.createElement('img')
//   flagCountry.src = country.flag
//   userName.appendChild(flagCountry)
//   countryName.appendChild(userName)


// })
// })
// fetch('https://restcountries.com/v3.1/all')
//   .then((response) => response.json())
//   .then(function(data) {
//     console.log(data)
//     data.forEach(function(country) {

// DOM manipulation
    //   Creating Element for DOM
    //   const countryName = document.getElementById('country');
    //   const userName = document.createElement('div');
    //   const textH1 = document.createElement('h1');
    //   const flagCountry = document.createElement('img');
    //   countryName.classList.add('flags');
    // //    Use the 'common' property for the country name
      
    //   textH1.textContent = country.name.common;
    //   userName.appendChild(textH1);

    // //  Use the 'png' property for the country flag URL
    //   flagCountry.src = country.flags.png; 
    //   userName.appendChild(flagCountry);
    //   countryName.appendChild(userName);

    
    // });
//      // form
//       let down = document.getElementById("GFG_DOWN");
           
//     // Create a break line element
//     let br = document.createElement("br");
  
               
//     // Create a form dynamically
//     let form = document.createElement("form");
//     form.setAttribute("method", "post");
//     form.setAttribute("action", "submit.php");
 
//     // Create an input element for Full Name
//     var FN = document.createElement("input");
//     FN.setAttribute("type", "text");
//     FN.setAttribute("name", "FullName");
//     FN.setAttribute("placeholder", "Full Name");
 
//      // Create an input element for date of birth
//      var DOB = document.createElement("input");
//      DOB.setAttribute("type", "text");
//      DOB.setAttribute("name", "dob");
//      DOB.setAttribute("placeholder", "DOB");
 
//      // Create an input element for emailID
//      var EID = document.createElement("input");
//      EID.setAttribute("type", "text");
//      EID.setAttribute("name", "emailID");
//      EID.setAttribute("placeholder", "E-Mail ID");
 
//       // Create an input element for password
//       var PWD = document.createElement("input");
//       PWD.setAttribute("type", "password");
//       PWD.setAttribute("name", "password");
//       PWD.setAttribute("placeholder", "Password");
 
//        // Create an input element for retype-password
//        var RPWD = document.createElement("input");
//        RPWD.setAttribute("type", "password");
//        RPWD.setAttribute("name", "reTypePassword");
//        RPWD.setAttribute("placeholder", "ReEnter Password");
 
//                 // create a submit button
//                 let s = document.createElement("input");
//                 s.setAttribute("type", "submit");
//                 s.setAttribute("value", "Submit");
                 
//                 // Append the full name input to the form
//                 form.appendChild(FN);
                 
//                 // Inserting a line break
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the DOB to the form
//                 form.appendChild(DOB);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the emailID to the form
//                 form.appendChild(EID);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the Password to the form
//                 form.appendChild(PWD);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the ReEnterPassword to the form
//                 form.appendChild(RPWD);
//                 form.appendChild(br.cloneNode());
                 
//                 // Append the submit button to the form
//                 form.appendChild(s);
 
//                 down.appendChild(form);
//   });
// }



// currying function
// function currying(pineapple){
//   return function(Ham){
//    return function(cheese){
//     return function(tomatoSauce){
//         return function(mozarrella){
//         return function(pizzaSauce){
       
//         return `${pineapple} made ${Ham} is ${cheese} to ${tomatoSauce} to ${mozarrella } to its ${pizzaSauce};`
//         }
//     }
// }
//    }
//   }
// };




// console.log(currying('Home')('Hawiian') ('easy')('cook')('due')('recipe'));



// function calculateVolume(length) {
//   return function (breadth) {
//       return function (height) {
//           return length * breadth * height;
//       }
//   }
// }
// console.log(calculateVolume(4)(5)(6));



// Callback function
// let Fn = ['mark', 'john', 'peter','mercy','Haron','Mecury','Alan', 'Venus','Don']

// Fn.forEach(amInit)

// function saySomething(wash) {
//   //Adding parameters as since callback function might be called multiple times.
//   let message = 'carry Id'
//   wash(message)
// }
// function amInit(id) {
//   console.log("Are you", id)
// }
// saySomething(amInit)

// // settimer function

// setTimeout(amInit, 2000 , 'here is my id');




// Nested for loop

// let twoD = [[1, 3, 55.70, 50 ,23, 67,16,],
//  [1, 3, 55.70, 50 ,23,],
// [1, 3, 55.70, 50 ,23, 67,16,9]]


// for (let i = 0; i < twoD.length; i++) {
 
//   let items = twoD[i].length
//   console.log(i ,items)
//   for (let j = 0; j < items; j++) {
//     console.log(twoD[i][j])
//   }
// }

// Nested loop in object


// let nested ={ description: [
//   {"id":123, "name":"Rick Deckard", email:"rick@bladerunner.org"},
//   {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
//   {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
//   {"id":258, "name":"Pris", "email":"pris@replicant.io"}
// ]};

// for (let i = 0; i < nested.description.length; i++) {
  
//   // console.log(nested.description[i].name)
//   // console.log(nested.description[i].email)
//   // console.log(nested.description[i].id)

//   for (let prop in  nested.description[i]) {

//   // no using of quotation marks coz prop is a variable
//     console.log("nested:",prop,nested.description[i][prop])


// }
// }
// nested.description.forEach(element => {
//   element.description = element.description
//   element.email = element.email
//   element.id = element.id
//   element.name = element.name
//   console.log("forEach:",element)
// });


// for (const prop in nested[i]) {
  
//   console.log( prop, nested[prop], nested.prop)
//   // if (Object.hasOwnProperty.call(object, key)) {
//   //   const element = object[key];
    
//   // }

// IIFE

// let iife = (function(nmu2) {

//   return {
//     name: nmu2,
//     id: 123,
//     length: 4,
//     width: 5,
//     height: 6,
//     sayHello: function() {
//      return this.length * this.width * this.height
//     }
//   }

// })('IIFE');

// console.log("name:",iife.name, "id:",iife.id );
// console.log("volume:",iife.sayHello());



// Js eventListeners

// let m = document.getElementById('m')
// let d = document.getElementById('d')
// let p = document.getElementById('p')
// let s = document.getElementById('s')

// let highlight = (ev) => {
//  ev.stopPropagation();
//   let x = ev.currentTarget;
//   x.className = 'gold'
//   reset(x)
// };

// function reset(_element) {
 
//  setTimeout(() =>{
//   _element.className = ''}, 2000)
// }

// d.addEventListener('click', (ev)=>{
//   ev.stopImmediatePropagation();
// console.log('Hi I\'m a DIV');
// });

// [m,d,p,s].forEach((element)=>{
 
//   element.addEventListener('click', highlight);
// })

// // Time and Date

// let date = new Date();
// console.log("date =>", date.getDay() );

// let calcTime  = 1000 * 60 * 60 * 24 * 365.25 * 40
// let str = '14 November 1994'
// let date1 = new Date( 1500000000000);
// // current timestamp
// log("timestamp:",date1)

// // 40 years from timestamp
// let time = new Date(calcTime);
// log(time)
// let  dstr = new Date(str)
// log(dstr)
// log(date2)

// // Get and set methods in time object

// date.setFullYear( 1994)
// date.setHours(5)
// log(date)

// let getTime = date.getFullYear()
// let day = date.getDay()

// log(getTime, day)

// // TIME OUTPUT

// log(date.toDateString())
// log(date.toLocaleDateString())
// log(date.toUTCString())
// log(date.toLocaleTimeString())
// log(date.toTimeString())
// log(date.toLocaleString('en-CA'))
// log(date.toString())


// // truthy and falsey

// log(!!1)
// log(!!date)
// log(!!0)
// log(!!'')
// log(!!null)
// log(!!undefined)
// log(!!NaN)

// // Null and undefined
// let h;
// console.log("undefined:",h);

// // null and undefined
// function abc(){
//     //nothing here
//     return null;
// }
// console.log("Null:", abc() );

// var y = global.blah;
// console.log(y);



// Try  catch statement

// try {
//   // Code that may throw an exception
//   throw new Error("Something went wrong!");
// } catch (error) {
//   // Code to handle the exception
//   console.log("An error occurred:", error.message);
// } finally {
//   // Code that always executes
//   console.log("Cleanup code or final actions.");
// }


// const meX = undefined

// if (meX == "") {
//   console.log('I am nothing!');
// } else {
//   console.log('I am here!');
// }

// // for of loops

// let supernatural = { 
//   "actors":['Jared Padelecki', 'Jensen Ackles', 'Mark Sheppard', 'Misha Collins'],
//   "characters":['Sam Winchester', 'Dean Winchester', 'Crowley', 'Castiel'],
//   "seasons":12 };


//   for(prop in supernatural){
//     console.log(prop,"Data type:",typeof supernatural[prop],
//     Array.isArray(supernatural[prop],)
//     )
//   }
//   for (prop in supernatural.actors) {
//    console.log(prop, supernatural.actors[prop]);
//   }
//   // for of loop is short hand for the for in
//   for (prop of supernatural.actors){
//     console.log(prop);
//   }

  // Object assign method
  // is just writing the copy of the object to a new variable
  // It is merged of the original to the new
//   let obj1 = {"arms":true, "armCount":2};
//   let obj2 = {"weapons":['missle launcher', 'reciprocating saw']};
//   let obj3 = {"canMove":true, "legs":0, "treads":2};
//   let objA =[ 1, 2,]
//   let objB =[7,8,9]

//   let merged = Object.assign([3,3,10],  objB);
//   console.log(merged);
//   let copying = Object.assign({"name":"Hark" ,"arms":false}, obj1);
//   console.log(copying);

//   // merge
//   let obj4 = Object.assign({}, obj1, obj2, obj3);
//   console.log(obj4);


  // DEBUGGING
//   const DEBUG_MODE = true;

// var R = "Ricky";
// var B = "Bobbie";
// console.count(R);   //1 Ricky
// if(DEBUG_MODE){
//     debugger;
// }
// function x(nm) { console.count(nm); return true; }

// console.count(B);   //1 Bobbie
// x(R);               //2 Ricky

// console.count(R);   //3 Ricky
// x(B);               //2 Bobbie

// console.count(R);   //4 Ricky

// console.time(R);
// console.group();
//     console.log('Log');
//         console.group();
//         console.info('Info');
//         console.groupEnd();
//     //console.error('Error');
// console.groupEnd();
// console.timeEnd(R);

// isNaN and NaN
// let log = console.log;

// let t = isNaN(true);    //1 - false
// let f = isNaN(false);   //0 - false
// let n = isNaN(null);    //0 - false
// let u = isNaN(undefined);   // NaN - true
// let b = isNaN(23);      //false
// let c = isNaN('45');    // false
// let d = isNaN('45.45'); // false
// let e = isNaN(new Date() ); //timestamp false
// let z = isNaN('');          // 0 false
// let g = isNaN('   ');       //0  false
// let h = isNaN(new Date('28 August, 2017'));  //integer timestamp returned by new Date() so... false


// let a = Number(true);
// log(t);
// log(f);
// log(n);
// log(u);

// new key word


// function car(make, model){
//   //log(this);
//   this.props = {
//       make,
//       model
//   };
//   let info = function(){
//       return this.props;
//   }
// }
// car.prototype.info = function(){
//   return this.props;
// }

// let c1 = car('Honda', 'Accord');
// let c2 = new car('Tesla', 'Model 3');


// //log(c1.props);        //undefined
// log(c2.info() );   

// js object creat method


// let obj = {
//   name: 'The Dude'
// };

// let car2 = Object.create(obj, {});
// console.log(car2);
// console.log(car2.name);

// let car3 = Object.create(car2, {
//   fullName: {
//       configurable: true,
//       writable: true,
//       enumerable: true,
//       value: 'Jeff Lebowski'
//   },
//   canBowl: {
//       configurable: true,
//       writable: true,
//       enumerable: true,
//       value: true
//   }
// });
// console.log(car3);
// console.log(car3.name);

// This keyWords
// "use strict";
// let box = document.querySelector('.box');
// let myFunc = function(){
//    console.log('1', this);
//     setTimeout( ()=> {
//         console.log('3', 'timed out', this);
//     }, 250)
// };
// let myFunc2 = () => {
//     console.log('2', this);
//     setTimeout( ()=> {
//         console.log('3', 'timed out', this);
//     }, 250)
// };

// box.addEventListener('mousedown', myFunc);
// box.addEventListener('mouseup', myFunc2);

// myFunc();
// myFunc.call(window);
// myFunc.apply(box);
// myFunc2()

// Apply call and bind methods

// let bob = function(num, str, x){
//   console.log('bob', num, str, this, x);
//   return true;
// }
// let bill = {
//   name: 'Bill Murray',
//   movie: 'Lost in Translation',
//   myMethod: function(fn){
//       //fn(2, 'hello');
//       let n = arguments[1];
//       let s = arguments[2];
//       fn.apply(bill, [n, s]);
//       //fn.call(bill, n, s);
//   }
// }
// // Borrowing a function
// let fred = bob.bind(bill, 5, 'hasta la vista');
// fred('x');

//bob(1, 'hello');
//bill.myMethod(bob);
//bob.call(bill, 2, 'goodbye');
//let arr = [3, 'hi'];
//bob.apply(bill, arr);
//bill.myMethod(bob, 4, 'ciao');


// // Object Descriptors 

// Property Descriptors Methods and Usage
// Object.defineProperty(obj, propName, {} )
// Object.defineProperties(obj, props)
// Object.getOwnPropertyNames(obj)
// Object.getOwnPropertyDescriptor(obj, prop)
// Object.getOwnPropertyDescriptors(obj)
// Object.keys(obj) - list of enumerable properties
// Object.values(obj) - list of enumerable prop values
// obj.propertyIsEnumerable(prop)
// obj.hasOwnProperty(prop)
// Objects can be
// 1. Extensible - new properties added
// 2. Frozen - props cannot be changed in any way
// 3. Sealed - props can't be deleted or configured
//           but are still writable
// Object PROPERTIES can be 
// 1. Writable - change the value
// 2. Enumerable - seen through a for...in loop
// 3. Configurable - change the property descriptors
// Object.isExtensible(obj)
// Object.isFrozen(obj)
// Object.isSealed(obj)
// Object.preventExtensions(obj)
// Object.freeze(obj)
// Object.seal(obj)
// Descriptor Groups
// DATA            ACCESSOR          
// value           get
// writable        set
// configurable    configurable
// enumerable      enumerable



// let object = {
//     name: 'Bob',
//     age: 45
// };
// Object.defineProperty(obj, 'test', {
//     value: 'Shagadelic',
//     writable: true,
//     configurable: true,
//     enumerable: false
// } );

// Object.defineProperty(obj, 'frank', {
//    configurable:true,
//     enumerable: true,
//     get: () => this.value,
//     set: (_val) => {
//         this.value = _val + " baby!";
//     }
// });



// for( let prop in obj){
//    console.log(prop);
// }
// console.log("object descriptors", obj, obj.test, obj.frank );
// obj.frank = 'Shagadelic';
// console.log(obj.frank);

// Object private variables

// let projo = (function(){
//   let _prop1 = 'Starman';//private variable / local variable
//   return {
//       prop2: 1981,
//       get prop1(){
//           return 'Movie:' + _prop1;
//       },
//       set prop1(_val){
//           _prop1 = _val;
//       }
//   }
// })();

// for(let prop in projo){
//   console.log(prop);
// }
// console.log( projo.prop2 );
// console.log( projo.prop1 ); 
// projo.prop1 = 'The Big Lebowski';
// console.log( projo.prop1 );
// // console.log( projo._prop1);



// // Double Bang .JavaScript
// // casting boolean !!
// // casting str to number +

// // if(num) truthy value
// let num   = 13
// let bool = !!num;//back to boolean
// console.log(bool);

// let str = '13';
// let value = + str;
// console.log(typeof str);
// console.log(typeof value);


// // Namespace and IIFE functions
// let objNS = {
//     name : 'Object Namespace',
//     init: function(){
//         //start the ball rolling
//         objNS.name = "New value";
//         objNS.action();
//         this.action();
//     },
//     action: function(){
//         //do some task
//     }
// };
// // objNS.init();

// let objIIFE = (function(){
//     let myPrivateVar = 'hidden value';
//     let myPrivateFunc = function(){
//         console.log('Private function running')
//     };
//     let x = function(){
//             //start the ball rolling
//             console.log(myPrivateVar);
//         };
//     x();
//     return {
//         name : 'Object IIFE',
//         init: x,
//         action: function(){
//             //do some task
//             myPrivateFunc();
//         }
//     }
// })();
// objIIFE.init();
// objIIFE.action();


// composition and Inheritance



//INHERITANCE
//  Character > Human > Sam
//  Character > Robot > x73
//  Character > Cyborg > Dolph

// const Character = {
//     talk: function(...msg){ 
//         console.log( msg.join(' '), msg) 
//     }
// }

// const Human = Object.create(Character, {
//     speed: {value:3},
//     name: {value:'Hector'}
// });
// Human.walk = function(){ 
//     this.talk(this.name, 'walking') 
    
// };
// Human.eat = function(){ 
//     this.talk(this.name, 'eating',this.speed) 
// };


// const Robot = Object.create(Character, {
//     speed: {value:8},
//     id: {value:'THX1138'}
// });
// Robot.drive = function (){ 
//     this.talk(this.id, '\u26A1', 'driving')
// };
// Robot.wifi= function (){ 
//     this.talk(this.id, '\u26A1', 'connecting')
// };

// const sam = Object.create(Human, 
//                           {name:{value: 'Samuel'},
//                             speed:{value: 4}    });
// sam.walk();
// sam.eat();
// sam.talk('Hello from Samuel.', 'Are you sure you want to');

// const x73 = Object.create(Robot, 
//                           {id:{value: 'x73'}});
// x73.drive();
// x73.wifi();

// // // ????What about a Cybernetically enhanced human with wifi?



// // //COMPOSITION
// const talker = (state)=>({ 
//     talk: (...msg) => console.log(msg, state)
// });
// const walker = (state) => ({
//     walk: () => {
//         let nm = state.name || state.id;
//         console.log(nm,  'walking');
//     }
// });
// const eater = (state) => ({
//     eat: ()=> {
//         let nm = state.name || state.id;
//         console.log(`${nm} is eating pizza`);
//     }
// });
// const driver = (state) => ({
//     drive: ()=> {
//         let nm = state.name || state.id;
//         console.log(nm, '\u26A1', 'driving');
//     }
// });
// const wifier = (state) => ({
//     wifi: ()=>{
//         let nm = state.name || state.id;
//         console.log(nm, '\u26A1', 'connecting');
//     }
// });

// const Person = (name, speed=3) => {
//     let state = {
//         name,
//         speed
//     }
//     return Object.assign({}, 
//                          talker(state), 
//                          walker(state), 
//                          eater(state));
// };
// let Bob = Person('Bob');
// Bob.talk('Hello from Bob.');
// Bob.eat();
// Bob.walk();

// const Android = (id, speed=6) => {
//     let state = {
//         id,
//         speed
//     }
//     return Object.assign({}, 
//                          talker(state), 
//                          driver(state), 
//                          wifier(state));
// };
// let k45 = Android('k45');
// k45.drive();
// k45.wifi();

// const Cyborg = (name, speed) => {
//     let state = {
//         name,
//         speed
//     };
//     return Object.assign({},
//                         talker(state),
//                         walker(state),
//                         wifier(state));
// };
// let Dolph = Cyborg('Dolph', 9);
// Dolph.walk();
// Dolph.wifi();

// const Cyborg = {
//     state(name, speed) {
//         this.speed = speed;
//         this.name = name;
//     }

//     // Cyborg has both walking and wifi capabilities
//     walk() {
//         this.talk(this.name, 'walking');
//     }

//     wifi() {
//         this.talk(this.name, '\u26A1', 'connecting');
//     }
// }

// const Dolph = new Cyborg('Dolph', 9);
// Dolph.walk();
// Dolph.wifi();



// const PersonDet = function (name, address,birthyear,gender){
//     this.name = name;
//     this.address = address;
//     this.birthyear = birthyear;
//     this.gender = gender;
// }
// PersonDet.prototype.calcAge = function(){
//     let age = new Date().getFullYear() - this.birthyear
//     console.log(age)
// };

// let john = new PersonDet("John",'Shauri',1990,'male');
// console.log(john);
// // Job Details
// // Mark to inherit from parent / this.mark as a child

// const JobDet = function (name, address,birthyear,gender, employeeId, employeeSalary) {
//     // use of call method to borrow for Code to be D.R.Y
//     // is how to inherit from parent / this.mark as a child
//     // if you don't use this keyword in  inherit from parent this keyword represents window object
//     PersonDet.call(this,name,address,birthyear,gender);
//     this.employeeSalary = employeeSalary;
//     this.employeeId = employeeId;
    
// }
// // setting prototype
// JobDet.prototype = PersonDet.prototype;

// JobDet.prototype.calcSalary = function () {
// return this.employeeSalary * 12;
// };
// JobDet.prototype.emplDet = function () {
//     console.log(this.name)
//     console.log(this.employeeId);
// }


// let mark = new JobDet( 'Mark',"shauri",1995,"Male",101,12000);
// console.log(mark);


// // using classes 
// class Employee {
//  constructor(name, birthyear, gender){
//     this.name = name;
//     this.birthyear = birthyear;
//     this.gender = gender;
//  }
//  calcAge() {
// console.log(new Date().getFullYear() - this.birthyear);
//  }
// }

// class markDetail extends Employee {
//     constructor(name, birthyear, gender, Id, salary){
//         // create a new instanceof 
//         super(name, birthyear, gender);
//         this.Id = Id;
//         this.salary = salary;
//     }

//     calcSalary(){
//         return this.salary * 2;

//     }
//     emplDetails() {
//         console.log(this.name)
//         console.log(this.salary)
//     }

// }

 
// const Hark = new markDetail("Hark", 1994,"male", 201, 50000);

// Hark.calcAge()
// Hark.calcSalary()
// Hark.emplDetails()


// Timestamps Date and ValueOf
// let timestamp = new Date ()
// let date =timestamp.valueOf();
// console.log(date);

// // Binary and Bitwise Operations

// // bitwise.js
// // JavaScript Bitwise operators
// // AND &
// // OR  |
// // XOR ^
// // NOT ~
// // Shift Left <<
// // Shift Right >>
// let y = 10;     //1010
// let i = 6;      // 110
// console.log( y.toString(2), i.toString(2) );
// // 1010
// //  110
// // 0010  2
// console.log("AND &",  (y & i) )
// let temp = 2;
// console.log( temp.toString(2) )

// //  1010
// //   110
// //  1110
// console.log("OR | ",  (y | i) );
// let tem = 14;
// console.log( tem.toString(2) )
// // 1010
// //  110
// // 1100  12 XOR
// console.log('XOR ^', (y^i) );

// // ~ 1010
// //   0101
// //  x  = -(x+1)  
// console.log('NOT ~', (~y) );  -11

// //PERMISSIONS
// // read, write, delete
// let perm = 6;

// let allowedToRead = (perm & 4)?true:false;
// let allowedToWrite = (perm & 2)?true:false;
// let allowedToDelete = (perm & 1)?true:false;
// //  0110  6
// //  0100  AND 4
// //  0100  4
// //  0010  6
// //  0100  AND 4
// //  0000  0

// for(let c = 0; c < 50; c++){
//     if(c&1){
//         //console.log('Odd');
//     }else{
//         //console.log('\t\tEven');
//     }
// }

// //101010 >> 4  = 10
// //  111  >> 1  = 3
// console.log( 7 >> 1 );

// //  111 << 1 = 1110   (14)
// //  1000 << 1 = 10000  (16)
// console.log( 7 << 1);
// console.log( 8 << 1);

// //  FF3300  - 24bit values  8bits Red, 8bits Green, 8 bits Blue
// // GREEN  - Shift 8 >>, AND 11111111  (255)
// //  111111110011001100000000  >> 8 = 1111111100110011
// //  1111111100110011
// //  0000000011111111
// //          00110011

// var color = 0xFF3300;
// var noBlue = color >> 8;
// var green = noBlue & 255;
// console.log('GREEN', green, green.toString(16))


// counting in decimal, binary
//  0      0       
//  1      1       2^0
//  2     10       2^1
//  3     11
//  4    100       2^2
//  5    101
//  6    110
//  7    111
//  8   1000       2^3
//  9   1001
// 10   1010
// 11   1011
// 12   1100
// 13   1101
// 14   1110
// 15   1111
// 16  10000       2^4


// logical operators &&
// let dogs = {
//     name: 'Luna',
//     age: 2,
//     isHappy: true,
// }
// if (!!dogs.isHappy && dogs.name){
//     console.log ( dogs.name, 'is not happy')
// }else{
//     console.log(dogs.name, 'is happy')
// }


//Removing  duplicate from Array
// let names = ['John', 'Paul', 'George', 'Ringo'];
// let nums = [63, 69, 72, 88, 92, 93, 96, 98];

// for (let i = 0; i < 4; i++){
//     let rnd = Math.floor(Math.random()*names.length) ; 
    // console.log(names[rnd]);
// }
// solving the problem

// for (let i = 0; i < 4, names.length ; i++) {
//     let nametemp = names
    
//     let rnd = Math.floor(Math.random() * nametemp.length);

//     console.log(nametemp[rnd]);
//     nametemp.splice(rnd, 1);
    
// }

// console.log('\n');
// let min = 50;
// let max = 100;
// let range = max - min;
// for(let i = 0; i < 9; i++){
//     let rnd = Math.floor( Math.random() * range) + min;
//     // nums.push(rnd);
//     // console.log( nums.sort() );
// }

// while( nums.length < 17 ){
//     let rnd = Math.floor( Math.random() * range) + min;
//     if( !nums.includes(rnd) ){
//         nums.push(rnd);
//        console.log( nums.sort() );
//     }else{
//         log('skipped duplicate');
//     }
// }
// let arr = [63, 69, 72, 88, 92, 93, 96, 98];
// function getRandomNumber(min, max) {
//      min = 50
//      max = 100
//     return Math.random() * (max - min) + min;
//   }
//   for (let i = 0; i < arr.length; i++) {
//    arr.push(getRandomNumber())
    
//   }
//   const randomNum = getRandomNumber(0, 100);
//   console.log(randomNum)

// const obj1 = { foo: "bar", x: 42 };
// const obj2 = {  y: 13 };
// const obj3 = {  z: 23 };

// const merge = (...objects) =>
//   objects.reduce((acc, cur) => ({ ...acc, ...cur }));

// const mergedObj1 = merge(obj1, obj2, obj3);
// console.log(mergedObj1)
// // { foo: 'baz', x: 42, y: 13 }

// // Math.floor(Math.random() * (range + 1)) + minimum
// // Number line
// // 0---------1---------2---------3

// let num;
// let classes = ['highlight', 'active', 'sale'];
// let people = ['John Bonham', 
//               'Robert Plant', 
//               'John Paul Jones', 
//               'Jimmy Page'];

// //Number between 1 and 3
// num = Math.floor(Math.random() * (2+1)) + 1;
// console.log(num);

// //Random person
// let max = people.length-1; //4-1 = 3
// let min = 2;
// num = Math.floor(Math.random() * (max-min+1) );// +min;
// console.log( people[num] )

// //Random CSS class
// let max2 = classes.length-1;
// let min2 = 0;
// num = Math.floor(Math.random()* (max2+1))+min2;
// console.log( classes[num] );

// //Number between 500 and 1000
// num = Math.floor(Math.random() * (500 + 1) ) + 500;
// console.log(num);

// Looping and Recursion
// let count = 0;
// const start = 60;
// //Looping
// console.log('Starting the loop');
// for(let i=0; i<10; i++){
//     console.log('inside loop', i);
// }
// console.log('Ended the loop');

// // Recursion
// let recky = function(){
//     console.log('inside recky', count);
//     count++;
//     if(count<10){
//         recky();
//     }
// }
// console.log('Starting the recursion');
// recky();
// console.log('ending the recursion');

// Recursion countdown
// let countdown = function(size){
//     console.log('x'.repeat(size));
//     size = Math.floor( size * 0.95);
//     if(size > 2){
//         countdown(size);
//     }
// }
// countdown(start);

//Asynchronous methods
// AJAX, Database, Promises, Timers...

// console.log('Start:','about to fetch');
// for(let c=0; c<2; c++){
//     let d = fetch('https://restcountries.com/v3.1/all')
//     .then(response=>response.json())
//     .then(data=>{ console.log('data', JSON.stringify(data) ) })
//     console.log('Promises:',c, d);
// }
// console.log('after fetch???');

// Synchronous And Asynchronous
// let a = 5;
// let b = 50;

// let a1 = (function (){ return 5 })()

// let b1 = (function (){ return 50 })()

// console.log( a1 );
// console.log( b1 );

// let a2 = function(num){ return 5*num }
// let b2 = function() { return 50 }

// console.log("syn: ", a2(b2()) );

// /**
// setTimeout, callbacks for geolocation, Promises, fetch, ajax, filesystem interaction, database calls, even DOM event listeners
// **/

// let a3 = 100;
// setTimeout( function(){ a3++;  }, 0);
// console.log(a3);
// setTimeout( function(){ console.log(a3) }, 0)

// let p = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         resolve("Yo!");
//     }, 0)
    
// });
// console.log(p);
// setTimeout(function(){
//     console.log(p);
// }, 10);
// console.log(p);
// p.then(function(val){
//     console.log(val);
// })


// // Callbackfunction

// const app = {
//     geolocation: (good, bad) => {
//     //requires two functions be passed in
//     try{
//         //try to do something
//         let pos = {
//             latitude:0, longitude: 0
//         }
//         pos.latitude = (Math.random() * 180) - 90;
//         pos.longitude = (Math.random() * 360) - 180;
//         //latitude and longitude were backwards in the video
//         if(Math.round(Math.random()) === 1){
//             throw new Error("my simulated geolocation failure")
//         }else{
//             good.call(app.geolocation, pos, 17);
//         }
//     }catch(errOR){
//         //if it fails we will call the bad function
//         //and pass along the error object
//         bad.call(app.geolocation, errOR, 42);
//     }
// }
// }

// let success = (position, num) => {
// console.log(`You are "at" position ${num} latitude: ${position.latitude}, longitude: ${position.longitude})`);
// }

// let fail = (err, num) => {
// console.warn('Something bad happened', err.message, num);
// }

// app.geolocation(success, fail);

// Switch statement 

// let fetch = () => {
//     let codes = [
//         {'code': 200, 'text': 'Ok'},
//         {'code': 201, 'text': 'Created'},
//         {'code': 304, 'text': 'Not Modified'},
//         {'code': 400, 'text': 'Bad Request'},
//         {'code': 401, 'text': 'Unauthorized'},
//         {'code': 403, 'text': 'Forbidden'},
//         {'code': 404, 'text': 'File Not Found'},
//         {'code': 405, 'text': 'Method Not Allowed'},
//         {'code': 500, 'text': 'Internal Server Error'},
//         {'code': 503, 'text': 'Service Unavailable'},
//         {'code': 600, 'text': 'Not a real code'}];
//     let num = Math.floor(Math.random() * codes.length);
//     return codes[num];
// }

// let response = fetch();
// console.log(response);
// switch(response.code){
//     case 200:
//     case 201:
//         console.log('All is good', response.text);
//         break;
//     case 304:
//         console.log('Redirect', response.text);
//         break;
//     case 400:
//     case 401:
//     case 403:
//     case 404:
//     case 405:
//         console.log('Problem', response.text);
//         break;
//     case 500:
//     case 503:
//         console.log('Server Error', response.text);
//         break;
//     default:
//         console.log(response.code, response.text);
// }



// let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Todd', 'Badger', 'Pete'];


// //1. Find out if 'Todd' or 'Steve' is in the Array
// let bool = names.includes('Steve');
// //log(bool);

// //2. Find out what positions in the Array are 'Gus' or 'Tuco'
// let pos = names.indexOf('Tuco');
// //log(pos)

// //3. Find out whether anyone in the list has a capital letter 'M' in their name
// let some = names.some((name)=>{
//     if(name.indexOf('R') > -1){
//         return true;
//     }
//     //return false;  //undefined will be return
// });
// //log(some);

// //4. Find the first name in the list that is more than 5 characters plus after 'Walter'
// let find = names.find((name)=>{
//     if( name.length > 6){
//         return name;
//     }
// })
// console.log(find)

// substring and substr methods

// let str = "Nobody calls me Lebowski, you got the wrong guy, I'm the Dude, man.";


// console.log( str.substring(16, 24)  );
// console.log( str.substring(16)  );
// console.log( str.substring(16, 0)  );

// console.log( str.substr(16, 0)  );
// console.log( str.substr(16, 1)  );
// console.log( str.substr(16, 10)  );
// console.log( str.substr(-16, 10)  );

// finding and replace in js

// let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae suscipit optio ab et soluta illo numquam at, eos qui similique voluptates sapiente quis quisquam libero, dicta neque consequuntur. Asperiores, temporibus.';

// let find = ' ';
// let replace = '';

// //let counter =0;
// let newPara = "".concat(paragraph);

// while( newPara.indexOf(find) > -1 ){
//     newPara = newPara.replace(find, replace);

// }
// console.log( newPara);



//Trimming and padding strings
// trim(), trimLeft(), trimRight()
// padStart(minLength [,padString]), padEnd()


// let space = 'Sterling';
// let longname = '    Sterling Archer     ';



// console.log(longname.trim() );


// console.log( space.padStart(25, 'asdf')  );
// console.log( space.padEnd(25, 'asdf')  );
// console.log( space.padEnd(5));
// console.log( space.padEnd(25));

// rounding numbers in js
// Math.round(), floor(), ceil() - returns Number
// Number.toFixed(), toExponential(), toPrecision() -returns String
// Number.parseInt(), parseFloat() - returns Number
// 

// let number1 = 1111.467;
// let str1 = "1111.567 tonnes of apple sauce";
// let dec1 = 0.000161;
// let log = console.log;

// //log( Math.round(number1) );
// //log( Math.floor(number1) );
// //log( Math.ceil(number1) );

// //log( number1.toFixed(1) );
// //log( number1.toExponential(6) );
// //log( dec1.toPrecision(5) );

// log( parseInt(str1) );
// log( parseFloat(str1) );

// Primitives and Objects
// Data Types in JS
// 
// boolean, null, undefined, number, string, symbol
//
// Objects - values in memory that can be reference by an identifier

// let nm = 'bob';
// //String
// let nm2 = new String('bob');
// nm2.toUpperCase();
// let nm3 = nm.toUpperCase(); // 'BOB'

// console.log( typeof nm);   //string - tells us what kind of auto-box wrapper we get

// //let o = new Object();
// let o = {
//     prop1: 1,
//     prop2: false,
//     prop3: 'string',
//     prop4: function(){
        
//     }
// };

// //auto-boxing - putting a primitive value into a wrapper of the correct type

// let s1 = 'string';
// let s2 = s1;       //the primitive value gets COPIED into the new variable
// console.log(s1, s2);  //actually two different spots in memory
// s2 = 'gnirts';   
// console.log(s1, s2);

//Array custom sort() function
// let log = console.log;

// let movies = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind', 'Good Will Hunting', 'Layer Cake', 'Casino Royale', 'Almost Famous'];

// let numbers = [40,16,67,345,22,23,142,63,59,283];

// let people = [
//     {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
//     {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
//     {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
//     {"id":258, "name":"Pris", "email":"pris@replicant.io"}
// ];

// //the problem with numbers
// log( movies.sort() );  //ok
// log( numbers.sort() );  //NOT ok

// //the solution - using a custom sort
// let sortedNum = numbers.sort( (a, b)=>{
//     log( 'sorting', a, b);
//     if( a > b) return 1;
//     else if(b > a) return -1;
//     else return 0;
// } );
// log(sortedNum);

// //sorting array of objects - using a custom sort
// //sort by person name
// let sortedPeople = people.sort( (a, b) => {
//     if( a.id > b.id) return 1;
//     else if(b.id > a.id) return -1;
//     else return 0;
// } );
// log( sortedPeople );


// Iterable and Enumerable
// let joe = ['grandchild', 'child', 'kid', 'son', 'daughters']
// joe.elf = 'firstChild'
// Object.defineProperty( joe, 'children', {
//   value: 'father',
//   enumerable: true
// } );

// let joe2 = {
//   'town':['Nairobi', 'Mombasa', 'Nakuru', 'Eldoret'],
//   'race':['kenya', 'sports','music']
// }

// joe2.creator = 'J.N Hudson';
// Object.defineProperty( joe2,'age', {
//   value:'first',
//   enumerable: false
// })

// // This are Iterable work with values inside the Array
// // for (const man of joe ) {
// //   console.log( man)
// // }

// // // This is an Enumerable
// // for (const man in joe) {
// //   console.log(man);

// // }

// for (const county of joe2.town) {
//   console.log(county);
// }
// for (const county of joe2.creator) {
//   console.log(county);
// }

/****************************************
ES6 Iterators and Generators
Arrays, Strings, Maps, Sets, NodeLists - built-in iterators
{Object} => Iterator => Generator
****************************************/
// let log = console.log;
// let characters = ['Finn','Poe', 'Rey', 'Kylo', 'Luke', 'Leia']

// function* genny(){
//     let i = 0;
//    yield characters[i];
//     i++;
//     yield characters[i];
//     i++;
//     yield characters[i];
//     i++;
//     yield characters[i];
//     i++;
//     yield characters[i];
//     i++;
//     yield characters[i];
//     i++;
//     yield characters[i];
//     i++;
//     yield characters[i];
// }

//let iter = genny();

// Basic iterator
// 
//log(iter)
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());

// custom iterator
// let starwars8 = {
//     title: 'The Last Jedi',
//     director: 'Rian Johnson',
//     year: 2017,
//     boxOffice: '1.3B'
// }


// let count = -1;
// let SW8 = {
//     [Symbol.iterator]: function(obj){
//         return {
//             next: ()=>{
//                 count++;
//                 switch(count) {
//                     case 0:
//                         return {
//                             value: obj.title, 
//                             done: false}
//                     case 1:
//                         return {
//                             value: obj.year,
//                             done: false
//                         }
//                     case 2:
//                         return {
//                             value: obj.director,
//                             done: false
//                         }
//                     case 3 :
//                         return { value: undefined, done: true}
//                     default:
//                         return { value: undefined, done: true}
//                 }
//             }
//         }
//     }
// }

// let data = SW8[Symbol.iterator](starwars8);
// log( data.next() );
// log( data.next() );

// log( data.next() );
// log( data.next() );
// log( data.next() );

// //
// //for(let p of starwars8){
// //    for of loops are using the .next( ) method behind the scenes
// //}




// let Obj1 = {
//   title: 'The Last Jedi',
//   director: 'Rian Johnson',
//   year: 2017,
// };

// let Obj2 = {
//   title: 'The Hobbit',
//   director: 'Peter Jackson',
//   boxOffice: '1.017B',
// };

// let myGenerator = {
//   [Symbol.iterator]: function () {
//     let count = -1; //reset the count
//     return {
//       next: () => {
//         count++;
//         switch (count) {
//           case 0:
//             return {
//               value: this.title ? this.title : 'No title property',
//               done: false,
//             };
//           case 1:
//             return {
//               value: this.year ? this.year : 'No year property',
//               done: false,
//             };
//           case 2:
//             return {
//               value: this.director ? this.director : 'No director property',
//               done: false,
//             };
//           default:
//             return { value: undefined, done: true };
//         }
//       },
//     };
//   },
// };

// Object.setPrototypeOf(Obj1, myGenerator);
// Object.setPrototypeOf(Obj2, myGenerator);

// let data1 = Obj1[Symbol.iterator](); //create the iterator for Obj1
// //this sets count to -1
// for (let prop of Obj1) {
//   console.log(prop);
// }
// console.log('\n\n');

// let data2 = Obj2[Symbol.iterator](); //create the iterator for Obj2
// //this sets count to -1 again
// for (let prop of Obj2) {
//   console.log(prop);
// }


/****************************
What is a Polyfill
How to create a Polyfill
NOT recommended on DOM Objects
Array - justLetter - only keep 
    Strings with a specific letter
    
// Date - f$$kinDay - return the day
//     of the week with prefix
// ****************************/


// if(! Array.prototype.sort){
//   console.log('sort does not exist');
// }

// if(! Array.prototype.justLetter ){
//     //log('justLetter method missing')
//     Array.prototype.justLetter = function(letter){
//         let arr = this.filter((item)=>{
//             if(typeof item != 'string') return false;
//             return item.indexOf(letter) > -1;
//         });
//         return arr;
//     }
// }
// let names = ['abc', 'def', {'a':1}, 'cab', 'dac', 123];
// console.log( names );
// console.log( names.justLetter('d') );

// if( ! Date.prototype.f$$kinDay ){
//    //console.log('f$$kinDay method missing')
//     Date.prototype.f$$kinDay = function(){
//         switch(this.getDay()){
//             case 0:
//                 return 'Today is f$$ckin Sunday';
//             case 1:
//                 return 'Today is f$$ckin Monday';
//             case 2:
//                 return 'Today is f$$ckin Tuesday';
//             case 3:
//                 return 'Today is f$$ckin Wednesday';
//             case 4:
//                 return 'Today is f$$ckin Thursday';
//             case 5:
//                 return 'Today is f$$ckin Friday';
//             case 6:
//                 return 'Today is f$$ckin Saturday';
            
//         }
//     }
// }

// console.log( new Date().f$$kinDay() )


        /***********************
        In NodeJS we only have the JSON methods.
        Beyond that you will have to bring in
        an NPM module or write your own
        custom method.
        ***********************/
        /***********************
        Deep Copy methods
        1. JSON.parse(JSON.stringify())
        2. Service Workers postMessage() onmessage
        3. History API history.pushState(obj, title) history.state
        4. Notification API new Notification("title", {data: obj} ).data
        5. Build a custom recursive function
        ***********************/
        
//         let shallowArr = [123, 
//             'bob', 
//             true, 
//             null, 
//             undefined];

// let deepArr = [123, 
//          'bob', 
//          true, 
//          ['Hank', 'Brent', 'Lacy'], 
//          {'Rouleau':'Dog River', 
//           'Wilcox': 'Woolerton'}
//         ];

// let deepObj = {
// 'characters': ['Wanda','Davis','Emma','Karen'],
// 'places': ['Corner Gas','Ruby','Foo Mart'],
// 'grad68': false,
// 'seasons': 5
// }

// let newObj = {...deepObj};
// //newObj.places[0] = 'Ottawa'; //changed inside ref.
// //newObj.places = ['Ottawa', 'Calcutta']; //new ref
// console.log(newObj, deepObj);
// let otherObj = JSON.parse(JSON.stringify(deepObj));
// otherObj.places[0] = 'Ottawa';
// console.log(otherObj, deepObj);

// /*********************
// Shallow Copy Method examples
// 1. arr1.slice(0)
// 2. [].concat(arr1)
// 3. Spread Operator
// 4. Object.create({}, obj)
// 5. Object.assign({}, obj)
// 6. Array.from(arr1)
// *********************/
// let s = 'steve';
// let g = s;
// s = 'new value';
// //console.log(s, g);

// let arr = Array.from(shallowArr);
// //let arr1 = [...shallowArr];
// shallowArr[0] = 456;
// //console.log(arr, shallowArr);

/*************************************
Using async and await with Promises
and error handling with Promises
*************************************/


// dothings();

// async function dothings(){
//     //delay(1000).then(()=>{}).catch(err=>{})
//     let p = await delay(1000);
    
//     if(p){
//        console.log('response from Promise', p);
//     }else{
//        console.log('No result the Promise must have rejected')
//     }
    
// }

// function delay(ms) {
//     //fetch() is just a Promise too
//     return new Promise((resolve, reject)=>{
//         //resolve(ms);
//         //reject( new Error('bad things happened') )
//         setTimeout(resolve, ms, 42);
//         //setTimeout(reject, ms, new Error('bad things happened'));
//     }).catch(err=>log('err', err.message))
// }

/********************************************
Maps - Like Objects they have keys and values
    (unique keys)
    .size
    .set(key, value)
    .delete(key)
    .get(key)
    .has(key)
    .keys() - returns Iterator with array of keys
    .values() - returns Iterator with array of values
    .entries() - returns Iterator with array of [key, value]
    .clear()
    .forEach()
Sets - Like Arrays they have values
    (unique values) - remove non-unique values from array
    .size
    .add(value)
    .delete(value)
    .entries() - returns Iterator with array of [value, value]
    .values() - returns Iterator with array of values
    .has(value)
    .clear()
    .forEach()
********************************************/


// let obj = {
//     prop1: 123,
//     prop2: 'abc'
// }
// obj.prop2 = 'def'
// console.log( obj)

// //let map = new Map(obj); //fails - Objects are not iterable
// let map = new Map();
// map.set('prop1', 123)
// map.set('prop2', 'abc');
// map.set('prop2', 'def');
// console.log(map)

// let names = ['Rob', 'Bran', 'Arya', 'Sansa', 'Rickard'];
// names.push('Bernard');
// let set1 = new Set(names);
// //easy way to remove duplicates from an Array
// console.log(names);
// console.log(set1);

// const myMap = new Map();

// // // Add new elements to the map
// // myMap.set("bar", "foo");
// // myMap.set(1, "foobar");

// // // Update an element in the map
// // myMap.set("bar", "baz");

// // myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
// // console.log(myMap);


// /*****************************************
// Chaining Objects and Methods together
// How it works and why you want to do it
// *****************************************/

// // let myObj = function(nm){
// //     this.name = nm;
// //     //when used with 'new' it will return an instance
// // }

// // myObj.prototype.capitalize = function(){
// //     this.name = this.name.substring(0,1).toUpperCase() + this.name.substring(1);
// //     return this;
// // }

// // myObj.prototype.upper = function(){
// //     this.name =  this.name.toUpperCase();
// //     return this;
// // }

// // myObj.prototype.getName = function(){
// //     console.log(this.name);
// // }

// // let bob = new myObj('bob');
// // let cole = new myObj('cole');

// // let x = bob.getName();
// // console.log(x)
// // cole.getName();

// // bob.capitalize().upper().getName();
// // cole.capitalize().getName();

// // let arr = ['Cole', 'Cara', 'Bree', 'Riley', 'Alex', 'Devon'];
// // arr.sort().forEach( item => {
// //     console.log(item)
// // })

// let posts = {};
// posts[Symbol.iterator] = function(){
//     const URL = "//jsonplaceholder.typicode.com/posts";
//     return {
//         next: async function(){
//             //early pre-emptive move
//             let rand = Math.random();
//             if(rand > 0.7){
//                 return {
//                     value: undefined,
//                     done: true
//                 };
//             }
//             let request = new Request(URL+`?r=${rand}`, {
//                 method: 'GET',
//                 mode: 'cors'
//             });
            
//             let response = await fetch(request);
//             //need to add catch()
//             let data = await response.json();
//             console.log('array of posts fetched', data);
//             return {
//                 value: data,
//                 done: false
//             }
//         }
//     }
// }

// let output = document.getElementById('output');
// let main = document.querySelector('main');
// main.addEventListener('click', d);

// function d(ev){
//     //start getting data
//     //output.textContent += JSON.stringify(d);
//     let iterator = posts[Symbol.iterator]();
    
//     (async function getData(){
//         let data = await (iterator.next());
//         if(data.value && !data.done){
//             output.textContent += '\r\n' + JSON.stringify(data.value);
//             console.log('getData', data.value);
//             setTimeout(getData, 2000);
//         }else{
//             console.log( 'Done:', data.done );
//             output.textContent += '\r\n DONE.';
//         }
//     })();
//     // IIFE
//     //  for await( let val of obj){ }
// }


/***********************************
Typed Arrays in JavaScript
Int8Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
-128 to 127
Uint8Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
0 - 255
Uint8ClampedArray - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
0 - 255
Int16Array - like Int8Array but 16 bits in length
-32768 to 32767
Uint16Array - like Uint8Array but 16 bits in length
0 to 65535
Int32Array - like Int8Array but 32 bits in length
-2147483648 to 2147483647
Uint32Array - like Uint8Array but 32 bits in length
0 to 4294967295
Float32Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
1.2x10-38 to 3.4x10 38
Float64Array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
5.0x10 -324 to 1.8x10 308
ArrayBuffer - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
- used to represent a generic, fixed-length raw binary data buffer.
DataView - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
Typed Arrays are used by: WebGL, Canvas, Web Audio API, XMLHttpRequests, Fetch API,  WebSockets, Web Workers, Media Source API and File APIs. 
***********************************/

//new Int8Array(length(bytes) | buffer | TypedArray);
// array of 8-bit integers
// most Array methods are available on TypedArrays too

// let buffer = new ArrayBuffer(16);
// //create a 16 byte buffer

// let dv1 = new DataView(buffer);
// //create a DataView to be able to access/set whole buffer
// let dv2 = new DataView(buffer, 10, 3);
// //start at slot 10, get 3 bytes


// dv1.setInt8(11, 42);
// //put "42" in slot 11 of the buffer through view1
// let num = dv2.getInt8(1);
// console.log(num)
// console.log( dv2.getInt8(0))
// console.log( dv2.getInt8(2))
// // retrieve the 42 from the 2nd byte in view2 which was 
// // the 11th byte in the buffer

// const int16View = new Int16Array(buffer);

// for (let i = 0; i < int16View.length; i++) {
//   console.log(`Entry ${i}: ${int16View[i]}`);
// }

// const typedArray = new Uint8Array([1, 2, 3, 4]);
// const normalArray = Array.from(typedArray);
// console.log(typedArray);
// console.log(normalArray);

/****************************************
Creating Objects
1. Object literals
2. Object.create() with descriptors
3. function + new
4. factory function with closures
5. JS Class
****************************************/
// let log = console.log;


// // 1. Object literals ////////////////////////////////////
// let obj1 = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: function(){
//         console.log(this.prop1);
//     }
// }
// log(1, obj1);
// obj1.prop3();
// log('------------------------------')


// // 2. Object.create ////////////////////////////////////
// let proto = {
//     prop3: function(){
//         console.log(this.prop1);
//     }
// }
// let obj2 = Object.create({}, {
//     prop1: {
//         writable: true,
//         enumerable: true,
//         configurable: true,
//         value: 'value1'
//     },
//     prop2: {
//         writable: true,
//         enumerable: false,
//         configurable: true,
//         value: 'value2'
//     }
// });
// obj2.prop3 = function(){
//     console.log(this.prop1);
// }
// log(2, obj2);
// obj2.prop3();
// log('------------------------------')


// // 3. new + function ////////////////////////////////////
// let Obj = function(v1, v2){
//     this.prop1 = v1;
//     this.prop2 = v2;
//     this.prop3 = function(){
//         console.log( this.prop1 );
//     }
// }
// let obj3 = new Obj('value1', 'value2');
// log(3, obj3);
// obj3.prop3();
// log('------------------------------')


// // 4. factory function with closures
// let ObjFF = function(v1, v2){
//     let _prop1 = v1;
//     let _prop2 = v2;
//     return {
//         prop1: _prop1,
//         prop2: _prop2,
//         prop3: function(){
//             console.log(_prop1);
//         }
//     }
// }
// let obj4 = ObjFF('value1', 'value2');
// log(4, obj4);
// obj4.prop3();
// log('------------------------------')


// // 5. JS Class
// class ObjC{
//     constructor(v1, v2){
//         this.prop1 = v1;
//         this.prop2 = v2;
//     }
//     prop3() {
//         console.log( this.prop1 );
//     }
// }
// let obj5 = new ObjC('value1', 'value2');
// log(5, obj5);
// // obj5.prop3();


// JSON file 
// {
//     "prop1": "string",
//     "prop2": "string",
//     "prop3": 123,
//     "prop4": ["array", "value", "obj2", 123],
//     "prop5": {
//         "p1": "v1",
//         "p2": "v2",
//         "p3": false,
//         "p4": 654,
//         "p5": null
//     },
//     "prop6": null,
//     "prop7": true
// }



//JavaScript
//Object literals

// let Obj2 = {
//     'prop1': "string",
//     "prop2": 'string',
//     prop3: 123,
//     prop4: ['array', "value", obj2, 123],
//     prop5: function(){
//         console.log('message');
//     },
//     prop6: null,
//     prop7: true
// }

// let obj2 = function(){
//     console.log('obj2');
// }



// closure functions
// let counter = 0;
// let names = ['Bob','Tina','Gene','Mort','Louise','Ollie'];


// //closure so we are good
// names.forEach( looper );


// //closure so we are good
// for(let i=0; i<names.length; i++){
//     looper(names[i], i, names);
// }


// //closure so we are good
// for(var i=0; i<names.length; i++){
//     looper(names[i], i, names);
// }


// function looper(item, index, arr){
//     setTimeout(function(){ console.log(index, item)}, 1000*index);
//     //this function creates the closure
//     if(counter<6)
//         console.log('forEach', index, item);
//     else if(counter>5 && counter < 12)
//         console.log('for let', index, item);
//     else
//         console.log('for var', index, item);
    
//     counter++;
// }


// //no closure. Sad face.
// for(var i=0; i<names.length; i++){
//     setTimeout(function(){ console.log('SAD', i, names[i])}, 1000*i);
//     //this bit fails
// }

// //rework to create closure
// for(var i=0; i<names.length; i++){
//     //version one - works
//     setTimeout( (function(num){ 
//         console.log('ONE', num, this[num])}).bind(names, i) 
//     , 1000*i);
//     //version two - works
//     setTimeout( (function(num){ 
//         console.log('TWO', num, names[num])
//     }), 1000*i, i);
//     //the key is to pass a copy of i into the function to be used later... the closure
// }


/**********************************
Shallow Copying and chained shift()
**********************************/

// let a = [[1], [2], [3]];
// let b = [...a];
// console.log('1a',a);
// console.log('1b',b);

// //let c = b.shift().shift(); 
// //console.log(c);



// let d = b.shift();
// console.log('2a',a);
// console.log('2b',b);
// //
// let e = d.shift();
// console.log('3a',a);
// console.log('3b',b);
// //
// console.log(d);
// console.log(e);

// d.push(123);
// console.log(d);
// console.log(a);



// // Finding array that matches in an Object 

// // Shortcut for looping over array

// // Array.prototype.indexOf()   //returns index number
// // Array.prototype.contains()  //returns boolean
// // Array.prototype.filter()    //returns array
// // Array.prototype.some()      //returns boolean



// let names = ['Archer', 'Lana', 'Cyril', 'Pam', 'Cheryl'];

// let pos = names.indexOf('Pam');
// //log( pos, names[pos] );

// //remove the element
// names.splice(pos, 1);
// //log(names);

// let movies = [
//     {id:1, title:'Shaun of the Dead'},
//     {id:2, title:'Man Up'},
//     {id:3, title:'Terminal'},
//     {id:4, title:'The End of the World'},
//     {id:5, title:'Hot Fuzz'},
// //     {id:6, title:'Mission Impossible: Fallout'}
// // ]

// // let manUp = {id:2, title:'Man Up'};
// // pos = movies.indexOf(manUp);
// // console.log('Man Up in position', pos);

// // let iterations = 0;

// // let matchingMovie = movies.filter( (obj) => {
// //     iterations++;
// //     if(obj.id === manUp.id){
// //         return true;
// //     }
// //     return false;
// // })
// // console.log( matchingMovie[0], 'after looping', iterations );
// // iterations=0;

// // let found = movies.some( (obj, index) => {
// //     iterations++;
// //     if(obj.id === manUp.id){
// //         pos = index;
// //         return true;
// //     }
// //     return false;
// // })
// // //console.log( found.toString(), 'after looping', iterations);
// // log( movies[pos], 'after looping', iterations);

// // Array find
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// // Array findIndex
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


// let cities = ["Ankara", "Istanbul", "Antalya", "Bursa", "Trabzon"];
// let city = "Bursa";
// let chars = 7;

// let match1 = cities.find(item => {
//     if (city === item) return true;
// });
// console.log("item from cities that matched was", match1);


// let match2 = cities.find(item => chars === item.length);
// console.log('item with matching length was', match2);

// let index = cities.findIndex(
//     item => item.toLocaleLowerCase().indexOf("t") > -1
// );
// console.log(`Letter "t" found in item at index ${index}`);

// let person1 = {
//     id: 123,
//     name: "Recep",
//     town: "Istanbul"
// };
// let match3 = cities.find(function (item) {
//     if (item === this.town) return true;
// }, person1);
// console.log(person1.name, "lives in matching town", match3);

// trim, trimStart, trimEnd
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// space, tab, no-break space, LF, CR

// let nbsp = '\u00A0';
// let cr = '\u000D';
// let lf = '\u000A';
// let tab = '\t';
// let sentence = `  This is not the sentence you are looking for. ${nbsp} `;
// let trimmed = sentence.trimEnd();

// console.log('1:' + sentence + trimmed);
// console.log('2:' + trimmed + sentence);


/***
 * Padding Strings
 * 
 * padStart(len[, filler])
 * padEnd(len[, filler])
 * 
 * Create an id that needs to be a specific length
 * Tab delimited values
 * Hex value random colours # F10F0F
 */
 

// // 1. id numbers that have to be 9 digits
// let id = 432177;
// //log(id.toString().padStart(9, '0'))
// //increase length to 9 characters. Use '0' to pad

// // fixed length file format
// let userid = 123456; //first 10 chars
// let user = 'Bob'; //next 10 chars
// let email = 'bob@work.org'; //final 30 chars
// let fullLine = id.toString().padStart(10, '0') + user.padStart(10) + email.padStart(30);

// //log(fullLine);

// //random hex colours
// for (let i = 0; i < 25; i++) {
//     let red = Math.floor(Math.random() * 255).toString(16);
//     let green = Math.floor(Math.random() * 255).toString(16);
//     let blue = Math.floor(Math.random() * 255).toString(16);
//     let colour = '#' + red.padStart(2, '0') + green.padStart(2, '0') + blue.padStart(2, '0');
//     console.log(red, green, blue, colour);
// }

// Regex 

// * 0 or more matches
// + 1 or more matches
// ? 0 or 1 match
// ^ matches the start of the string or line
// $ matches the end of the string or line
// \ signifies an escape sequence
// . matches any single character except newline
// ( ) capturing group. Save to reuse later
// | used as a logic OR inside a capturing group
// [abc] character set. Matches one of the things in the brackets
// [^abc] Negated character set. Matches anything except...
// [a-zA-Z] all upper and lowercase letters. You can specify any range.
// {1} exact number of matches. Comes after a set or group.
// {1,5} inclusive range for number of matches
// {1,} minimum number of matches
// {,5} maximum number of matches
// \s any whitespace character
// \S any NON whitespace character
// \d any digit. Same as [0-9]
// \D any NON digit
// // \w any word character. Same as [a-zA-Z0-9_]
// // \W any NON word character. Same as [^a-za-z0-9_]
// // \b word boundary
// // \B NON word boundary
// // [\b] - escape sequence for a backspace character
// // \u0404 - 4 digit unicode hex value for a character



// // // chained  variables Declaration 
//  (function f1() {
//      var a = 1, b = 1;
//      var x = y = 2;
//  })();
//  (function f2() {
//      let j = 1, k = 1;
//      let r 
//       s = 2;
//  })();

 //what are the values for a, b, x, y, j, k, r, s in the global scope?
// // //which of these variables will exist on the window/global object?
//  console.log(global.s);


// // conditional operand selectors

// // log(true && true); // true
// // log(false && true); // false
// // log(true || false); // true
// // log(false || true); // true

// // log(0 && true); //0 - && looks at the first and if it is truthy renders the second
// // log(1 && true); //true
// // log(0 || false); // false
// // log(1 || true); // 1

// // log(0 && "text"); // 0
// // log(1 && "text"); // text
// // log(0 || "text"); // text
// // log(1 || "text"); // 1

// // log(false && "text"); //false
// // log(true && "text"); //text
// // log(false || "text"); // text
// // log(true || "text"); // true

// //react will render the following primitives
// // 0, 1, Null, Strings, NaN
// //react will not render
// // booleans, undefined, null, empty strings, empty arrays | objects

/**
 * Creating objects with Classes
 * Versus objects with prototypes
 * Since JavaScript is not a Class-based language
 * what is happening behind the class syntax?
 */

// let PersonC = class {
//   constructor(nm, id) {
//     this.name = nm;
//     this.id = id;
//   }
//   getDetails() {
//     return `${this.name} :: ${this.id}`;
//   }
// };
// let bob = new PersonC("Bob", 123);
// console.log(bob.getDetails(), bob.name);

// let EmployeeC = class extends PersonC {
//   // EmployeeC prototype links to PersonC prototype
//   constructor(nm, id, salary) {
//     super(nm, id);
//     this.salary = salary;
//   }
//   employeeInfo() {
//     //exist on the prototype of EmployeeC
//     return `${this.name} :: ${this.id} :: ${this.salary}`;
//   }
// };
// let noomi = new EmployeeC("Noomi", 456, 8500000);
// console.log(noomi.employeeInfo());

// ///////////////////////////////////////////////

// let PersonP = function(nm, id) {
//   this.name = nm;
//   this.id = id;
// };
// PersonP.prototype.getDetails = function() {
//   return `${this.name} :: ${this.id}`;
// };
// let fred = new PersonP("Fred", 321);
// console.log(fred.getDetails(), fred.name);

// let EmployeeP = function(nm, id, salary) {
//   PersonP.call(this, nm, id);
//   this.salary = salary;
// };
// Object.setPrototypeOf(EmployeeP.prototype, PersonP.prototype); //extends NOTE: THIS LINE WAS CHANGED
// EmployeeP.prototype.employeeInfo = function() {
//   return `${this.name} :: ${this.id} :: ${this.salary}`;
// };
// let mary = new EmployeeP("Mary", 654, 65000);
// console.log(mary.employeeInfo());

// prototype chaining 
/**
 * linking prototype objects to build a prototype chain
 * __proto__ vs Object.getPrototypeOf(obj) & Object.setPrototypeOf(obj)
//  */

// 1.  obj --> otherProto.prototype  --> Object.prototype --> null
// let otherProto = function() {
//   this.prop1 = 456; // this means the instance of the object we are creating
//   this.inner = function() {
//     console.log("inner method on instance");
//   };
//   //automatically returns the instance of the object
// };
// otherProto.prototype.someMethod = function() {
//   console.log("this is otherProto");
// };
// let obj = new otherProto();
// console.log(obj.prop1); // 456
// obj.inner();
// obj.someMethod();
// obj.toString();
// obj.__proto__.inner(); // fail
// Object.getPrototypeOf(obj).inner(); // fail
// Object.getPrototypeOf(obj).someMethod(); //yes

// 2.protoObj --> Object.prototype --> null
// let protoObj = {
//   prop1: 456,
//   someMethod: function() {
//     console.log("this is someMethod");
//   }
// }; // let protoObj = new Object();  protoObj.prop1 = 456; protoObj.someMethod = function(){}
// //Object.getPrototypeOf(protoObj).otherMethod = function(){}
// protoObj.__proto__.otherMethod = function() {
//   console.log("this is otherMethod");
// };

// //3.  childObj --->  protoObj  --->  Object.prototype  --> null
// let childObj = {};
// Object.setPrototypeOf(childObj, protoObj);
// // console.log(childObj.prop1);
// // childObj.someMethod();
// // childObj.otherMethod();
// // childObj.nonmethod();

// // 4. childObj2 ---> protoObj  ---> Object.prototype  --> null
// let childObj2 = Object.create(protoObj);
// console.log(childObj2.prop1); //456  coming from protoObj
// childObj2.prop1 = 777; // created a new property inside childObj2 called prop1
// console.log(childObj2.prop1, childObj2.__proto__.prop1);
// childObj2.someMethod(); //calls the one inside protoObj
// childObj2.someMethod = function() {
//   console.log("new method inside childObj2");
// };
// childObj2.someMethod();
// childObj2.__proto__.someMethod();

// /**
//  * strict mode vs sloppy mode
//  */
// "use strict";
// function f(){
//   "use strict";
// }

//neverDeclared = 123; //Reference

//var NaN = 123; // TypeError in the browser
//var undefined = 123;

// //Silent Failure
// let obj = {
//   a: 123,
//   b: 0,
//   get x() {
//     return this.b;
//   }
// };
// Object.defineProperty(obj, "c", {
//   value: 456,
//   writable: false
// });
// //obj.x = 47; // cannot without the setter
// //obj.c = 789;
// console.log(obj.c);
// Object.seal(obj); //.freeze() .preventExtensions()
// //delete obj.c;

// //function dup(a, b, c, a) {} //SyntaxError

// function f1() {}

// function f1(a, b) {} //allowed. Overwriting the first function

// var f1 = function() {};
// f1 = function(a, b) {};

// let f2 = function() {};
// f2 = function(a, b) {}; //FAILS. because we used let


//  Concatination functions

/**
 * The ways to concatenate Strings in JavaScript
 *
 */

// let greeting = "Howdy";
// let Mark = "Buzz";
// let str, str1, str2;

// // 1. concatenation operator
// str = greeting + " " + Mark + ".";

// // 2. String.prototype.concat method
// str1 = greeting.concat(" ", Mark, ".");

// // 3. ES6 Template strings
// str2 = `${greeting} ${Mark}.`;

// console.log(str, str1, str2);


/**
 * Character Codes and Code Points
 * str.charCodeAt(index) //good for UTF-8  (0 - 65535 or 0xFFFF)
 * str.codePointAt(index) //better for UTF-16 (0 - 1114111 or 0x10FFFF)
 * str.charAt(index)
 *
 * String.fromCharCode(code) //good for UTF-8 (0 - 65535 of 0xFFFF)
 * String.fromCodePoint(code) //better for UTF-16 (0 - 1114111 or 0x10FFFF)
 */

// let emojis = "😆😀😂🍔🔥❤";
// let str = "ab🔥C";

// console.log(str.length);
// console.log(
//   str.charAt(0),
//   str.charAt(1),
//   str.charAt(2),
//   str.charAt(3),
//   str.charAt(4)
// );

// let cs = str.charCodeAt(0);
// console.log(cs, cs.toString(16));

// let cca = emojis.charCodeAt(0);
// let cpa = emojis.codePointAt(0);
// console.log(cca, cpa, cca.toString(16), cpa.toString(16));

// let char3 = String.fromCharCode(cs);
// console.log(char3);
// let char1 = String.fromCharCode(cca);
// let char2 = String.fromCodePoint(cpa);
// console.log(char1, char2);



/**
 * Hoisting
 * var vs let (and const)
 */
// console.log;
// f();
// // console.log(fe);
// //console.log(v1); //undefined
// var v1;

// //console.log(L1); //ReferenceError - because we are inside the Temporal DeadZone
// let L1; //undefined is assigned at this line
// console.log(L1);

// function f() {
//   //function declaration
//   let x; //to avoid global var called x
//   console.log("function f");
//   x = "hello"; //global var called x
// }

// let fe = function e() {
//   console.log("function fe");
// };
// fe()

// Why Should I Use const?



// const obj = {
//   a: 123
// };
// obj.b = "hello";
// obj.a = 423;
// delete obj.a;

// const f = function() {};

// const mediaTypes = { AUDIO: 0, VIDEO: 1, PNG: 2, JPEG: 3, WEBP: 4 };
// const errorTypes = { NOTPAID: 0, NOTAVAILABLE: 1, PAINTBALL: 2 };

// let myObj = {
//   doSomething: function() {
//     //do something
//     //but an error happens
//     let num = Math.floor(Math.random() * 3);
//     switch (num) {
//       case 0:
//       console.log("Error Code ", errorTypes.NOTPAID);
//         break;
//       case 1:
//       console.log("Error Code ", errorTypes.NOTAVAILABLE);
//         break;
//       case 2:
//       console.log("Error Code ", errorTypes.PAINTBALL);
//         break;
//     }
//   },
//   saveMedia: function(type, data) {
//     switch (type) {
//       case 0:
//       console.log("saving an audio file");
//         break;
//       case 1:
//       console.log("saving a video file");
//         break;
//       case 2:
//       case 3:
//       case 4:
//       console.log("saving an image");
//         break;
//     }
//   }
// };

// //myObj.doSomething();
// myObj.saveMedia(0, "audio.mp3");
// myObj.saveMedia(mediaTypes.AUDIO, "audio.mp3");
// myObj.saveMedia(mediaTypes.JPEG, "img.jpg");


// Looping through asynchronous  objects

// let myObj = {
//   //add an asyncIterator method to my object
//   [Symbol.asyncIterator]() {
//     //which will return an object that contains a method called next()
//     return {
//       i: 0 /* my counter property */,
//       next() {
//         if (this.i < 3) {
//           //return value from the next method must be an object
//           //the object should contain a value and a done property
//           return new Promise(resolve => {
//             let obj = { value: this.i, done: false };
//             this.i = this.i + 1;
//             setTimeout(resolve, 1000, obj);
//             //this timeout delay value is not set until next() is called by for await...of
//           });
//         }
//         //once our counter value is 3 or more tell whoever called next that we are done
//         return new Promise(resolve => {
//           setTimeout(resolve, 3000, { done: true });
//         });
//       }
//     };
//   }
// };

// (async function() {
//   for await (let num of myObj) {
//     console.log(num);
//   }
// })();

// HOW TO MAKE A FUNCTION RUN

// function rick() {
//   //function declaration
//   console.log("Let's get Schwifty!");
// }
// let morty = function() {
//   //function expression
//   //console.log("I don't think that this is such a good idea Rick.");
//   console.log(this);
// };
// let summer = f1 => {
//   //arrow function
//   console.log("About to call another function");
//   f1(); // f1.call(), f1.apply()
// };

//morty(); //1. parentheses make it run

// rick.call(null);  //2. using call, apply, bind
// rick.apply(global);
// let o = {};
// let m = morty.bind(o);
// // m();

// //summer(m); //3. passing along function references as parameters

// function Meeseeks() {
//   //constructor function
//   console.log("I'm Mr. Meeseeks.");
//   this.hello = function() {
//     console.log("hello");
//   };
//   this.goodbye = () => {};
// }
// Meeseeks.prototype.help = function() {
//   //objects of type Meeseeks will be able to use this function
//   console.log("Look at me.");
// };
// // let me = new Meeseeks(); //4. call a constructor using new
// // console.log(me);
// // me.help(); //5. call a method on the prototype of an object
// // me.hello(); //6. call a method on an object

// // 7.
// //NodeJs version with EventEmitter and listener to call a function
// // const EventEmitter = require("events");
// // const Schwift = new EventEmitter();
// // Schwift.on("schwifty", msg => {
// //   console.log("SCHWIFTY:", msg);
// // });
// // setTimeout(function() {
// //   Schwift.emit("schwifty", "we got schwifty");
// // }, 1000);

// //Browser version with Event Listener to call a function
// let Schwift = new CustomEvent("schwifty");
// class MyObj extends EventTarget {
//   //allowed to receive / listen for events
//   constructor() {
//     super();
//   }
//   log(ev) {
//     console.log("EVENT", ev); // Schwift Event object
//   }
// }
// let obj = new MyObj();
// obj.addEventListener("schwifty", obj.log);
// obj.addEventListener("schwifty", ev => console.log(ev.type)); //"schwifty"
// setTimeout(function() {
//   obj.dispatchEvent(Schwift); //trigger the two event listeners for "schwift"
// }, 1000);



// let log = console.log;
// let myInt = 123;
// let myStrInt = "456";
// let address = "456 Main Ave.";
// let myFloat = 123.456;
// let myStrFloat = "345.567.789.345";
// let cost = "12.99 per box";
// //parseInt parseFloat
// log(parseInt(address)); //456
// log(parseFloat(address)); //456
// log(parseFloat(myStrFloat));
// log(parseFloat(cost));
// log(parseInt(cost));

// let obj1 = {
//   a: "this",
//   b: "is",
//   c: "an",
//   d: "object",
//   e: "literal"
// };
// let obj2 = new Object(["object", "contructor", "one"]); // new Array("", "", "")
// let obj3 = new Object({ an: "object", literal: "again" });
// let obj4 = new Object(obj1.a); // new Object("some string")  new String("asdfas")
// let obj5 = new Object(); //same as new Object(null) or new Object(undefined)
// let obj6 = new Object(true); // new Boolean(true)

// console.log(
//   "OBJ1",
//   obj1,
//   typeof obj1,
//   obj1 instanceof Object,
//   obj1.constructor,
//   "\n"
// );

// console.log(
//   "OBJ2",
//   obj2,
//   typeof obj2,
//   obj2 instanceof Array,
//   obj2 instanceof Object,
//   Array.isArray(obj2),
//   obj2.constructor,
//   "\n"
// );

// console.log(
//   "OBJ3",
//   obj3,
//   typeof obj3,
//   obj3 instanceof Object,
//   obj3.constructor,
//   "\n"
// );

// console.log(
//   "OBJ4",
//   obj4,
//   typeof obj4,
//   obj4 instanceof String,
//   obj4.constructor,
//   "\n"
// );

// console.log(
//   "steve",
//   String("steve"),
//   new String("steve"),
//   typeof "steve",
//   typeof String("steve"),
//   typeof new String("steve"),
//   "\n"
// );

// console.log(
//   "OBJ5",
//   obj5,
//   typeof obj5,
//   obj5 instanceof Object,
//   obj5.constructor,
//   "\n"
// );

// console.log(
//   "OBJ6",
//   obj6,
//   typeof obj6,
//   obj6 instanceof Boolean,
//   obj6 instanceof Object,
//   obj6.constructor,
//   "\n"
// );



//treating Strings like Arrays

// let str = "Ragnar Lothbrok";
// log(str[0], str[1]);
// log(str.charAt(0), str.charAt(1));

// let arr = str.split("");
// let arr2 = Array.from(str);
// console.log(arr2.join(" "));
//log(arr, arr2);
// log(arr[0], arr2[1]);
// concat() - combine two arrays OR combine two strings
// str.concat("asdf");
// arr.concat(arr2);
// str.indexOf("g") //2   str.lastIndexOf("g") // 3
// arr.indexOf("R"); //0
// str.includes("R")  //true arr.includes("R") //true
// slice(begin, end) - extract / shallow copy of part of the array or string
// str.slice(1, 3) // agn  arr.slice(1, 3) . // ["a", "g", "n"]

// for (let char of str) {
//   console.log(char);

// }
// for (let char of arr) {
//   console.log(char);
// }


//Why Destructuring (and ES6) is Awesome

// let person2 = {
//   id: 123,
//   name: "Leslie",
//   dob: new Date("1985-01-01").valueOf(),
//   age: 44,
//   salary: 55000,
//   department: "Parks and Recreation",
//   hometown: "Pawnee"
// };

// savePersonES5(person);

// function savePersonES5(someObj) {
//   let id = Date.now();
//   if (someObj.id) {
//     id = someObj.id;
//   }
//   let name = someObj.name;
//   if (!name) {
//     name = "Blank";
//   }
//   let dob = someObj.dob ? someObj.dob : new Date("2000-01-01").valueOf();
//   //save it in localStorage for later use
//   const KEY = "someRandomUniqueString";
  
//   let jsonStr = JSON.stringify({ id: id, name: name, dob: dob });
//   localStorage.setItem(KEY, jsonStr);
// }

// function savePersonES6({
//   id = Date.now(),
//   name = "Blank",
//   dob = new Date("2001-01-01").valueOf(),
//   hometown =  ""
// }) {
//   const KEY = "someRandomUniqueString";
//   console.log(KEY);
//   let jsonStr = JSON.stringify({ id, name, dob,hometown });
//   localStorage.setItem(KEY, jsonStr);
// }
// savePersonES6(person2)
// let log = console.log;

// let myObj = {}; // new Object()
// // log(myObj.constructor); // function Object(){}
// // log(myObj.__proto__ === myObj.constructor.prototype);

// function Cat() {
//   //constructor for kitty
// }
// let kitty = new Cat();
// // log(kitty.__proto__ === Cat.prototype);
// // log(kitty.__proto__.__proto__ === Object.prototype);
// // log(Object.prototype.__proto__);

// function Animal() {}

// Object.setPrototypeOf(Cat.prototype, Animal.prototype);
// console.log(kitty.__proto__); // Cat{}
// console.log(kitty.__proto__.__proto__); // Animal {}
// console.log(kitty.__proto__.__proto__.__proto__); // {}
// console.log(kitty.__proto__.__proto__.__proto__.__proto__);

// const dataArr = [
//   { label: 'ONE' },
//   { label: 'TWO' },
//   { label: 'THREE' },
//   { label: 'FOUR' },
//   { label: 'FIVE' }
// ];
// const dataObj = {
//   4: { label: 'I am Number Four' },
//   7: { label: `What's in the box?` },
//   m: () => {
//     console.log('custom method');
//   },
//   top: { mid: { deep: 123 } }
// };

// const addPara = (num, hex) => {
//   // let txt = 'default';
//   // if(dataArr && dataArr[num-1]) {
//   //   txt=dataArr[num-1].label
//   // }
//   // let txt = dataArr[num - 1]?.label;
//   let txt = dataObj[num]?.label;


//   if (txt) {
//     let p = document.createElement('p');
//     p.style.backgroundColor = hex; //8 digit hex
//     p.id = `_${num}`; // _4, _5, _6, _7
//     p.textContent = txt;
//     document.body.appendChild(p);
//   }
//   //console.log(dataObj?.toplevel?.mid?.deep);
//   //if (dataObj && dataObj.top && dataObj.top.mid && dataObj.top.mid.deep) {
//   //}
//   dataObj.m?.();
//   dataObj.f?.();
// };

// const handleClick = ev => {
//   let num = Math.floor(Math.random() * 7) + 1; // 1 - 7
//   let id = '_'.concat(num); // _3
//   let hex = randColour(); // 8 digit hex
//   console.log(id, hex);
//   let div = document.getElementById(id);
//   div ? (div.style.backgroundColor = hex) : addPara(num, hex); // or void 0
//   //addPara.call(null, num, hex); //addPara(num, hex)
// };

// const randColour = () => {
//   let clr = Math.floor(Math.random() * Math.pow(2, 24));
//   let red = (clr >> 16).toString(16).padStart(2, '0');
//   let green = ((clr >> 8) & 255).toString(16).padStart(2, '0');
//   let blue = (clr & 255).toString(16).padStart(2, '0');
//   let alpha = Math.floor(Math.random() * 200 + 55)
//     .toString(16)
//     .padStart(2, '0'); //alpha is a value 0-100% but written as num 0-255
//   // and in hex that means 00 - FF. 50% is 128 in decimal or 80 in Hex
//   // https://codepen.io/chriscoyier/pen/XjbzAW - ref chart for percentages
//   //console.log(red, green, blue, alpha);
//   return `#${red}${green}${blue}${alpha}`;
// };

// document.addEventListener('DOMContentLoaded', () => {
//   document.body.addEventListener('click', handleClick);
// });

// const people = [
//   { id: 12, name: 'Billy', dob: '1998-10-05' },
//   { id: 123, name: 'Bart', dob: '1993-02-15' },
//   { id: 45, name: 'Belinda', dob: '1996-01-31' },
//   { id: 67, name: 'Bonnie', dob: '1998-04-09' },
//   { id: 89, name: 'Brenda', dob: '1996-07-08' },
//   { id: 34, name: 'Bobby', dob: '1994-09-12' },
//   { id: 234, name: 'Blake', dob: '2000-01-01' },
// ];

// const log = console.log;

// // log('\n\n built-in sort method');
// log(people.sort()); // [Object object]

// // log('\n\n sort by name');
// log(people.sort(byName));

// log('\n\n sort by id');
// log(people.sort(byId));

// log('\n\n sort by date');
// log(people.sort(byDate));

// // log('\n\n sort by birthday as it occurs during the year');
// log(people.sort(byBirthday));

// function byName(a, b) {
//   //alphabetically by name
//   if (a.name > b.name) {
//     return 1;
//   } else if (b.name > a.name) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function byId(a, b) {
//   //numerically by id
//   return parseInt(a.id) - parseInt(b.id);
// }

// function byDate(a, b) {
//   //chronologically by year, month, then day
//   return new Date(a.dob).valueOf() - new Date(b.dob).valueOf(); //timestamps
// }

// function byBirthday(a, b) {
//   //by month and then by day
//   let d1 = new Date(a.dob); // 1993-02-15T00:00:00Z =>   1993-02-14T20:00:00EST
//   let d2 = new Date(b.dob);
//   log(d1.getDate(), d1.getUTCDate(), d1.getMonth(), d1.getUTCMonth());
//   if (d1.getUTCMonth() > d2.getUTCMonth()) {
//     return 1;
//   } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
//     return -1;
//   } else {
//     //same month
//     return d1.getUTCDate() - d2.getUTCDate();
//   }
// }


// flat()
// for compressing multiple arrays in a single list of values.
//Array.prototype.flat()
// let numbers = [
//   1,
//   2,
//   [3, 4, 5],
//   [6, 7],
//   8,
//   9,
//   [
//     [10, 11],
//     [12, 13],
//   ],
// ];
// let arr = numbers.flat(2);
// console.log(arr);

//Understanding Array.prototype.flatMap()
//   myArray.map().flat(1) - equivalent

// let movies = [
//   'Dog Soldiers',
//   ['In Bruges', 'From Paris with Love', 'Layer Cake'],
//   'The Big Lebowski',
//   '',
//   '    ',
//   'Memento, The Platform,Fight Club, ',
//   'Hotel Rwanda, Moon, Under the Skin',
//   'Lady Bird',
//   ['Platoon', 'Wall-E'],
// ];
// let arr = movies.flatMap((entry) => {
//   if (Array.isArray(entry)) {
//     return entry;
//   } else if (typeof entry === 'string' && entry.trim() === '') {
//     return []; //remove the empty strings
//   } else {
//     //other strings
//     return entry
//       .split(',')
//       .map((txt) => txt.trim())
//       .filter((txt) => txt != '');
//   }
// });
// console.log(arr);




// Memoization


/**
 * Memoization - save the results of your function
 * to improve performance.
 */

// const myFunc = (function buildFunc() {
//   const memo = {};
//   const getKey = ([a, b]) => {
 
//     //we are always expecting to get two values
//     let key = `${a}-${b}`;
//     return key;
//   };

//   return (args) => {
//     //this is the function that will be myFunc
//     let key = getKey(args);
//     if (memo[key]) {
//       return memo[key];
//     } else {
//       let sum = 0;
//       for (let i = args[0]; i > 0; i--) {
//         sum += args[0] * args[1];
//       }
//       console.log(sum);
//       memo[key] = sum;
//       return sum;
//     }
//   };

// })();

// let start = Date.now();
// let result1 = myFunc([9000008, 100001]);
// let result2 = myFunc([9000008, 100001]);
// let result3 = myFunc([9000008, 100001]);
// let result4 = myFunc([9000008, 100001]);
// let result5 = myFunc([9000008, 100001]);
// let result6 = myFunc([9000008, 100001]);
// let result7 = myFunc([9000008, 100001]);
// let end = Date.now();
// console.log(end - start);

// start = Date.now();
// result1 = myFunc([9000001, 100001]);
// result2 = myFunc([9000002, 100001]);
// result3 = myFunc([9000003, 100001]);
// result4 = myFunc([9000004, 100001]);
// result5 = myFunc([9000005, 100001]);
// result6 = myFunc([9000006, 100001]);
// result7 = myFunc([9000007, 100001]);
// end = Date.now();
// console.log(end - start);



/***
 * Dynamic Object properties using square brackets
 */
// let beverage = 'Beer';

// const myObj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   food: 'cheese',
//   propName: 'cheese',
//   beverage: 'Heineken', // beverage: 'Heineken'
//   [beverage]: 'corona', // Beer: 'corona'
// };

// let addProp = (obj, propName, propValue) => {
//   // obj.food = 'cheese';
//   obj[propName] = propValue;
//   obj.propName = propValue;
// };
// addProp(myObj, 'food', 'cheese');

// // Using brackets notation for Object properties
// const dynamicKey = 'age';
// const dynamicValue = 30;
 
// const dynamicObject = {
//     name: 'Aman',
// };
 
// // Using bracket notation to
// //set properties dynamically
// dynamicObject[dynamicKey] = dynamicValue;
// dynamicObject['city'] = 'Noida';
 
// console.log(dynamicObject);



// // Using spread operator 
// const obj1 = { name: 'Ankit' };
// const obj2 = { age: 30 };
// const obj3 = { city: 'Noida' };
 
// const mergedObject = { ...obj1, ...obj2, ...obj3 };
 
// console.log(mergedObject);


//     //because Node.JS does not support it as of v14.0.0
//       //var result = 'asdf' ? 'yes' : 'no'; //ternary - truthy or falsey

//       //null or undefined
//       let result = null ?? 'yes'; //'yes' if testing value was null or undefined

//       let current;

//       function f() {
//         let result = current ?? getNum();
//         console.log(result);
//       }

//       console.log(current);
//       getNum();
//       console.log(current);
//       f();
    

//       function getNum() {
//         current = Math.floor(Math.random() * 100);
//         return current;
//       }

// Template literal function 
// let num = 41;
// let str1 = `"\t" and "\n" are escape sequences. ${num}`;
// let str2 = `"\\t" and "\\n" are escape sequences. ${num}`;
// let str3 = String.raw`"\t" and "\n" are escape sequences. ${num}`;
// let str4 = `The meaning of life is ${num + 1}.`;
// const log = console.log;

// log(1, str1);
// log(2, str2);
// log(3, str3);
// log(4, str4);

// let first = 'ham';
// let second = 'pineapple';
// let txt = f`I don't like pizza with ${first} and ${second}.`;
// log(txt);
// function f(strings, ...expressions) {
//   return expressions.reduce((acc, exp, idx) => {
//     return `${acc} ${exp.toUpperCase()} ${strings[idx + 1]}`;
//   }, strings[0]);
// }

// Identifiers and identifiersNames 

// {
  /*************
   * //Reserved keywords
   * break, case, catch, class, const, continue, debugger, default, delete, do, else,
   * export, extends, finally, for, function, if, import, in, instanceof, new, return,
   * super, switch, this, throw, try, typeof, var, void, while, with, yield,
   * enum, true, false, null,
   *
   * //In strict mode
   * implements, interface, let, package, private, protected, public, static
   *
   * //In modules
   * await
   *
   * //In older versions of ECMAScript
   * abstract, boolean, byte, char, double, final, float, goto, int, long, native,
   * short, synchronized, throws, transient, volatile
   */
// }

// var $;
// let _;
// let aas;
// let abc1;
// let $as3423d_;
// let abc123_ = 'something';
// const STEVE = Symbol();

// let obj = {
//   $: 'a',
//   _: 'b',
//   abc: 'c',
//   [abc123_]: 'd',
//   [STEVE]: 'e',
//   1: 'f',
//   '1.213423': 'g',
// }


// Type casting and coersion  

// type casting and coercing in JavaScript
//
// String(), +, Number(), +, -, Boolean(), !, !!
// toString(), valueOf()
// parseInt(), parseFloat()
// unary plus, logical NOT, addition operator, comparison operators
// let n = '56';
// console.log(-n, +n);
// //                              String,         Number,       Boolean
// let obj = { a: 1, b: 2 }; // '[object Object]'    NaN           true
// let emptyObj = {}; //       '[object Object]'     NaN             true
// let arr = [1, 2, 3]; //     '1,2,3'              NaN              true // [1] to Number would become 1
//                                                                   // If there is only one number in the array then 
// //                                                                   // that becomes the numeric conversion.
// let emptyArr = []; //       ''                   0              true
// let str = 'hello'; //       'hello'             NaN             true
// let emptyStr = ''; //         ''                 NaN           false   ('43'=>43, '0'=>0)
// let num = 1; //               '1'               1              true
// let zero = 0; //            '0'                 0               false
// let T = true; //            'true'              1               true
// let F = false; //            'false'             0               false
//  null    //               'null'              0              false
//  undefined   //      'undefined'             NaN            false
//  NaN       //             'NaN'             NaN             false

/**
 * Plus vs Concatenation
 * exp1 + exp2
 * if either exp1 or exp2 is a string then treat the '+' as a concatenation
 *  coerce both values to Strings as needed
 *
 * if neither exp1 or exp2 is a string then treat the '+' as an addition operation
 *  coerce both values to Numbers as needed
 *
 */

// console.log(F + num);
// "234234".toLowerCase()
// Falsey values - false, 0, '', null, undefined, NaN
// Truthy values - Everything else....
// Boolean() != new Boolean(), String() != new String(), Number() != new Number()
// Boxing of Primitives
// Boolean() == !!  (! will flip truthiness too)
// Number() == +  (- will flip sign too)
// String() == .toString() unless null was set as the prototype of the Object

// console.log("Boollean",Boolean(234), Boolean(0), new Boolean(0));
// console.log("Bullean",true && Boolean(new Boolean(0)));

// && compares the two operands and then actually returns
// the second if the first is truthy

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// console.log(!arr < +T || !!arr > +emptyArr);
//unary plus 17, logical NOT 17, less than 12, greater than 12, logical OR 6
// (false < 1 || true > 0)
// ( 0 < 1 || 1 > 0 )
// ( true || )
// true

// console.log(1 + - + + + - + 1); //2



/**
 * Using a single integer to represent multiple permissions
 * based on binary values using bitwise operators
 *
 *  & bitwise AND - if both the top and bottom bit are 1, result is 1
 *  | bitwise OR - if either the top and bottom bit or both are 1, result is 1
 *  ^ bitwise XOR - if only one of the bits are 1, result is 1
 * 0101
 * 0100 & =   0100
 *
 * 0100
 * 1110 | = 1110
 *
 * 0101
 * 0001 ^ = 0100
 *
 * 0 - 0000
 * 1 - 0001 x
 * 2 - 0010 x
 * 3 - 0011
 * 4 - 0100 x
 * 5 - 0101
 * 6 - 0110
 * 7 - 0111
 * 8 - 1000 x
 * 9 - 1001
 * 10 - 1010
 */

// const READ = 1; //   0001
// const DRINK = 2; //  0010
// const SING = 4; //   0100
// const DELETE = 8; // 1000

// class Person {
//   constructor(name, access = 0) {
//     this.name = name;
//     this.access = access;
//   }
//   getAll() {
//     return {
//       [READ]: !!(this.access & READ),
//       [DRINK]: !!(this.access & DRINK),
//       [SING]: !!(this.access & SING),
//       [DELETE]: !!(this.access & DELETE),
//     };
//   }
//   addPerm(perm) {
//     this.access = this.access | perm;
//   }
//   removePerm(perm) {
//     if (this.getAll()[perm]) {
//       this.access = this.access ^ perm;
//     }
//   }
// }

// let steve = new Person('Steve', 5);
// let joanne = new Person('Joanne');
// joanne.addPerm(DRINK);
// joanne.addPerm(SING);
// joanne.addPerm(DELETE);
// steve.addPerm(SING);

// joanne.removePerm(READ);
// steve.removePerm(READ);

// console.log(steve.access, steve.getAll());
// console.log(joanne.access, joanne.getAll());

// console.log(steve.getAll()[READ]);


      // https://caniuse.com/#feat=mdn-javascript_builtins_globalthis

      // let lll = 'declared with let';
      // var vvv = 'declared with var';

      // (function test() {
      //   nnn = 'declared without either';
      //   console.log(this);
      //   console.log(window);
      //   console.log(globalThis); //added in NodeJS 12.4
      //   console.log(lll, globalThis.lll);
      //   console.log(vvv, globalThis.vvv);
      //   console.log(nnn, globalThis.nnn);
      // })();

      // Reflect in object 

// Reflect Object - built-in object that provides methods for interceptable JavaScript operations
// All methods are static
// has no constructor cannot use `new`
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect


// let alex = {
//   name: 'Alex',
//   id: 93,
//   hello: function (a, b) {
//     console.log(`Hello my name is ${this.name}. ${a} ${b}`);
//   },
// };

// console.log(Reflect.ownKeys(alex));
// console.log(Reflect.get(alex, 'id'));
// console.log(Reflect.set(alex, 'id', 94));
// console.log(Reflect.get(alex, 'id'));
// console.log(Reflect.has(alex, 'name'));
// Reflect.apply(alex.hello, alex, Reflect.ownKeys(alex));
// Reflect.defineProperty(alex, 'age', { value: 30, enumerable: false });
// console.log(Reflect.get(alex, 'age'));

// /**
// Reflect.apply(targetFunc, thisArg, argList); //for functions
// Reflect.get(target, key, handler); //handler is Proxy. get the value of a property
// Reflect.set(target, key, value, handler); //handler is Proxy. set the value of a property
// Reflect.has(target, key); // check if it has a property
// Reflect.delete(target, key); //like the delete operator
// Reflect.ownKeys(target); // enumerate through the properties
// Reflect.defineProperty(target, key, {propertyDescriptor}); //like Object.defineProperty
//  */


/**
 * String.prototype.startsWith(str [,pos]) //returns Boolean
 * String.prototype.endsWith(str [,pos])   //returns Boolean
 *
 * String.prototype.includes(str [,pos])  //returns Boolean
 * String.prototype.indexOf(str [,pos])  //returns -1 or position index
 * String.prototype.lastIndexOf(str [,pos])  //returns -1 or position index
 * String.prototype.charAt(pos)  //returns the single code point at that position
 * String.prototype.match(regExp); //returns an Array of matches or null. regex.test() and regex.exec()
 */


// let sentence ='How are you today?👋🏻';
// let len = sentence.length;
// let regexp = /[Ho]/g;

//  console.log(sentence.indexOf('👋🏻')); //18
//  console.log(sentence.lastIndexOf('👋🏻')); //18
//  console.log(sentence.includes('x')); //false
//  console.log(sentence.match(regexp));// []  or null
//  console.log(regexp.test(sentence)); // true
//  console.log(sentence.charAt(0) === 'H');
//  console.log(sentence.charAt(18));
//  console.log(sentence.substring(18));


//  console.log(sentence.startsWith('H'));
//  console.log(sentence.startsWith('h'));
//  console.log(sentence.startsWith('👋🏻', 19));
//  console.log(sentence.endsWith('👋🏻'));




// Array.prototype.slice([start[, end]])
// returns shallow copy of removed/sliced items

// Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// modifies original array. returns array of deleted items


// let names = ['Barney', 'Marshall', 'Lily', 'Robin', 'Ted'];

// console.log(names.slice(3, 4));

// let res = names.splice(1, 'Luke', 'Leia');
// // console.log(res);
// console.log(names);

// Immutable  
// Primitive are immutable in JavaScript.
// const arr = [1, 2, 3, 4]


// console.log;

// const myRecord = #{ a: 1, b: 2 }; //Object
// const myTuple = #[1, 2, 3];  //Array
// // const r = #{a:1, b:2, #[1, 2, 3]};
// console.log(myRecord['b']); //myRecord.b

// // console.log(typeof #{prop:1} === "record"); //fails in playground
// // console.log(typeof #[1,2,3] === "tuple"); //fails in playground

// // console.log(myTuple === #[1, 2, 3])

// console.log( #[2, 4, 6, myRecord] === #[2, 4, 6, #{a:1, b:2}]);

// //Object.freeze() is shallow
// //JSON.parseImmutable() - returns Records and Tuples

// //Wrapper objects
// let s = 'Hello World'; //primitive
// console.log(s.length, s.toUpperCase() )

// myTuple.pushed(77);
// //returns a new Tuple 1, 2, 3, 77

// //spread operator for editing~~~
// //create new thing from the old
// let rec = #{a:1, b:2, c:3};
// let rec2 = #{...rec, b:4, d:77};
// console.log(rec);
// console.log(rec2);

// Destructuring in arrays and fetch.


// let people = [
//   { id: 1, name: 'Leonard', phd: true, partner: 'Penny' },
//   { id: 2, name: 'Howard', phd: false, partner: 'Bernadette' },
//   { id: 3, name: 'Sheldon', phd: true, partner: 'Amy' },
//   { id: 4, name: 'Raj', phd: true, partner: 'Cinnamon' },
// ];
// let nums = [12, 34, 56, 78, 90];

// let nm = nums.map((number) => {
//   console.log(number);
// });
// let ppl = people.map(({ name: nm, partner: pt }) => {
//   console.log(nm, '&', pt);
// });

// fetch('http://127.0.0.1:5501/people.json')
//   .then((resp) => {
//     if (!resp.ok) throw new Error(resp.statusText);
//     return resp.json();
//   })
//   .then(([first, second, ...rest]) => {
//     //...rest MUST be the last argument for desctructuring
//     // rest[rest.length-1] would be the last element.
//     console.log(first);
//     console.log(second);
//     console.log(...rest);
//   })
//   .catch(console.log);




// Proxies objects in JavaScript

//Proxies
// let objects = [
//   { id: 123, name: 'Steve', age: 21 },
//   { id: 456, name: 'Riley', age: -34 },
//   { id: 789, name: 'Bree', age: 140 },
// ];
// objects = objects.map((person) => {
//   return new Proxy(person, {
//     get: function (target, prop, receiver) {
//       if (prop in target) {
//         if (prop === 'age') {
//           if (target[prop] >= 0 && target[prop] <= 130) {
//             return target[prop];
//             // return Reflect.get(...arguments);
//             // return Reflect.get(target, prop, receiver);
//           } else {
//             throw new RangeError('Age is too high or too low.');
//           }
//         }
//       }
//     },
//     set: function (target, prop) {
//       return true;
//     },
//   });
// });

// objects.forEach((person) => {
//   try {
//     person.age;
//   } catch (err) {
//     console.log(err.name, err.message);
//   }
// });

//wrapper IIFE
// let obj = (function(myObj){
//   let handler = {
//     get: function(target, prop){

//     },
//     set: function(target, prop){

//     }
//   }
//   return new Proxy(myObj, handler);
// })({ prop1: 'hello', prop2: 'goodbye' })

// let obj = { prop1: 'hello', prop2: 'goodbye' };

// let handler = {
//   default: 'NO PROP',
//   get: function (target, prop, receiver) {
//     if (prop in target) {
//       return target[prop].toUpperCase();
//     } else {
//       throw new TypeError('No such prop');
//     }
//   },
//   set: function (target, prop, receiver) {
//     if (prop in target) {
//       return true;
//     } else {
//       throw new TypeError('No such property');
//     }
//   },
// };
// let proxy = new Proxy(obj, handler);

// proxy.prop1 = '¡hola!';
// proxy.prop3 = 'blah';
// console.log(proxy.prop1);
// console.log(proxy.prop2);

// let f = new Proxy(function () {}, {
//   apply: function (target, thisArg, args) {
//     //target MUST be a callable function
//     //args is the list of values being passed to the function
//     //thisArg is the object considered 'this' for this function call
//   },
//   // has:
//   // deleteProperty:
// });


// Reducer function 

/*
Context for non-Archer fans
https://www.youtube.com/watch?v=4IUNc6yxp2g
https://www.youtube.com/watch?v=8FYJfEHOuY0
*/


// const reducer = (state, action) => {
//   if (action === 'DARKEN') {
//     return state + 'er';
//   }
//   if (action === 'LIGHTEN') {
//     return state.replace('er', '');
//   }
//   return state;
// };

// let dark = 'dark';
// dark = reducer(dark, 'DARKEN');
// log(dark);
// dark = reducer(dark, 'LIGHTEN');
// dark = reducer(dark, 'LIGHTEN');
// log(dark);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'DARKEN':
//       if (state.agent === 'Archer' && state.turtleneckType === 'tactical') {
//         return {
//           ...state,
//           turtleneckBlackness: state.turtleneckBlackness + 20,
//         };
//       }
//       if (state.agent !== 'Archer') {
//         return state;
//       }
//     case 'LIGHTEN':
//       return state;
//   }
//   return state;
// };

// let state = {
//   agent: 'Archer',
//   turtleneckType: 'tactical',
//   turtleneckBlackness: 100,
// };
// state = reducer(state, { type: 'DARKEN' });
// state = reducer(state, { type: 'DARKEN' });
// state = reducer(state, { type: 'DARKEN' });
// console.log(state);

/**
 * Currying vs Partial Application
 * Closures
 *   A function which returns a function that
 *   can has access to the returned function's scope.
 *   function example(param){
 *     let a = 123;
 *     return function(otherParam){
 *       //both param and otherParam and a are available here
 *     }
 *   }
 *
 * Partial Application
 *   Uses closures.
 *   Returned function is partially applied to a new value,
 *   meaning that the value passed to the original function
 *   is already attached to the returned `partially applied` function
 *
 * Currying
 *   The process of taking a multiple argument function and
 *   breaking it up into a series of single argument partially
//  *   applied functions.
//  */
// const log = console.log;

// //Simple demo - the things we would want to curry
// function bakeChocolateCupcakeWithVanilla(cakeType, cakeFlavor, icingType) {
//   return `Made a ${cakeFlavour} ${cakeType} with ${icingType} icing.`;
// }
// function bakeVanillaCakeWithLemon(cakeType, cakeFlavor, icingType) {
//   return `Made a ${cakeFlavour} ${cakeType} with ${icingType} icing.`;
// }
// //curry it
// function bake(cakeType) {
//   //partially applied
//   return function (cakeFlavour) {
//     //partially applied
//     return function (icingType) {
//       return `Made a ${cakeFlavour} ${cakeType} with ${icingType} icing.`;
//     };
//   };
// }
// let bakeCake = bake('cake');
// let bakeCupcake = bake('cupcake');
// let bakeMuffin = bake('muffin');

// let chocCake = bakeCake('chocolate');
// let vanillaCake = bakeCake('vanilla');
// let chocCupcake = bakeCupcake('chocolate');
// let carrotMuffin = bakeMuffin('carrot');

// log(chocCake('strawberry'));
// log(chocCake('vanilla'));
// log(chocCupcake('chocolate'));
// log(chocCupcake('orange'));

// log(bake('cake')('chocolate')('vanilla'));
// log(bake('cupcake')('chocolate')('cherry'));
// log(bake('muffin')('carrot')('vanilla'));

//More realistic ex
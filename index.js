let dog = {
    name: 'puppy', 
    age : 1
}
let cat = {
    name: 'meow', 
    age : 2
}
// 
let pets = [
{  name: 'puppy', 
    age : 1 }, cat
]
pets.push({name: 'flash', age: 2})

// adding a property inside an object 
cat.type = 'yellow'


// accessing objects literal in array

pets[0].type = 'white'

pets[2].type = 'white'
console.log(pets);
console.log(cat);


// for loop

let Form1Student = ['mark', 'john', 'peter','mercy','Haron','Mecury', 'Venus']
let nameNum = Form1Student
// iterating
// initialized =>where it begins; test => lenght of array increment => for adding since it a start from array 0;
for (let i = 0; i < nameNum.length; i++) {
    const element = nameNum[i];

    console.log(element);
    
} 


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

let x = (num1, num2) => num1 * num2
console.log(x(20, 2));

// in array methods
const int = [22, 3, 4, 10, 45];
const integer = int.map((element) => element + 9
)
console.log(integer);

// arrow function in object
const parent = {
    father_name: "Omuse King",
    fatherReal: function (){
        return `${this.father_name} is my father.`;
    },
    father: () => {
      return `${this.father_name} is my father.`;
    },
  };
//   function will work
  console.log(parent.fatherReal());
//   function won'twork
  console.log(parent.father());

// Foreach loop

// it's high order function / has argument
// Can be used in object / i.e json
// calling a function using forEach
const log = console.log
 const colors = ['blue', 'green', 'white']
function iterate(item, index, array) {
log(item);
log(array)
if (index === array.length -1 ) {
log('The last iteration!' );
}
}
colors.forEach(iterate);



// forEach in numbers

const numbers = [22, 3, 4, 10, 45];

numbers.forEach(number => {
    if (number === 45) {
      // console.log("terminate the current loop");
      return true;
    }
    console.log(number);
   });


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
let words = document.querySelectorAll(".word");

const animateAll = (animate) => {
    setTimeout(function(){
        animate(words[0]);
        setTimeout(function() {
            animate(words[1]);
            setTimeout(() => {
                animate(words[2]);
            }, 1000)
        }, 1000)
    }, 1000)
}

const animate = (word) => {
    word.classList.add("animate");
}

animateAll(animate);


// Block scope

function sayHello() {
  let name = "Hark"; // Function variable

  if (true) {
      let message = "Hello"; // Block variable
      console.log(message + " " + name); 
      // Output: "Hello John"
  }
}

sayHello();

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
function func() {
 
  // Original string
  let str = 'It is Saba Saba Day.'

  // Splitting up to 2 terms
  // After split it can take in any array method
  const strCopy = str.split(" ")
  const join = strCopy.join(" ")

  //.forEach((element,index,array)=>{
      console.log('split:',strCopy)
      console.log('join:', join);
      
  // });
 
}
func();

// Join () method


//  new keyword

class ready {
  constructor() {
    this.c = 1
    this.a = 100
  }
}

// Set the function prototype
ready.prototype.b = 200;

// Create an object
let obj = new ready();

// Display the result on console
console.log(obj.c);

console.log(obj.b);


// This keyWord using call(),bind() and apply() methods

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"William",
  lastName: "Kalibo",
}
const copy = person1.fullName.apply(person2)
console.log(copy);



// bind()
// function Borrowing
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Wiz",
  lastName: "Kizo",
}

const fullName = person.fullName.bind(member);
console.log(fullName());


// map()method

let map1 = new Map();
  
map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "geeksforgeeks")
    .set("friend 1","gourav")
    .set("friend 2","sourav");
  
console.log(map1);
      
console.log("map1 has website ? "+ 
                    map1.has("website"));
  
console.log("map1 has friend 3 ? " + 
                    map1.has("friend 3"));
  
console.log("get value for key website "+
                    map1.get("website"));
  
console.log("get value for key friend 3 "+
                    map1.get("friend 3"));
console.log("delete element with key website " 
                    + map1.delete("website"));
      
console.log("map1 has website ? "+ 
                    map1.has("website"));
  
console.log("delete element with key website " +
                    map1.delete("friend 3"));
  
map1.clear();
  
console.log(map1);

// filter method 

const ages = [32, 15, 60, 33, 16, 40];
const result = ages.filter(checkAdult);



function checkAdult(age) {
  
  return age >= 18;

  // Return Even numbers
  return age%2 === 0

  // Returning oddNumbers
//  return age & 1
}

console.log(result)


let ageSum =  []
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21 ){
    ageSum.push("print ages",ages[i])
  }
  
}
console.log(ageSum);
// // using foreach in filters
// ages.forEach((element)=>{
// if (element >= 21)
  
//     ageSum.push(element)

// })
// console.log('Wow!:',ageSum)


// using arrow func in filter
const arrow = ages.filter(age => age >= 21)
console.log(arrow);

// array find()

// Input array contain some elements.
let array = [10, 20, 30, 40, 50];
 
// condition
let found = array.filter(function (element) {
    return element > 60;
});
 
console.log("find - f",found);

// function sum(x, y, z) {
//   return x + y + z;
// }

// const cookies = [1, 2, 3];

// // console.log(sum(''...cookies));
// // Expected output: 6

// console.log(sum.apply(null, numbers));


// Array reduce
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
let initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (array1,currentValue) => array1 + currentValue,
//   initialValue
  
// );

// console.log(sumWithInitial);

// for loop 
for (let i = 0; i < array1.length; i++) {
  initialValue += array1[i];

}
console.log('forloop',initialValue);

// Expected output: 10

// Array concat
// joining two arrays
function func() {
  
  // Original string
  let num = [1, 3, 55.70, 50 ,23, 67,16,]
  let nmu2 = [1, 3, 55.70, 50 ,23, 67,16,]
  let num3 =[1, 3, 55.70, 50 ,23, 67,16,]


  // Joining the strings together
  let numValue = num.concat(nmu2,num3)
  let str = 'It';
  let value = str.concat(' is', ' a', ' great', ' day.');
  console.log(numValue)
  console.log(value);
}

func();


//  include();

let strinIcd = "Can you , recieve that call it's from Hark man."
let gold = strinIcd.split(" ")

 console.log(gold);
const incde = gold.includes(",");
// console.log(gold);
console.log('includes', incde)

// Array reduce
let num = [1, 3, 55.70, 50 ,23, 67,16,]
const sumI = num.reduce(
  function(accumulator, value){
    // what is accumulated  to give to another 
    console.log(accumulator, value);
return accumulator + value
  }, 0)
console.log("reduce",sumI)
// for loop
let valueFirst = 0
for(let i = 0; i < num.length; i++){
 valueFirst += num[i]
}
console.log("for loop:",valueFirst);

// forEach
//  num.forEach(
//   valueFirst.push(num)
//  )
  
 
// // console.log(valueFirst);
// })
console.log("foreach",sumI)

let dom = ['mark', 'john', 'peter','mercy','Haron','Mecury','Alan', 'Venus','Don']
const condition = dom.reduce(function(first, initial){

// comparing to sort the array string alphabetically

console.log("compare",first, 'to',initial);

 return (first < initial)? first : initial;
},"\u0434")
console.log('condition',condition);

// some ()

// making the code DRY
const some1 = [33,2, 30, 18, 20];

const available2 = some1.some(function(element){ 
  return element >= 3
})
  

console.log("available2",available2)




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


const People = [
  {
    name: "John Smith",
    age: 30
  },
  {
    name: "William Lane",
    age: 25
  },
  {
    name: "Michael vonder",
    age: 19
  }
];

const oldAge = People.reduce((acc, curr) => {
  if (curr.age > acc) {
    return curr.age;
  }
  return acc;
}, 0);

console.log(oldAge); // Output: 30


// const initialName = People.reduce((acc, curr, i ,  a) => { 
//   const split = curr.name.split(" ");
//   let initial = split[0];
// })



// every () method
const evey = [3, 30, 18, 20, 41];

let every = evey.every(function (mute){
  return mute <= 40;
//   for (let i = 0; i < evey.length; i++){
//   if (evey[i] >= 4){
//     return true;
//   }else{
//     return false;
//   }
  
// }

});

console.log("every",every); // Output:false



// console.log(every);


// combining arrays methods
// find all the names of people with @replicant.io
let people = [
  {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
  {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
  {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
  {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];
// filter
let replicant = people.filter(function(person){
  return person.email.includes("@replicant.io") > -1;
} )

// using map
let name1 = replicant.map(function(person){
  return person.name;
})


// chaining the Arrays 
let replicantsNames = people.filter(function(person){
  return person.email.indexOf("@replicant.io") > -1;
}).map(function(person){ return person.name}).sort()


console.log("combined:", replicantsNames );


// Arrow function

let arrowF = people.filter( (person) => ( person.email.indexOf("@replicant.io") > -1 ) ).map( (person) => (person.name) ).sort().reverse()
console.log( 'Arrow func:',arrowF);




// // Ajax Technology
const btn = document.getElementById('btn');
btn.addEventListener('click', showCountries);
function showCountries(){


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
// }
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then(function(data) {
    data.forEach(function(country) {

// DOM manipulation
      // Creating Element for DOM
      const countryName = document.getElementById('country');
      const userName = document.createElement('div');
      const textH1 = document.createElement('h1');
      const flagCountry = document.createElement('img');
      countryName.classList.add('flags');
       // Use the 'common' property for the country name
      
      textH1.textContent = country.name.common;
      userName.appendChild(textH1);

     // Use the 'png' property for the country flag URL
      flagCountry.src = country.flags.png; 
      userName.appendChild(flagCountry);
      countryName.appendChild(userName);

    
    });
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
  });
}



// currying function
function currying(pineapple){
  return function(Ham){
   return function(cheese){
    return function(tomatoSauce){
        return function(mozarrella){
        return function(pizzaSauce){
       
        return `${pineapple} made ${Ham} is ${cheese} to ${tomatoSauce} to ${mozarrella } to its ${pizzaSauce};`
        }
    }
}
   }
  }
};




console.log(currying('Home')('Hawiian') ('easy')('cook')('due')('recipe'));



function calculateVolume(length) {
  return function (breadth) {
      return function (height) {
          return length * breadth * height;
      }
  }
}
console.log(calculateVolume(4)(5)(6));



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


let nested ={ description: [
  {"id":123, "name":"Rick Deckard", email:"rick@bladerunner.org"},
  {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
  {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
  {"id":258, "name":"Pris", "email":"pris@replicant.io"}
]};

for (let i = 0; i < nested.description.length; i++) {
  
  // console.log(nested.description[i].name)
  // console.log(nested.description[i].email)
  // console.log(nested.description[i].id)

  for (let prop in  nested.description[i]) {

  // no using of quotation marks coz prop is a variable
    console.log("nested:",prop,nested.description[i][prop])


}
}
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

let iife = (function(nmu2) {

  return {
    name: nmu2,
    id: 123,
    length: 4,
    width: 5,
    height: 6,
    sayHello: function() {
     return this.length * this.width * this.height
    }
  }

})('IIFE');

console.log("name:",iife.name, "id:",iife.id );
console.log("volume:",iife.sayHello());



// Js eventListeners

let m = document.getElementById('m')
let d = document.getElementById('d')
let p = document.getElementById('p')
let s = document.getElementById('s')

let highlight = (ev) => {
 ev.stopPropagation();
  let x = ev.currentTarget;
  x.className = 'gold'
  reset(x)
};

function reset(_element) {
 
 setTimeout(() =>{
  _element.className = ''}, 2000)
}

d.addEventListener('click', (ev)=>{
  ev.stopImmediatePropagation();
  log('Hi I\'m a DIV');
});

[m,d,p,s].forEach((element)=>{
 
  element.addEventListener('click', highlight);
})

// Time and Date

let date = new Date();

let calcTime  = 1000 * 60 * 60 * 24 * 365.25 * 40
let str = '14 November 1994'
let date1 = new Date( 1500000000000);
// current timestamp
log("timestamp:",date1)

// 40 years from timestamp
let time = new Date(calcTime);
log(time)
let  dstr = new Date(str)
log(dstr)
let date2 = new Date(1994,0,1,11,0,0,0,0,0)  
log(date2)

// Get and set methods in time object

date.setFullYear( 1994)
date.setHours(5)
log(date)

let getTime = date.getFullYear()
let day = date.getDay()

log(getTime, day)

// TIME OUTPUT

log(date.toDateString())
log(date.toLocaleDateString())
log(date.toUTCString())
log(date.toLocaleTimeString())
log(date.toTimeString())
log(date.toLocaleString('en-CA'))
log(date.toString())


// truthy and falsey

log(!!1)
log(!!date)
log(!!0)
log(!!'')
log(!!null)
log(!!undefined)
log(!!NaN)

// Null and undefined
let h;
console.log("undefined:",h);

// null and undefined
function abc(){
    //nothing here
    return null;
}
console.log("Null:", abc() );

// var y = global.blah;
// console.log(y);



// Try  catch statement

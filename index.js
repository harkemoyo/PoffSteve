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
      console.log("terminate the current loop");
      return false;
    }
    console.log(number);
   });


//    forEach in 
let Form2Student = ['mark', 'john', 'peter','mercy','Haron','Mecury', 'Venus']
   Form2Student.forEach((item,index, array) => {
    console.log(item); //( callback  )
    console.log(index) //( optional  )
    console.log(array) //( optional  )
  
  });
  
   
// importance of forEach in object

// Data set of students
let Students = [
    { rollNo: 21, name: 'Alpha' },
    { rollNo: 22, name: 'Beta' },
    { rollNo: 23, name: 'Gamma' },
    { rollNo: 24, name: 'Delta' },
    { rollNo: 25, name: 'Omega'}
];
  
// Use forEach() function
let StudentRollNo = [];
  
Students.forEach(function (item) {
    StudentRollNo.push(item.rollNo);
    StudentRollNo.push(item.name);
});
  
// Display rollNo data
console.log(StudentRollNo);


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
const mainFunction = (callback) => {
  setTimeout(() => {
      callback([2, 3, 4]);
  }, 10000)
}

// Add function
const add = (array) => {
  let sum = 0;
  for(let i of array) {
      sum += i;
  }
  console.log(sum);
}

// Calling main function
mainFunction(add);
   

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
  str.split('').forEach((element,index,array)=>{
      console.log(element)
      
  });
 
}
func();

// Join () method

let a = [1, 2, 3, 4, 5, 6];
console.log(a.join(' '));
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



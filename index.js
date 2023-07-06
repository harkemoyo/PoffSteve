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
let words = document.querySelectorAll(".word");
 
const animateAll = (animate) => {
    setTimeout(() => {
        animate(words[0]);
        setTimeout(() => {
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

  // console.log(message); 
  // Output: Uncaught ReferenceError: 
  // message is not defined
}

sayHello();

// lexical scope
// function myName(){
//   let mark = "Hark"
//   function greeting(){
//     console.log(`Hi ${mark}`);
//   }
//   greeting()
// }
// myName()


// lexical scope in setTimeout
let obj = {
  name: "Rob",
  print() {
  setTimeout(() => {
    console.log(this.name)
  }, 1000);
}
};
print()
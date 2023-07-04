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
    // console.log(element);
    
}

const student = {
    name:'mark', 
    age:'john',
    height:'peter',
    tall:'mercy',
    black:'Haron',
    live:'Mecury',
    home:'Venus'
}
   



// for in

for ( let  pop in student){
   

console.log(`in ${pop} : there is ${student[pop]} `);
}
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

// document.addEventListener('DOMContentLoaded', function(){
//     let btn = document.getElementById('btnSearch');
//     btn.addEventListener('click', doFindAndReplace);
// });

// function doFindAndReplace(ev){
//     ev.preventDefault();
    
//     let find = document.getElementById('find').value;
//     let replace = document.getElementById('replace').value;
    
//     let p = document.querySelector('.target');
    
//     while( p.textContent.indexOf(find) != -1 ){
//         p.textContent = p.textContent.replace(find, replace);
//     }
    
// }

// object methods that make iterable

// let westeros = {
//     cersei: 'Lannister',
//     arya: 'Stark',
//     jon: 'Snow',
//     brienne: 'Tarth',
//     daenerys: 'Targaryen',
//     theon: 'Greyjoy',
//     jorah: 'Mormont',
//     margaery: 'Tyrell',
//     sandor: 'Clegane',
//     samwell: 'Tarly',
//     ramsay: 'Bolton'
// }

// //for(let prop of arr)
// // foreach( )  filter( ) map() reduce()

// let keys = Object.keys(westeros);
// //console.log('Keys ', keys);
// let vals = Object.values(westeros);
// //console.log('Vals', vals);
// let entries = Object.entries(westeros);
// console.log('Entries', entries);
// console.log( entries[2][1] );

// function async await 


// async function getUser(){
//     let counter = 0;
//     let output = document.getElementById('output');
//     let userid = Math.floor(Math.random()* 10)+1;
//     let url = `https://jsonplaceholder.typicode.com/users/${userid}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     output.textContent += 'REQUEST SENT ';
//     output.textContent += JSON.stringify(data);
//     return 42;
// }

// let ret = getUser();
// console.log(ret);



/*
A symbol is a JavaScript Primitive data type
(Number, String, Boolean, null, undefined)
Every symbol value returned from Symbol() is unique.  
A symbol value may be used as an identifier for object properties; this is the data type's only purpose.
*/


const s1 = Symbol();
const s2 = Symbol(123);
const s3 = Symbol('steve');

//log(s1);
//log(s2);
//log(s3);
//log(typeof s2);
// log(s3.toString() );

// comparing to see if they are the same

//log( Symbol(42) == Symbol(42) );
//log( Symbol(42) === Symbol(42) );


//keys for symbols   .for
//log( Symbol.for(123) === Symbol(123) );
//log( Symbol.for(123) === Symbol.for(123) );
//log( Symbol.keyFor(s2) );
//let s5 = Symbol.for(555);
//log( Symbol.keyFor(s5) );
//
// let obj = {};
// obj['prop1'] = 'value1';
// obj['prop2'] = 'value2';
// obj[Symbol()] = 'value3';
// obj[Symbol()] = 'value3';
// obj[Symbol()] = 'value3';
// obj[Symbol()] = 'value3';
// obj['prop4'] = Symbol() ;
// //
// for( let p in obj){
//     console.log(p, obj[p]);
// }

// with obj symbols not supported with json.stringify()
// console.log( JSON.stringify(obj) );

let s4 = Symbol.for('fred');
console.log(s4);    //the symbol created with the key 'fred'
//
let k4 = Symbol.keyFor(s4);
console.log(k4);
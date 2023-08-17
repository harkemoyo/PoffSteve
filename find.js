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
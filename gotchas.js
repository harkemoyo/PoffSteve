// // gotchas in arrow functions
// let gotArr = 20;
// let char = {'prop 1': 'cool', 'prop 2':'Place'}

// // Arrow functions with one parameter with no curly brackets
// const arrow1 = (param) => { return param }
// console.log(arrow1(5));

// const arrow2 = param =>  param
// console.log(arrow1(2));

// // no parameter
// const arrow3 = () => gotArr 
// console.log(arrow3());
// const arrow4 = _ => gotArr
// console.log(arrow4());


// // return an object
// // const arrow5 = () => char
// // console.log(arrow5());
// const arrow6 = _ => ({'prop 1': 'cool', 'prop 2':'Place'})
// console.log(arrow6());

// // JSON stringify method
// // can be used as filter method

// let obj = {name: "Walter", 
//            last: "Sobchak",
//            age: 50, 
//            angry: true, 
//            bestscore: 200, 
//            armed: true};
// let str;

// str = JSON.stringify(obj);
// console.log('1', str);

// str = JSON.stringify(obj, ['age', 'angry', 'last']);
// log('\n2', str);

// function replace(key, val){
//     if(typeof val === 'number'){
//         return undefined;
//     }else{
//        return val; 
//     }
// }
// str = JSON.stringify(obj, replace);
// log('\n3', str);

// str = JSON.stringify(obj, null, 4);
// log('\n4', str);

// str = JSON.stringify(obj, null, '\tX\tX');
// log('\n5', str);


    //  
  
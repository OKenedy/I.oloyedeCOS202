// const arr = [1,2,3,4,5,6,600,120,38,12,300];

// function getIncrease(n){
//     return n + 10; // adds 10 to each number
// }

// const names = ['franc', 'james', 'mona', 'louisa', 'violene'];

// //convert first letter of each name to uppercase
// const getUpperCase = names.map(name => 
//   name[0].toUpperCase() + name.slice(1)
// );

// //increase each element in the array by 10
// const increase = arr.map(getIncrease);

// console.log(arr);        // original array (unchanged)
// console.log(increase);   // new array with +10 added
// console.log(getUpperCase); // names with capital first letter

// //filter out even numbers in the array
// const even = arr.filter(num => num % 2 == 0)
// console.log(even)

// //sum all elements in the array
// const add = arr.reduce((n,m) => n + m, 0)
// console.log(add)

// //product all elements in the array
// const product = arr.reduce((n,m) => n * m, 1)
// console.log(product)

// const isContained = arr.includes(20)
// console.log(isContained)

console.log(arr)

//arr.reverse()
arr.sort((a,b) => b - a)
names.shift()
console.log()
console.log(names)

const stream1 = names

console.log(stream1)
console.log(stream1 === names) // true, both variables reference the same array
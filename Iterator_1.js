
// Normal Array
let numbers=[100,200,300];

// Define Iterator
let itrNum = numbers[Symbol.iterator]();

// Print Next Value
console.log(itrNum.next().value);
// Print Next Value
console.log(itrNum.next().value);
// Print Entire Next Object 
console.log(itrNum.next());
// Print Done True when all values ends
console.log(itrNum.next());
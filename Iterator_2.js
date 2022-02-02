
// Normal Array
let numbers=[100,200,300];

// Define Iterator
let itrNum = numbers[Symbol.iterator]();

itrNum.next(); // we use first value
console.log(itrNum.next().value); // Print Second Value
console.log(itrNum.next().value);// Print Second Value

console.log("***********************")
// Apply loop on Iterators
let itrNum2 = numbers[Symbol.iterator]();
let result =itrNum2.next();

while(!result.done){
    console.log(result.value);
    result =itrNum2.next();
}
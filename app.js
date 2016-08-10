//Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Heyya, World");
}
reusableFunction();

function reusableFunction(){
  console.log("Hi World");
}
reusableFunction();

//Return a Value from a Function with Return
function minusSeven(num) {
  return num - 7;
}

var fromMinusSeven = minusSeven(20);
console.log(fromMinusSeven);
console.log(minusSeven(30));

/*Comparison with the Strict Equality Operator
Strict equality (===) is the counterpart to the equality operator (==).
Unlike the equality operator, strict equality tests both the data type and
value of the compared elements.
Examples
3 === 3   // true
3 === '3' // false

*/



// *****Function Type Annotation******

// You can annotate function parameters and return values.
function add(n1: number, n2: number): number {
  return n1 + n2;
}
//✅ Explanation:
// n1: number, n2: number → Parameters must be numbers.
// :number after the parentheses → Function must return a number.
console.log(add(10, 20));
console.log(typeof add(10, 20));

// If a function doesn’t return anything, use void:
function logMessage(message: string): void {
  console.log(message);
}

//without type annotation errors could happened like in this example
// function add(n1, n2) {  
//   return n1 + n2;
// }

// console.log(add(10, "20"));
// console.log(typeof add(10, "20"));  
// this will lead to concat the number with the string since 
// there is no type annotation to force assign the data type  

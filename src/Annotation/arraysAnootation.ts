//*  Array Type Annotation
// You can annotate arrays using the type followed by [] or the Array<T> generic syntax.
//using the type syntax
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Karim", "Ali", "Sara"];
// Sometimes a variable can hold more than one type. Use the | (pipe) operator for union types:
let both :(number |string)[] = [ 1,2,3,'A','b', 'c']

//Using generic syntax:
let values: Array<number> = [10, 20, 30,];
let values1: Array<string> = ["Karim", "Ali", "Sara"];
let values2: Array<number|string> = [10, 20, 30,"Karim", "Ali", "Sara"];


// multidimensional arrays 
let mlutiArray :(string | number |(string[]|string)[]|boolean)[] =[1,2,3,'a','b','c',[["Karim", "Ali", "Sara"], "Ali", "Sara"] , true , false]
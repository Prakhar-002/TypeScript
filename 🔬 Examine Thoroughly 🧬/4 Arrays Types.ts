
//? Arrays Types

/*
Arrays are a type of object that can store multiple values
of the same data type. Arrays in TypeScript are typed,
which means you can specify the type of values that an
array can hold.
*/

//?  2 Types Of Arrays

/*
- Using the square bracket notation [] to
indicate an array of a specific type
*/

const numbers: number[] = [1, 2, 3, 4];

/*
- Using the generic Array<type> notation to
indicate an array of a specific type
*/

const  names : Array<string> = ["Alice", "Bob", "Charlie"]; // old version




//!------------------------------------------------------

//? Multi Dimensional

/*
A mufti-dimensional array is an array that contains other
arrays as its elements. Multi-dimensional arrays can be
defined using the same notation as one-dimensional
arrays, but with nested square brackets.
*/

const singleDi : number[] = [1, 2, 3, 4];
const doubleDi : number[][] = [[1, 2, 3, 4]];
const tripleDi : number[][][] = [[[1, 2, 3, 4]]];



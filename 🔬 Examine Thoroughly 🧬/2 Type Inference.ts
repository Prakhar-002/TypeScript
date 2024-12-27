
//? Type Inference

/*
Type inference is a feature in TypeScript that allows the
compiler to— determine the type of a variable
based on its value. In other words, if you declare a variable
without explicitly specifying its type, TypeScript will try to
infer the type based on the—to it.
*/

let tech = "Typescript";
let n = 8;
let tsHard = true;

console.log(typeof (tech)); // string
console.log(typeof (n)); // number
console.log(typeof (isHard)); // boolean


//!------------------------------------------------------

//? Any Type

/*
TypeScript has a special any type that can be used to
represent any type. When a variable is annotated with the
any type, TypeScript will allow it to have—and
disable all type checking for that variable and its properties.
*/

//! Any Type (WARNING)

/*
While the any type can be useful in certain situations, it
should be used sparingly. Overuse of any can lead to {untyped code}
and make it harder to catch type-related
bugs during development. It's generally better to use more
specific types whenever possible to get the benefits of
TypeScript's type checking.
*/

let color : any = "crimson";
console.log(color);
color = 20
console.log(color);
color = false
console.log(color);
// color();  // give error on run but not here we can make it a function


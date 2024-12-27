
//? Tuples

/*
Tuple is a type that represents an array with a fixed number of elements
where each element can have a different type. The order of the types in
the tuple definition corresponds to the order of the values in the actual
array. Tuples are similar to arrays, but they have a specific structure and
can be used to model finite sequences with known lengths.
*/


let myTuple : [number, string] = [2510, "Hello World"]

// console.log(myTuple); //* [ 2510, 'Hello World' ]


//? Destructuring Individual Element 

let [first, sec] = myTuple;

// console.log(first); // 2510
// console.log(sec);   // Hello World



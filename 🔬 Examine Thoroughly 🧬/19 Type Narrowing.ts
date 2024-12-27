
//? Type Narrowing

/*
Type narrowing is the process of refining a variable's type within a
conditional block of code. This allows you to write more precise
and type-safe code.
*/



// Define a union type 
type MyType = string | number;


// Example function with type guard
function exampleFunction(value : MyType) : void {
      // Type guard using typeof
      if (typeof value === "string") {
            // within this block, typescript known that 'value' is a string
            console.log(value.toUpperCase());
      } else {
            // within this block, typescript known that 'value' is a number
            console.log(value.toFixed(2));
      }
}

// Example usage 
// exampleFunction("hello"); //* Outputs: HELLO
// exampleFunction(42); //* Outputs: 42.00



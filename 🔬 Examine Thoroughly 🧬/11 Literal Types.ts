
//? Literal Types


/*
Literal types allow you to specify a value that can only be
one specific literal value. This means that a variable with a
literal type can only have one specific value and no other.
*/

let pixColor: "red" | "crimson" | "green";

pixColor = "red";

// pixColor = "yellow" //!  error we can't assign it 


let secPassword : "secretPassword" = "secretPassword";

// secPassword = "something else" //! error : can't assign anything 

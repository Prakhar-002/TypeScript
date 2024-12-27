
//? Unions

/*
Unions are used to declare a type that can have one of several
possible types. Unions are useful when we want to allow a variable
or parameter to accept multiple types

The syntax for defining a union type in TypeScript uses the pipe
symbol (|).
*/


let pass : string | number = 12

pass = "password"


type AccountHolder = PersonDetail | AccountDetails;


const accountHolder1 : AccountHolder = {
      name: "Prakhar",
      age: 24
}

const accountHolder2 : AccountHolder = {
      email: "Pk@gmail.com",
      password: 12345,
}


//-----------------------------------------------------


const items : (number | string)[] = [1, 5, 5, "bob"]

// console.log(items);  //* [ 1, 5, 5, 'bob' ] 






//? Objects

/*
An object in TypeScript is a structured data type that represents
a collection of properties, each with a key and an associated
value. The properties Of an Object can have specific types and
the object itself can be annotated with a type, often defined
using an interface or a type alias. TypeScript uses structural
typing, meaning that the shape of an object (its structure or
properties) is what matters for type compatibility.
*/


//todo:  Syntax: type varName (annotations/types) = {property:vale }


// Define a person object

const person: {firstName: string; lastName: string; age: number} = {
      firstName: 'John',
      lastName: 'Doe',
      age: 54
}

// console.log(person.firstName);   //* John
// console.log(person.lastName);    //* Doe
// console.log(person.age);         //*  54



//------------------------------------------------------

function printUser() : {name: string; age: number; location: string} {
      return {
            name: 'Prakhar',
            age: 24,
            location: 'china'
      }
}


// console.log(printUser()); //* { name: 'Prakhar', age: 24, location: 'china' }





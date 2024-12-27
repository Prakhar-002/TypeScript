
//? Type Aliases


/*
A type alias is a way to create a new name for an existing type. It
allows you to define a custom type that refers to another type and
give it a more meaningful or descriptive name.

Type aliases are defined using the type keyword, followed by the
name of the alias, an equal sign (=), and the type it refers to.
*/


type User = { // convention is uppercase
      name: string
      age: number
};


const printUserInfo = (user: User) => {
      return `Name: (${user.name}) Age: (${user.age})`;
}


// console.log(printUserInfo({ name: "John", age: 23 }));  //* Name: (John) Age: (23)



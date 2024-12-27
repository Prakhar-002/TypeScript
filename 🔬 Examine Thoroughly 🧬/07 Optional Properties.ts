
//? Optional Properties

/*
You can make a certain property optional in an
object type by adding a question mark (?) after the
property name.

For example. let's say you have an Object type for a
person with name, age, and email properties. but
you want to make the email property optionaL You
can do this by adding a question mark after the
email property:
*/


type Client = {
      name : string;
      age: number;
      email? : string
}


const clientOne : Client = {
      name : "Prakhar",
      age: 20,
      // Email : optional
}

// console.log(clientOne);     //? { name: 'Prakhar', age: 20 }

const clientTwo : Client = {
      name : "Prakhar",
      age: 20,
      email: "Prakhar.katiyar.002@gmail.com"
}

// console.log(clientTwo);     //? { name: 'Prakhar', age: 20, email: 'Prakhar.katiyar.002@gmail.com' }



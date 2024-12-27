
//? Intersection Types

/*
An intersection type is a way into a combine multiple types
single type that includes all the properties and methods Of each
constituent type. An intersection type is denoted by the & symbol.
*/


type PersonDetail = {
      name: string;
      age: number
}

type AccountDetails = {
      email: string;
      password: number
}

type UserDetails = PersonDetail & AccountDetails;


const userDetailsOne : UserDetails =  {
      name: "prakhar",
      age: 24,
      email: "Prakhar@gmail.com",
      password: 12345678
}

// console.log(userDetailsOne);

/*
{
      name: 'prakhar',
      age: 24,
      email: 'Prakhar@gmail.com',
      password: 12345678
}
*/

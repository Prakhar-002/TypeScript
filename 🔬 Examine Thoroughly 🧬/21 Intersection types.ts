
//? Intersection types

/*
Intersection types in TypeScript allow you to combine
multiple types into a single type. The resulting type will
have all the properties of each individual type. You create
intersection types using the & operator.
*/



type Employee = {
      id: number,
      name: string
}

type Manager = {
      department: string,
      role: string
}


type ManagerWithEmployee = Employee & Manager;


const manager : ManagerWithEmployee = {
      id: 123,
      name: "Prakhar",
      department: "B-tech",
      role: "HOD"
}

// console.log(manager); //* { id: 123, name: 'Prakhar', department: 'B-tech', role: 'HOD' }





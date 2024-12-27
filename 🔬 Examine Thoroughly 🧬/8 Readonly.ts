
//? Readonly


type ClientPerson = {
      name : string;
      readonly age: number;
}


const clientPersonOne : ClientPerson = {
      name : "Prakhar",
      age: 20
}


// clientPersonOne.name = "Omaxe"; //? can possible to change
// clientPersonOne.age = 12        //? not possible cause age is readonly property

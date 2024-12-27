
//? Class Properties Annotations

/*
You can annotate class properties with a type. This allows you to
define the data type of the property and ensure that it is always
consistent. 
*/

class Person {
      name: string;
      age: number;

      constructor(name: string, age: number) {
            this.name = name,
            this.age = age
      }
}

const classPerson = new Person("John", 20);
// console.log(classPerson);


//? Access Modifiers

/*
In TypeScript, you cen use access modifiers to control the visibilit)
of class members (properties and methods). Access modifiers
determine the ways in which class members can be accessed
from within and outside the class.? 
*/

//- There are three types of access modifiers in TypeScript

//? - Public    -> Members marked as public can be accessed from anywhere, both inside and outside the class.
//? - Private   -> Members marked as private can only be accessed from within the class they are defined in.
//? - Protected -> Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.


class Animal {
      // `public` can be accessed anywhere (default access modifier)
      public name: string;

      // `private` can only be accessed within the class itself
      private age: number;

      // `protected` can be accessed within the class and its subclasses
      protected species: string;

      constructor(name: string, age: number, species: string) {
            this.name = name;
            this.age = age;
            this.species = species;
      }

      public getInfo(): string {
            return `Name: ${this.name}, Age: ${this.age}, Species: ${this.species}`;
      }

      private getSecret(): string {
            return "This is a private method.";
      }
}

class Dog extends Animal {
      constructor(name: string, age: number, species: string, private breed: string) {
            super(name, age, species);
      }

      public getDetails(): string {
            // Accessing public and protected members from the parent class
            return `Name: ${this.name}, Species: ${this.species}, Breed: ${this.breed}`;
      }
}

const animal = new Animal("Lion", 5, "Panthera leo");
// console.log(animal.name); //* Public: Accessible
// console.log(animal.age); // Error: 'age' is private and not accessible
// console.log(animal.species); // Error: 'species' is protected and not accessible

const dog = new Dog("Buddy", 3, "Canine", "Golden Retriever");
// console.log(dog.getDetails()); //* Public method


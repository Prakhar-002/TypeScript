
//? Interfaces

/*
Interface is a way to define a contract for the shape of an
object. It specifies the properties and their types that an
object must have. Interfaces are a powerful tool for enforcing
a certain structure in your code.
*/


/*
While interfaces are commonly used to define the structure
of objects, they are not limited to just objects. Interfaces in
TypeScript can also be used to describe the shape of
functions and classes.
*/


//? Interface for Functions

interface MathOperation {
      (x: number, y : number) : number;
}

// usage

const add : MathOperation = (a, b) => a + b;
const subtract : MathOperation = (a, b) => a - b;


// console.log(add(5, 1));      //* 6
// console.log(subtract(5, 1)); //* 4



//? Interface for Class

interface Vehicle {
      start() : void;
      stop() : void;
}

// Class implementing the interface
class Car implements Vehicle {
      start(): void {
            console.log("Car started");
      }

      stop(): void {
            console.log("Card Stopped");
      }
}

// usage
const myCar = new Car();
// myCar.start(); //* Car started
// myCar.stop();  //* Card Stopped








//? Annotations in ts

/*
Annotations are used to specify the data type of a variable,
parameter, function return value, and other types of values.
Annotations help developers catch errors
by allowing them to specify what types of values can be
assigned to a given variable or passed as an argument to a
function.
*/

// String 

let myName: string = "Prakhar katiyar";
myName = "I am some other person";

// console.log(myName);

// Number

let num: number = 12;
num++;
// console.log(num);

// Boolean
let isHard: boolean = true;

// console.log(isHard);


//!------------------------------------------------------ 

//? Type Inference

/*
Type inference is a feature in TypeScript that allows the
compiler to— determine the type of a variable
based on its value. In other words, if you declare a variable
without explicitly specifying its type, TypeScript will try to
infer the type based on the—to it.
*/

let tech = "Typescript";
let n = 8;
let tsHard = true;
// console.log(typeof (tech)); // string
// console.log(typeof (n)); // number
// console.log(typeof (isHard)); // boolean



//!------------------------------------------------------

//? Any Type

/*
TypeScript has a special any type that can be used to
represent any type. When a variable is annotated with the
any type, TypeScript will allow it to have—and
disable all type checking for that variable and its properties.
*/

//! Any Type (WARNING)

/*
While the any type can be useful in certain situations, it
should be used sparingly. Overuse of any can lead to {untyped code}
and make it harder to catch type-related
bugs during development. It's generally better to use more
specific types whenever possible to get the benefits of
TypeScript's type checking.
*/

let color : any = "crimson";
// console.log(color);
color = 20
// console.log(color);
color = false
// console.log(color);
// color();  // give error on run but not here we can make it a function




//!------------------------------------------------------

//? Function parameters Annotations

/*
Function parameter annotations in TypeScript are used to
specify the expected types Of the parameters that a
function takes.
*/


//? Regular function

function oddOne(num: number) {
      return num + 1;
}

// console.log(oddOne(3)); //* 4

//? Arrow functions

const double = (x: number, y : number) => x * y;
// if we do not specify anything as x, y 
// it would we assign any to it 

// console.log(double(2, 10)); //* 20

// console.log(double(2));       //! error
// console.log(double(2, 4, 5)); //! error

//? Default params value

function greet(person: string = "Anonymous") {
      return `Hello @${person}`;
}

// console.log(greet());           //* Hello @Anonymous
// console.log(greet("Prakhar"));  //* Hello @Prakhar


//? Return Annotation (Regular)

// Regular function return 

function general(param: string) : string {
      return param + "Sir";
}

// console.log(general("Prakhar"));  //* PrakharSir

// Arrow function

const double2 =  (x: number, y: number) : number => x * y;

// console.log(double2(5, 8)); //* 40






//!------------------------------------------------------

//? Void In TypeScript

/* 
Void is a type that represents the absence of any value.
It is often used as the return type for functions that do
not return a value.
*/

function printMsg(msg : string) : void {
      console.log(`This is my -> ${msg}`);
}

// printMsg("I Love You"); //* This is my -> I Love You





//!------------------------------------------------------

//? Never

/*
The never keyword is used to indicate that a function will
not return anything or that a variable can never have a
value. The never type is useful for indicating that certain
code paths should never be reached, or that certain
values are impossible. It can help catch errors at
compile-time instead of runtime.
*/


// A function that has an infinity loop

function infiniteLoop() : never {
      while(true) {};
}


// A variable that can never have a value 

let x : never;

function neverReturn() : never {
      while(true) {};
}

// x = neverReturn(); //* will never ans 






//!------------------------------------------------------

//? Arrays Types

/*
Arrays are a type of object that can store multiple values
of the same data type. Arrays in TypeScript are typed,
which means you can specify the type of values that an
array can hold.
*/

//?  2 Types Of Arrays

/*
- Using the square bracket notation [] to
indicate an array of a specific type
*/

const numbers: number[] = [1, 2, 3, 4];

/*
- Using the generic Array<type> notation to
indicate an array of a specific type
*/

const  names : Array<string> = ["Alice", "Bob", "Charlie"]; // old version




//!------------------------------------------------------

//? Multi Dimensional

/*
A mufti-dimensional array is an array that contains other
arrays as its elements. Multi-dimensional arrays can be
defined using the same notation as one-dimensional
arrays, but with nested square brackets.
*/

const singleDi : number[] = [1, 2, 3, 4];
const doubleDi : number[][] = [[1, 2, 3, 4]];
const tripleDi : number[][][] = [[[1, 2, 3, 4]]];




//!------------------------------------------------------

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






//!------------------------------------------------------

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





//!------------------------------------------------------

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




//!------------------------------------------------------

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








//!------------------------------------------------------

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




//!------------------------------------------------------

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






//!------------------------------------------------------

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





//!------------------------------------------------------

//? Tuples

/*
Tuple is a type that represents an array with a fixed number of elements
where each element can have a different type. The order of the types in
the tuple definition corresponds to the order of the values in the actual
array. Tuples are similar to arrays, but they have a specific structure and
can be used to model finite sequences with known lengths.
*/


let myTuple : [number, string] = [2510, "Hello World"]

// console.log(myTuple); //* [ 2510, 'Hello World' ]


//? Destructuring Individual Element 

let [first, sec] = myTuple;

// console.log(first); // 2510
// console.log(sec);   // Hello World





//!------------------------------------------------------

//? Enum

/*
Enum is a way to define a set of named constants.Enums allow
you to define a collection of related values that can be used
interchangeably in your code.
*/


enum WeatherConditions  {
      Sunny = "sunny",
      Cloudy = "cloudy",
      Rainy = "rainy",
}

enum WeekDays  {
      Sunday,
      Monday
}

// console.log(WeekDays.Sunday);  //* 0
// console.log(WeatherConditions.Sunny);  //* sunny
// console.log(WeekDays); //* { '0': 'Sunday', '1': 'Monday', Sunday: 0, Monday: 1 }







//!-----------------------OOPS------------------------------

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






//!-----------------------------------------------------

//? Getters & Setters

/*
Getters and setters are used to access and
modify class properties. Getters and setters allow
you to define a property in a class that looks like a
simple variable from the outside but internally has
additional logic for getting and setting the value.
*/


class GetSetPerson {
      private _firstName: string;
      private _lastName: string;

      constructor(firstName: string, lastName: string) {
            this._firstName = firstName;
            this._lastName = lastName;
      }

      // Getter for `fullName`
      get fullName(): string {
            return `${this._firstName} ${this._lastName}`;
      }

      // Setter for `fullName`
      set fullName(name: string) {
            const parts = name.split(" ");
            if (parts.length !== 2) {
                  throw new Error("Full name must include first and last name.");
            }
            this._firstName = parts[0];
            this._lastName = parts[1];
      }

      // Getter for `firstName`
      get firstName(): string {
            return this._firstName;
      }

      // Setter for `firstName`
      set firstName(value: string) {
            if (!value) {
                  throw new Error("First name cannot be empty.");
            }
            this._firstName = value;
      }
}

const getSetPerson = new GetSetPerson("John", "Doe");

// Using the getter
// console.log(getSetPerson.fullName); //* John Doe

// Using the setter
getSetPerson.fullName = "Jane Smith";
// console.log(getSetPerson.fullName); //* Jane Smith

// Get and set `firstName`
// console.log(getSetPerson.firstName); //* Jane
getSetPerson.firstName = "Alice";
// console.log(getSetPerson.fullName); //* Alice Smith





//!-----------------------------------------------------

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








//!-----------------------------------------------------

//? Declaration merging

/*
Once an interface is declared, it cannot be directly modified.
However, TypeScript allows what is informally referred to as
"declaration merging" or "interface extension," which is often
misconstrued as "re-opening."
*/

/*
Declaration merging in TypeScript refers to the ability to
extend or augment an existing declaration, including
interfaces. This can be useful when you want to add new
properties or methods to an existing interface without
modifying the original declaration.
*/



// original interface

interface Food {
      name: string,
      eat() : void
}

// Declaration merging (interface extension) 
interface Food {
      expire_date: string,
      buy(): void
}


const burger : Food = {
      name : "Burger",
      eat() {
            console.log("Eat me...");
      },
      buy() {
            console.log("Buy a Burger from BUrgerKing");
      },
      expire_date: "15-10-6520"
}

// console.log(burger);

/*
{
      name: 'Burger',
      eat: [Function: eat],
      buy: [Function: buy],
      expire_date: '15-10-6520'
}
*/






//!-----------------------------------------------------

//? Generics

/*
In TypeScript, generics allow you to create reusable
components that can work with a variety of types. Generics
make it possible for you to define functions, classes, and
interfaces that can work with different data types without
having to duplicate code.
*/


// Regular functions
const printNum = (n: number, m: number) : void  => console.log([n, m]);

const printStr = (n: string, m: string) : void => console.log([n, m]);

const printBool = (n: boolean, m: boolean) : void => console.log([n, m]);

// printNum(2, 4);               //* [ 2, 4 ]
// printStr("hello", "world");   //* [ 'hello', 'world' ]
// printBool(true, false);       //* [ true, false ]

// Genetic functions
const printAnyDataTypes = <T>(n : T, m : T) : void => {
      console.log([n, m]);
}

// printAnyDataTypes<number>(10, 20);            //* [ 10, 20 ] 
// printAnyDataTypes<string>("Hello", "world");  //* [ 'Hello', 'world' ]
// printAnyDataTypes<boolean>(true, false);      //* [ true, false ]



// Examples...

interface Cat {
      name: string;
      sound: string;
}

/*
?printAnyDataTypes<Cat>(
      {name: "kitty", sound: "meow"},
      {name: "Billi", sound: "Purr"}
);
*/


/*
[ 
      { name: 'kitty', sound: 'meow' }, 
      { name: 'Billi', sound: 'Purr' } 
]
*/


function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
      return array.filter((item) => condition(item))
}


const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


/*
console.log(
      filterArray<number>(numberArray, (n) => n % 2 === 0)
); */ // * [ 2, 4, 6, 8, 10 ]


const stringArr: string[] = ["ABCD", "EFGH", "IJK", "LMN"]

/*
console.log(
      filterArray(stringArr, (word) => word.length > 3)
);  */ //* [ 'ABCD', 'EFGH' ]




//? Multiple types of generics

function reversesPair<T, K>(item : T, value: K) : [K, T] {
      return [value, item];
}

/*
console.log(
      reversesPair<string, number> ("Hello", 210)
); */ //* [ 210, 'Hello' ]




//? Generics Class

class Box<T> {
      private val;

      constructor(val: T) {
            this.val = val;
      }

      getVal(): T {
            return this.val;
      }
}


const stringBox = new Box<String>("Hello, Typescript");
// console.log(stringBox.getVal()); //* Hello, Typescript






//!-----------------------------------------------------

//? Type Narrowing

/*
Type narrowing is the process of refining a variable's type within a
conditional block of code. This allows you to write more precise
and type-safe code.
*/



// Define a union type 
type MyType = string | number;


// Example function with type guard
function exampleFunction(value : MyType) : void {
      // Type guard using typeof
      if (typeof value === "string") {
            // within this block, typescript known that 'value' is a string
            console.log(value.toUpperCase());
      } else {
            // within this block, typescript known that 'value' is a number
            console.log(value.toFixed(2));
      }
}

// Example usage 
// exampleFunction("hello"); //* Outputs: HELLO
// exampleFunction(42); //* Outputs: 42.00





//!-----------------------------------------------------

//? Instanceof operator

/*
The instanceof operator is another type guard in
TypeScript that allows you to check whether an object is
an instance of a particular class or constructor function.
*/


class Lion {
      roar() : void {
            console.log("ROAAARRRRR!!!");
      }
}

class Cow {
      moo() : void {
            console.log("MOO!!!");
      }
}


function animalSounds(animal: Lion | Cow) {
      if (animal instanceof Lion) {
            animal.roar();
      } else {
            animal.moo();
      }
}


const myLion = new Lion();
const myCow = new Cow();

// animalSounds(myLion); //* ROAAARRRRR!!!
// animalSounds(myCow);  //* MOO!!! 




//!-----------------------------------------------------

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





//!-----------------------------------------------------

//? Declaration Files


//* console.log(document);






//!-----------------------------------------------------

//? Axios 


import axios, { AxiosResponse } from "axios";

interface Todo {
      userId: number,
      id: number,
      title: string,
      completed: boolean
}

const fetchData = async () => {
      try {

            const response : AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

            console.log("Todo :", response.data);
            

      } catch (error : any) {

            if (axios.isAxiosError(error)) {
                  console.error("Axios Error ", error.message);

                  if (error.response) {
                        console.log("Status : ", error.response.status);
                        console.log("Data : ", error.response.data);
                  }

            } else {
                  console.error("Error", error.message);
            }

      }
}

// fetchData();




//!-----------------------------------------------------

//? Express.js 

import express, { Request, Response } from "express";


const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
      res.send("Hello, Typescript with Express!")
});


app.listen(port,
      () => console.log(`server running on port ${port}`)
);
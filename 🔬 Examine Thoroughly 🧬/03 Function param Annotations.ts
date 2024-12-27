
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



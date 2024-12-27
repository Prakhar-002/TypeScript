
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




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


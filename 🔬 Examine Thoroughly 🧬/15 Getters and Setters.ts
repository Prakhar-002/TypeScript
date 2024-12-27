
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


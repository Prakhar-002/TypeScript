
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




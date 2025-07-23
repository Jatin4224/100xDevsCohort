type ChaiMeta = {
  favouriteChai: string;
  chaimugSize: "tall" | "short";
  cupCountPerDay: number;
};

type ChaiBanda<T> = {
  id: number;
  naam: string;
  umar: number;
  chaiDetails: T;
};

const bandaOne: ChaiBanda<(string | number)[]> = {
  id: 1,
  naam: "Trump",
  umar: 25,
  chaiDetails: ["Masala Chai", "tall", 3],
};

const bandaTwo: ChaiBanda<ChaiMeta> = {
  id: 2,
  naam: "Elon",
  umar: 28,
  chaiDetails: {
    favouriteChai: "Ginger",
    chaimugSize: "tall",
    cupCountPerDay: 4,
  },
};

type ChaiLover<Name extends string = string> = {
  name: Name;
  cupsPerDay: number;
};

type KnownChaiFan = ChaiLover<"Raju">;

type MysteryChaiFan = ChaiLover;

function incomingCall(name: string) {
  console.log(`Name: ${name.}`);
}

incomingCall("chai");





const chaiGang: string[] = ["chai", "ginger", "elaichi"];

function isChaiGangMember(name: string): boolean {
  return chaiGang.includes(name);
}


let namesToCheck= "ginger";

if (isChaiGangMember(namesToCheck)) {
  console.log(`${namesToCheck} is in the gang`);
} else {
  console.log(`${namesToCheck} is not in the gang`)
}


// function chaiDiscount(price: number, discount?: number): number {
//   return price - (discount || 0); 
// }

// let finalChaiPrice = chaiDiscount(100, 30);
// console.log(finalChaiPrice); 

function chaiDiscount(price: number, discount: number = 0): number {
  return price - discount;
}

let finalPrice = chaiDiscount(100);




function serveChai(chaiName: string, ...flavors: string[]) {
  for (const flavor of flavors) {
    console.log(`${flavor} chai served by ${chaiName}`);
  }
}

serveChai("Riya", 2024); 



function processInput(input: string | number): void {
  if (typeof input === 'number') {
    console.log(input * 2); 
  } else if (typeof input === 'string') {
    console.log(input.toUpperCase());
  }
}

processInput(4);
processInput("chai");


function registerUser({ name, age }: { name: string; age: number }) {

  const isAdult = age >= 18;
  return {
    name,
    isAdult,
    message: `Welcome, ${name}! You are ${isAdult ? 'an adult' : 'a minor'}.`
  };
}

const user1 = registerUser({ name: "Hitesh", age: 17 });
const user2 = registerUser({ name: "Elon", age: 21 });

console.log(user1);
console.log(user2);



function createUser(user: { id: number; name: string }): void {
  console.log(`Welcome ${user.name.toUpperCase()}`);
}



function processTransaction(
  input: string | number,
  config: { encrypt?: boolean } = { encrypt: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } if (config.encrypt) {
    return input.toUpperCase().split("").reverse().join("");
  }
  return input.toUpperCase();
}

console.log(processTransaction(100)); 
console.log(processTransaction("rent payment")); 
console.log(processTransaction("gift card", { encrypt: true })); 



type book = { 
  id: number; title: string; isAvailable: boolean 
}

const book1: book = {
  id: 1,
  title: 'The Silent Patient',
  isAvailable: true,
};
const book2: book = {
  id: 2,
  title: 'Atomic Habits',
  isAvailable: false,
};

function displayBookInfo(book: book): book {
  console.log(`"${book.title}" is currently ${book.isAvailable ? 'available' : 'unavailable'}.`);
  return book;
}

In TypeScript, Type Aliases allow us to create custom names for any type, not just objects.
You can use them to represent primitive types, unions, function signatures, tuples, and more.
This makes your code more readable, reusable, and easier to maintain.


type StringOrNumberOrBoolean = string | number| Boolean ;

let input: StringOrNumberOrBoolean;

input = "Hello";
input = 42;
input = true;


type Developer = {
  id: number;
  name: string;
  language: string;
};

type TeamLead = {
  id: number;
  name: string;
  developers: Developer[];
};

type TechStaff = Developer | TeamLead;
function printTechDetails(staff: TechStaff) {
  if ('developers' in staff) {
    console.log(`👨‍💼 ${staff.name} is a Team Lead managing ${staff.developers.length} developers.`);
  } else {
    console.log(`👨‍💻 ${staff.name} is a Developer skilled in ${staff.language}.`);
  }
}

const dev1: Developer = {
  id: 101,
  name: 'Sahil',
  language: 'TypeScript',
};

const lead1: TeamLead = {
  id: 201,
  name: 'Ankita',
  developers: [dev1],
};

printTechDetails(dev1);   // 👨‍💻 Sahil is a Developer skilled in TypeScript.
printTechDetails(lead1);  // 👨‍💼 Ankita is a Team Lead managing 1 developers.

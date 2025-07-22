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


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




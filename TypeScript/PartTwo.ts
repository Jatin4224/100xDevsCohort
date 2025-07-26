// type ChaiMeta = {
//   favouriteChai: string;
//   chaimugSize: "tall" | "short";
//   cupCountPerDay: number;
// };

// type ChaiBanda<T> = {
//   id: number;
//   naam: string;
//   umar: number;
//   chaiDetails: T;
// };

// const bandaOne: ChaiBanda<(string | number)[]> = {
//   id: 1,
//   naam: "Trump",
//   umar: 25,
//   chaiDetails: ["Masala Chai", "tall", 3],
// };

// const bandaTwo: ChaiBanda<ChaiMeta> = {
//   id: 2,
//   naam: "Elon",
//   umar: 28,
//   chaiDetails: {
//     favouriteChai: "Ginger",
//     chaimugSize: "tall",
//     cupCountPerDay: 4,
//   },
// };

// type ChaiLover<Name extends string = string> = {
//   name: Name;
//   cupsPerDay: number;
// };

// type KnownChaiFan = ChaiLover<"Raju">;

// type MysteryChaiFan = ChaiLover;

// function incomingCall(name: string) {
//   console.log(`Name: ${name.}`);
// }

// incomingCall("chai");

// const chaiGang: string[] = ["chai", "ginger", "elaichi"];

// function isChaiGangMember(name: string): boolean {
//   return chaiGang.includes(name);
// }

// let namesToCheck= "ginger";

// if (isChaiGangMember(namesToCheck)) {
//   console.log(`${namesToCheck} is in the gang`);
// } else {
//   console.log(`${namesToCheck} is not in the gang`)
// }

// // function chaiDiscount(price: number, discount?: number): number {
// //   return price - (discount || 0);
// // }

// // let finalChaiPrice = chaiDiscount(100, 30);
// // console.log(finalChaiPrice);

// function chaiDiscount(price: number, discount: number = 0): number {
//   return price - discount;
// }

// let finalPrice = chaiDiscount(100);

// function serveChai(chaiName: string, ...flavors: string[]) {
//   for (const flavor of flavors) {
//     console.log(`${flavor} chai served by ${chaiName}`);
//   }
// }

// serveChai("Riya", 2024);

// function processInput(input: string | number): void {
//   if (typeof input === 'number') {
//     console.log(input * 2);
//   } else if (typeof input === 'string') {
//     console.log(input.toUpperCase());
//   }
// }

// processInput(4);
// processInput("chai");

// function registerUser({ name, age }: { name: string; age: number }) {

//   const isAdult = age >= 18;
//   return {
//     name,
//     isAdult,
//     message: `Welcome, ${name}! You are ${isAdult ? 'an adult' : 'a minor'}.`
//   };
// }

// const user1 = registerUser({ name: "Hitesh", age: 17 });
// const user2 = registerUser({ name: "Elon", age: 21 });

// console.log(user1);
// console.log(user2);

// function createUser(user: { id: number; name: string }): void {
//   console.log(`Welcome ${user.name.toUpperCase()}`);
// }

// function processTransaction(
//   input: string | number,
//   config: { encrypt?: boolean } = { encrypt: false }
// ): string | number {
//   if (typeof input === "number") {
//     return input * input;
//   } if (config.encrypt) {
//     return input.toUpperCase().split("").reverse().join("");
//   }
//   return input.toUpperCase();
// }

// console.log(processTransaction(100));
// console.log(processTransaction("rent payment"));
// console.log(processTransaction("gift card", { encrypt: true }));

// type book = {
//   id: number; title: string; isAvailable: boolean
// }

// const book1: book = {
//   id: 1,
//   title: 'The Silent Patient',
//   isAvailable: true,
// };
// const book2: book = {
//   id: 2,
//   title: 'Atomic Habits',
//   isAvailable: false,
// };

// function displayBookInfo(book: book): book {
//   console.log(`"${book.title}" is currently ${book.isAvailable ? 'available' : 'unavailable'}.`);
//   return book;
// }

// In TypeScript, Type Aliases allow us to create custom names for any type, not just objects.
// You can use them to represent primitive types, unions, function signatures, tuples, and more.
// This makes your code more readable, reusable, and easier to maintain.

// type StringOrNumberOrBoolean = string | number| Boolean ;

// let input: StringOrNumberOrBoolean;

// input = "Hello";
// input = 42;
// input = true;

// type Developer = {
//   id: number;
//   name: string;
//   language: string;
// };

// type TeamLead = {
//   id: number;
//   name: string;
//   developers: Developer[];
// };

// //combining both types using union
// type TechStaff = Developer | TeamLead;

// function printTechDetails(staff: TechStaff) {
//   if ('developers' in staff) {
//     console.log(`${staff.name} is a Team Lead managing ${staff.developers.length} developers.`);
//   } else {
//     console.log(`${staff.name} is a Developer skilled in ${staff.language}.`);
//   }
// }

// const devA: Developer = {
//   id: 101,
//   name: 'Hitesh',
//   language: 'TypeScript',
// };

// const leadA: TeamLead = {
//   id: 201,
//   name: 'Elon',
//   developers: [devA],
// };

// printTechDetails(devA);
// printTechDetails(leadA);

// interface Founder {
//   name: string;
//   age: number;
//   country: string;
//   active: boolean;
//   netWorth?: number;
//   getDetails(): string;
// }

// interface Company extends Founder {
//   companyName: string;
//   foundedYear: number;
//   isPublic: boolean;
//   getCompanyDetails(): string;
// }

// const company: Company = {
//   name: "Hitesh",
//   age: 35,
//   country: "India",
//   active: true,
//   netWorth: 120000000,
//   companyName: "chai aur code",
//   foundedYear: 2025,
//   isPublic: true,

//   getDetails() {
//     return `${this.name}, age ${this.age}, from ${this.country}, is ${this.active ? "active" : "inactive"}${this.netWorth ? ` with a net worth of $${this.netWorth}` : ""}.`;
//   },

//   getCompanyDetails() {
//     return `${this.companyName} was founded in ${this.foundedYear} and is currently ${this.isPublic ? "a public" : "a private"} company.`;
//   }
// };

// console.log(company.getDetails());
// console.log(company.getCompanyDetails());

// interface Vehicle {
//   make: string;
//   model: string;
//   getDetails(): string;
// }
// interface Car extends Vehicle {
//   numberOfDoors: number;
//   isElectric: boolean;
// }

// interface Motorcycle extends Vehicle {
//   hasSidecar: boolean;
// }

// function getRandomVehicle(): Car | Motorcycle {
//   if (Math.random() < 0.5) {
//     const car: Car = {
//       make: "Tesla",
//       model: "Model 3",
//       numberOfDoors: 4,
//       isElectric: true,
//       getDetails() {
//         return `${this.make} ${this.model} - ${this.numberOfDoors} doors, ${this.isElectric ? "Electric" : "Gasoline"}`;
//       }
//     };
//     return car;
//   } else {
//     const motorcycle: Motorcycle = {
//       make: "Harley-Davidson",
//       model: "Street 750",
//       hasSidecar: false,
//       getDetails() {
//         return `${this.make} ${this.model} - Sidecar: ${this.hasSidecar ? "Yes" : "No"}`;
//       }
//     };
//     return motorcycle;
//   }
// }

// const myVehicle = getRandomVehicle();
// console.log(myVehicle.getDetails());

// interface GamingConsole {
//   readonly serialNumber: string;
//   model: string;
//   memory: number;
//   battery?: number;
//   upgradeMemory(extra: number): number;
// }

// const consoleOne: GamingConsole = {
//   serialNumber: "GCX-2025-0098",
//   model: "PlayBox X",
//   memory: 64,
//   battery: 85,
// upgradeMemory(extra: number): number {
//     this.memory += extra;
//     return this.memory;
//   }
// };
// const updatedMemory = consoleOne.upgradeMemory(16);
// console.log(`${updatedMemory} GB`);

// //tuples nd enums
// let person : [string,number] = ['jai',24];
// let date: [number,number,number] = [12,20,2002];
// date.push(23)

// function getPerson():[string,number] {
// return ['jai',29];

// }

// enum ServerResponseStatus {
//   Success,
//   Error,
// }

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Success,
//     data: ['first item', 'second item'],
//   };
// }

// const response = getServerResponse();

// enum ProductCategory {
//   Electronics,
//   Clothing,
//   Books,
// }
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category: ProductCategory;
//   availability: [inStock: boolean, warehouseLocation: string];
// };
// function createProduct(product: Product): Product {
//   return product;
// }

// const newProduct = createProduct({
//   id: 101,
//   name: "MacBook",
//   price: 49999,
//   category: ProductCategory.Electronics,
//   availability: [true, "Jaipur"],
// });

// console.log(newProduct);

// let response: any = "42";

// let numericLength: number = (response as string).length;

// console.log(numericLength);

// type Book = {
//   name: string;
// };

// let bookString = '{"name":"One Thing"}';

// let bookObject = JSON.parse(bookString) as Book;

// console.log(bookObject.name);

// const inputElement = document.getElementById("username") as HTMLInputElement;

// inputElement.value = "Hitesh";

// enum Status {
//   Pending = "pending",
//   Declined = "declined",
// }

// type User = {
//   name: string;
//   status: Status;
// };

// const statusFromDB = "pending";

// const user: User = {
//   name: "Alice",
//   status: statusFromDB as Status,
// };
// console.log(user);

// let someValue: any = "42";
// let value = someValue as number;

// let value: unknown;

// value = "chai";
// value = [1, 2, 3];
// value = 2.5;

// if (typeof value === "string") {
//   value.toUpperCase();
// }

// try {
//   // some code that might throw an error
// } catch (error) {
//   console.log(error.message);
// }

// try {
//   // some code that might throw an error
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log("Error:", error);
//   }
// }

// const data: unknown = 20;
// const strData: string = data as string;

// console.log(strData.toUpperCase());

// type Role = "admin" | "user" | "superadmin";

// function redirectBasedOnRole(role: Role): void {
//   if (role === "admin") {
//     console.log("Redirecting to admin dashboard");
//     return;
//   }

//   if (role === "user") {
//     console.log("Redirecting to user home");
//     return;
//   }

//   role;
// }

// function throwErr(message: string): never {
//   throw new Error(message);
// }

// function infinite(): never {
//   while (true) {
//     // doing some background task forever...
//   }
// }

// let a: never;

// function neverReturn(): never {
//   while (true) {}
// }

// a = neverReturn(); // allowed because neverReturn() returns never
// a = 5;

// class Animal {
//   sound() {
//     console.log("Animal sound");
//   }
// }

// const pet = new Animal();

// if (pet instanceof Animal) {
//   pet.sound();
// }

// function processPayment(payment: string | number) {
//   if (typeof payment === "string") {
//     console.log(`Payment made via UPI: ${payment}`);
//   }

//   if (typeof payment === "number") {
//     console.log(`Payment made via card ending in: ${payment}`);
//   }
// }

// processPayment("Hitesh@paytm");
// processPayment(1234);

// "engine" in { type: "Chrome", engine: { name: "Blink" } };
// "engine" in { type: "Firefox", engine: { name: "Gecko" } };
// "engine" in { type: "Safari", engine: { name: "WebKit" } };
// "engine" in { type: "OldBrowser" };
// "engine" in { type: "GhostBrowser", engine: undefined };

// interface Student {
//   studentID: string;
// }

// interface CorporateEmployee {
//   employeeCode: number;
// }

// interface RegularVisitor {
//   name: string;
//   dailyChaiCount: number;
// }

// const getVisitorIdentifier = (
//   person: Student | CorporateEmployee | RegularVisitor
// ) => {
//   if ("name" in person) {
//     return `Regular Visitor: ${person.name}`;
//   } else if ("studentID" in person) {
//     return `Student ID: ${person.studentID}`;
//   } else {
//     return `Corporate Code: ${person.employeeCode}`;
//   }
// };

// console.log(getVisitorIdentifier({ studentID: "123" }));

// interface Car {
//   drive(): void;
//   numberOfDoors: number;
// }

// interface Bike {
//   ride(): void;
//   hasCarrier: boolean;
// }

// // Type guard function
// function isCar(vehicle: Car | Bike): vehicle is Car {
//   return (vehicle as Car).drive !== undefined;
// }

// // Usage
// let vehicle: Car | Bike = {
//   ride: () => console.log("Riding the bike!"),
//   hasCarrier: true,
// };

// if (isCar(vehicle)) {
//   vehicle.drive(); // TypeScript knows it's a Car here
//   console.log("This vehicle has", vehicle.numberOfDoors, "doors");
// } else {
//   vehicle.ride(); // TypeScript knows it's a Bike here
//   console.log("Does this bike have a carrier?", vehicle.hasCarrier);
// }

// interface Student {
//   rollNumber: number;
// }

// interface Teacher {
//   subject: string;
// }

// function isStudent(person: Student | Teacher): person is Student {
//   return (person as Student).rollNumber !== undefined;
// }

// const omeone: Student | Teacher = {
//   rollNumber: 101,
// };

// if (isStudent(someone)) {
//   console.log("He is a student with roll no:", someone.rollNumber);
// } else {
//   console.log("He is a teacher who teaches:", someone.subject);
// }
// type Species = "cat" | "dog";

// interface Pet {
//   species: Species;
// }

// interface Cat extends Pet {}

// function petIsCat(pet: Pet): pet is Cat {
//   return pet.species === "cat";
// }

// function getValues(valueA: number | string, valueB: string) {
//   if (valueA === valueB) {
//     // this is where the narrowing takes place. narrowed to string
//     console.log(typeof valueA); // string
//   } else {
//     // if there is no narrowing, type remains unknown
//     console.log(typeof valueA); // number or string
//   }
// }

interface Car {
  model: string;
  drive(): void;
}

function isCar(obj: any): obj is Car {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "drive" in obj &&
    typeof obj.drive === "function"
  );
}

function startVehicle(vehicle: any) {
  if (isCar(vehicle)) {
    console.log(`Starting car model: ${vehicle.model}`);
    vehicle.drive();
  } else {
    console.log("This is not a car.");
  }
}

type GreenTea = {
  flavor: string;
  steep: () => void;
};

type BlackTea = {
  flavor: string;
  brew: () => void;
};

type Tea = GreenTea | BlackTea;

const randomTea = (): Tea => {
  return Math.random() > 0.2
    ? { flavor: "Mint", steep: () => console.log("Steeping green tea...") }
    : { flavor: "Masala", brew: () => console.log("Brewing black tea...") };
};

const tea = randomTea();

if ("steep" in tea) {
  tea.steep();
} else {
  tea.brew();
}

function isGreenTea(tea: Tea): tea is GreenTea {
  return "steep" in tea;
}

if (isGreenTea(tea)) {
  tea.steep();
} else {
  tea.brew();
}

type Car = { type: "car"; model: string; drive: () => void };
type Plane = { type: "plane"; model: string; fly: () => void };
type Vehicle = Car | Plane;

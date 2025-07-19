// // let coffe: boolean = "black";
// // console.log(coffe);

// // // TypeScript will give an error
// // // if I try to assign a number or string to `coffee`.
// // // For example:
// // // coffee = 100;      ❌ Error
// // // coffee = "black";  ❌ Error
// // // Because the variable `coffee` is strictly typed as a boolean,
// // // it can only accept `true` or `false` as values.

// // //Create a variable of type string and stir in your favorite string method (e.g., .toUpperCase() or .includes()).

// // // 1. Create a variable of type string and stir in your favorite string method (e.g., .toUpperCase() or .includes()).
// // let chaiFlavour: string = "masala chai";
// // chaiFlavour = chaiFlavour.toUpperCase();
// // console.log(chaiFlavour);

// // //2.
// // let sugarCubes: number = 2;
// // sugarCubes = sugarCubes + 3;
// // console.log(sugarCubes);
// // //3.
// // let isChaiHot: boolean = true;
// // let isChaiReady: boolean = false;

// // let canServeChai: boolean = isChaiHot && isChaiReady;
// // console.log(canServeChai);

// // chaiFlavour = 42;
// // sugarCubes = "five";
// // isChaiHot = "yes";

// // let Drink = "chai";

// // let cups = Math.random() > 0.5 ? 10 : 5;

// // let firstName = "Hitesh";

// // firstName.length();

// // let let, Name;

// // console.Hiteshdotcom("Work hard, learn fast. If he can do it, you can too.");

// // let channelName = "chai";
// // channelName = true;

// // let theme: any = "chai theme";
// // theme: 20;
// // theme: true;
// // theme();
// // theme.toUpperCase();
// // console.log(theme);

// // let subcribers: number | string = 10;
// // subcribers = 100000;
// // subcribers = "1million";

// // let requestStatus: "pending" | "success" | "error" = "pending";
// // requestStatus = "success";
// // requestStatus = "error";
// // requestStatus = "done";

// // const orders = ["12", "20", "28", "42"];
// // let currentOrder: string | undefined;

// // for (let order of orders) {
// //   if (order === "28") {
// //     currentOrder = order;
// //     break;
// //   }
// // }
// // console.log(currentOrder);

// // ## 🧠 Challenge

// //Create a variable `chaiOrder` of type `'ordered' | 'brewing' | 'served'` and assign it the value `'ordered'`. Then,
// //try assigning it the values `'brewing'` and `'served'`.

// //Create a variable `chaiDiscount` of type `number | string` and assign it the value `30`. Then, try assigning it the value `'30%'`.

// let chaiDiscount: number | string = 20;
// chaiDiscount = "20%";
// //chaiDiscount = true //typescript😡❌

// let chaiOrder: "ordered" | "brewing" | "served" = "ordered";
// chaiOrder: "served";
// chaiOrder: "brewing";

// function incomingCall(num: number) {
//   return num + 1;
// }

// const callsReceived = incomingCall(2);
// console.log(callsReceived);

// const outgoingCall = (a: number, b: number) => a * b;
// const callsDialed = outgoingCall(2, 1, 3);
// console.log(callsDialed);

// function namaste(person: string = "Hitesh") {
//   return `Namaste ${person}`;
// }

// const res = namaste();
// console.log(print);

// function double(a: number): number {
//   return a * a;
// }

// const finalOutput = double(2);
// console.log(finalOutput);

// const doubleArrow = (a: number): number => a * a;

// const finalOutputArrow = doubleArrow(2);
// console.log(finalOutput);

// function orderChai(message: string): void {
//   console.log(`This is your order, sir: ${message}`);
// }

// orderChai("Hitesh");

// function throwErr(message: string): never {
//   throw new Error(message);
// }

// function infinite(): never {
//   while (true) {}
// }

// let a: never;
// function neverRet(): never {
//   while (true) {}
// }

// const numbers: number[] = [4, 5, 6, 8, "Error", "string"];

// const chaiFlavours: string[] = ["chai", "masala chai", "kadak chai"];

// chaiFlavours.push("adrak chai");

// chaiFlavours.push(12);

// // const isLoggedIn: boolean[] = [true, false, true];

// // const mixedValues: (number | string)[] = [1, "two", 3, "four"];

// // const numbers: Array<number> = [4, 5, 6, 8];

// // // const chaiFlavours: Array<string> = ["chai", "masala chai", "kadak chai"];

// // const isLoggedIn: Array<boolean> = [true, false, true];

// // const mixedValues: Array<number | string> = [1, "two", 3, "four"];

// // const chaiAurMatrix: number[][] = [
// //   [1, 2],
// //   [3, 4],
// // ];

// // const OneD: number[] = [1, 2, 3, 4, 5];
// // const twoD: number[][] = [[1, 2, 3, 4, 5]];
// // const threeD: number[][][] = [[[1, 2, 3, 4, 5]]];

// // console.log(OneD);
// // console.log(twoD);
// // console.log(threeD);

// // function Founder(): { name: string; age: number; location: string } {
// //   return {
// //     name: "Hitesh",
// //     age: 35
// //     location: "Jaipur",
// //   };
// // }

// // const chaiOrder: {
// //   name: string;
// //   price: number;
// //   isMasala: boolean;
// // } = {
// //   name: "Elaichi Chai",
// //   price: 20,
// // };

// // console.log("Chai Name:", chaiOrder.name);
// // console.log("Price: ₹", chaiOrder.price);

// // type Chai = {
// //   name: string;
// //   price: number;
// // };

// // function printChai(order: Chai) {
// //   console.log(`Chai Name: ${order.name},Price: ₹${order.price}`);
// // }

// // const myChai: Chai = {
// //   name: "Ginger Masala Chai",
// //   price: 25,
// // };

// // printChai(myChai);

// // type Chai = {
// //   name: string;
// //   isMasala: boolean;
// //   sugar: boolean;
// // };

// // const order1: Chai = {
// //   name: "Ginger Chai",
// //   isMasala: true,
// // };

// // const order2: Chai = {
// //   name: "Plain Chai",
// //   isMasala: false,
// //   sugar:true,
// // };

// // console.log(order1);
// // console.log(order2);

// // type Chai = {
// //   readonly name: string;
// //   isMasala: boolean;
// //   sugar?: boolean;
// // };

// // const order1: Chai = {
// //   name: "Ginger Chai",
// //   isMasala: true,
// // };

// // order1.name = "Lemon Chai";

// // // Basic type for Chai
// // type Chai = {
// //   name: string;
// //   isMasala: boolean;
// // };

// // // Additional properties for orders
// // type OrderInfo = {
// //   id: number;
// //   quantity: number;
// // };

// // // Combine both using intersection (&)
// // type ChaiOrder = Chai & OrderInfo;

// // // Create an order
// // const order: ChaiOrder = {
// //   name: "Elaichi Chai",
// //   isMasala: true,
// //   id: 101,
// //   quantity: 2,
// // };

// // let color:"red"|"black"|"white";
// // color="red";
// // color="black"

// // let isTrue:true;
// // isTrue=true;
// // isTrue=false;

// // let number: 1|2|3;
// // number=1;
// // number=4;

// // let chaiAurTuple : [string, number,boolean] = ["hey", 52, true];
// // const [first,second,three] = chaiAurTuple;
// // console.log(first);
// // console.log(second);
// // console.log(three);

// // enum OrderStatus {
// //   Placed="yes",
// //   Preparing="in 20mins",
// // }

// // const Order = OrderStatus.Placed;
// // console.log(Order);

// interface Menu {
//   breakfast: string;
//   lunch: string;
//   time: number;
// }

// const order: Menu = {
//   breakfast: "Kachori",
//   lunch: "daal bati",
//   time: 12,
// };

// interface ChaiBanda {
//   naam: string;
//   umar: number;
// }

// interface ChaiReturn {
//   naam: string;
//   umar: number;
//   doubleUmar: number;
// }

// function chaiUmarBooster({ naam, umar }: ChaiBanda): ChaiReturn {
//   return {
//     naam,
//     umar,
//     doubleUmar: umar * 2,
//   };
// }

// const chaiResult = chaiUmarBooster({ naam: "Hitesh", umar: 35 });
// console.log(chaiResult);
// Here's an improved explanation with a different example and clearer language:

// ---

// ### 🧠 Interfaces with Classes in TypeScript

// TypeScript introduced support for the `class` keyword through ES2015. You can define classes with properties and methods like this:

// ```ts
// class Car {
//   brand: string = '';
//   speed: number = 0;
// }

// const myCar = new Car();
// ```

// But what if you want to make sure a class strictly follows a certain structure? That’s where **interfaces** come in.

// We can define an interface and then use the `implements` keyword in the class to ensure it adheres to that interface:

// ```ts
// interface Vehicle {
//   brand: string;
//   speed: number;
// }
// ```

// Now, let's try to implement this interface in a class—but with a mistake:

// ```ts
// // ❌ Error: Property 'speed' is missing in type 'Bike' but required in type 'Vehicle'
// class Bike implements Vehicle {
//   brand: string = 'Yamaha';
// }

// const myBike = new Bike();
// ```

// TypeScript throws an error because the `Bike` class does not fulfill the contract defined by the `Vehicle` interface. It’s missing the required `speed` property.

// ✅ **Fixing the class to correctly implement the interface:**

// ```ts
// class Bike implements Vehicle {
//   brand: string = 'Yamaha';
//   speed: number = 100;
// }

// const myBike = new Bik

// interface Gamer {
//   username: string;
//   level: number;
//   rank: string;
//   play(): void;
// }

// function welcome(gamer: Gamer) {
//   console.log(`Welcome, ${gamer.username} (Level: ${gamer.level}, Rank: ${gamer.rank})`);
//   gamer.play();
// }

// const shadow: Gamer = {
//   username: "Hitesh",
//   level: 45,
//   rank: "Diamond",
//   play() {
//     console.log("Entering stealth mode..");
//   },
// };

// const pixel: Gamer = {
//   username: "Elon",
//   level: 29,
//   rank: "Platinum",
//   play() {
//     console.log("Unleashing pixel storm!");
//   },
// };

// welcome(shadow);
// welcome(pixel);

// class Car {
//   brand: string = '';
//   speed: number = 0;
// }

// const myCar = new Car();

// interface Vehicle {
//   brand: string;
//   speed: number;
// }

// // ❌ Error: Property 'speed' is missing in type 'Bike' but required in type 'Vehicle'
// class Bike implements Vehicle {
//   brand: string = 'Yamaha';
// }

// const myBike = new Bike();
// s;

class Car {
  brand: string = "";
  speed: number = 0;
}

const myCar = new Car();

interface Vehicle {
  brand: string;
  speed: number;
}

class Bike implements Vehicle {
  brand: string = "Yamaha";
  speed: number = 100;
}

const myBike = new Bike();

interface Vehicle {
  brand: string;
  speed: number;
  price?: number;
}

interface ChaiBanda {
  readonly name: string;
}

const chaiBanda: ChaiBanda = {
  name: "Hitesh",
};

function renameChaiBanda(banda: ChaiBanda) {
  console.log(`Serving chai to '${banda.name}'.`);
  banda.name = "KulhadKing";
}

interface Human {
  name: string;
  age: string;
}

interface Goals {
  goals: string[];
  gym: string;
}

interface HumanWithPurpose extends Human, Goals {}

// HumanWithPurpose would become:

interface HumanWithPurpose {
  name: string;
  age: string;
  goals: string[];
}

interface Pizza {
  type: "pizza";
  toppings: string[];
}

interface Drink {
  type: "drink";
  flavor: string;
}

type FoodItem = Pizza | Drink;

function serve(item: FoodItem) {
  if (item.type === "pizza") {
    console.log("Serving pizza with:", item.toppings);
  } else {
    console.log("Serving drink with flavor:", item.flavor);
  }
}

const order1: FoodItem = {
  type: "pizza",
  toppings: ["cheese", "olives"],
};

const order2: FoodItem = {
  type: "drink",
  flavor: "lemon",
};

serve(order1);
serve(order2);

interface User {
  name: string;
}

interface User {
  age: number;
  greet(): void;
}

interface User {
  name: string;
  age: number;
  greet(): void;
}

// const printMacBookName = (name: string) => console.log(`MacBook: ${name}`);
// const printMacBookPrice = (price: number) => console.log(`Price: $${price}`);
// const printInStock = (available: boolean) =>
//   console.log(`In Stock: ${available}`);

// printMacBookName("M4");
// printMacBookPrice(14999);
// printInStock(true);

const printMacBookDetail = (detail: any) => {
  console.log("Detail:", detail);
};

printMacBookDetail("M4");
printMacBookDetail(14999);
printMacBookDetail(true);
printMacBookDetail(() => 123);

const printMacBookDetail = <T>(detail: T): void => {
  console.log("Detail:", detail);
};

printMacBookDetail("M4"); // T = string
printMacBookDetail(14999); // T = number
printMacBookDetail(true); // T = boolean

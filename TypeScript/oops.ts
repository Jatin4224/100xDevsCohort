class Device {
  name = "j5";
  price = 1000;
  category = "digital";
}

class Laptop {
  brand = "HP";
  ram = 8; 
  isPoweredOn = false;

  turnOn() {
    this.isPoweredOn = true;
    console.log("Laptop is booting up...");
  }
}


// Use the 'new' keyword to create an instance of the class

let myLaptop = new Laptop();
let workLaptop = new Laptop();

console.log(myLaptop.brand); 
console.log(workLaptop.brand); 
myLaptop.turnOn(); 

class MusicPlayer {
  brand: string;
  storageGB: number;

  constructor(brandName: string, storageSize: number) {
    this.brand = brandName;
    this.storageGB = storageSize;
  }
}

let walkman = new MusicPlayer("Sony", 128);
let ipod = new MusicPlayer("Apple", 256);

console.log(walkman.brand); 
console.log(ipod.brand); 



//when i use new nd class name it will give me new ddevice
let d1 = new Device();
let d2 = new Device();

// now the problem is d1 and d2 is same to make it different i have to know constructor function

class Boook {
  pages = 22;
  color = "black";
}

let book1 = new Boook();

// now this is how we create classes and run the classses

// Constructors
// lass chaiMaker {}

// new chaiMaker("kadak chai", 25);c
//  now where will this kadak chai nad 25 will go this will go to the constructor

class chai {
  constructor(name: string, price: number) {}
}

let chaiOne = new chai("kadak chai", 25);

// now this kadak chai nd price will be recved on chaione console it

// so when u need something from user u can define it in constructor

class chaiRec {
  constructor(flavour: string, sugar: boolean) {}
}

const rec1 = new chaiRec("tulsi", true);
const rec2 = new chaiRec("kadak", false);

// so constructor needs something u want to

class youtube {
  constructor(
    CreatorName: string,
    subsribers: number,
    videoTitle: string,
    channelName: string
  ) {}
}

let channelInfo = new youtube("HITESH", 10000000, "TypeScript", "chaiaurcode");

//This.Keyword

class course {
  name = "python bootcamp";

  method() {
    console.log(this.name);
  }
}


class Book {
  constructor(public title: string, public author: string) {}
}

let myBook = new Book("ChaiCode", "Hitesh");

console.log(myBook.title); 
myBook.title = "Hitesh Choudhary"; 
console.log(myBook.title);






console.log(this.name); //Property 'name' does not exist on type 'typeof globalThis'

//Public and private access modifiers

// class websiteBuilder {
//   constructor(name: string) {}
// }

// let web1 = new websiteBuilder("lovable");
// now i set the name private and than try to change its name

class websiteBuilder {
  constructor(private name: string) {}
}

let web1 = new websiteBuilder("lovable");
web1.name = "bolt"; //Property 'name' is private and only accessible within class 'websiteBuilder'
// typescript will compile this code nad show u the output new name but warn u that their is issue in your code

// now i wil lprovdie it public keyword
class websiteBuilder2 {
  constructor(public name: string) {}
}

let web2 = new websiteBuilder2("lovable");
web2.name = "bolt";
//now in public - means u can change name in construcotr or in any method so u can its an openbook

//nd in private u cant change it anywhere like it its only asseible inside the class

//Protected accesss Modifier

class chaicode {
  private name = "hitesh";
}

class hitesh extends chaicode {
  public newName = "new name ";
}

// what to do i want to make variable private nd if any other class extends it we can use it in private u cannot extend it in new class so we use protected here

//Optional properties (?)
// TypeScript Classes - readonly Fields

// TypeScript allows fields to be readonly. As it implies, readonly fields tempt not be assigned from an instance, even with a setter. They are legal to be initialized at the top declaration and also assigned inside the constructor:
//alwasy write acess modifer before readonly
//now if u want that name cannot be change so use readonly
class User {
  constructor(public readonly name: string) {}

  changeName() {
    this.name = "Elon"; //Cannot assign to 'name' because it is a read-only property.
  }
}

let founder = new User("HITESH");

//PARAMETER PROPERTIES
class User {
  constructor(public name: string, public age: number) {}
}

//Getters and Setters
class handleName {
  constructor(public _name: string) {}
  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

let finalName = new handleName("hitesh");
//why use _? because if i dont put _ i cannot write get name() because it weill be the same as return this.name

//statis memebers
// Just as in JavaScript, we set class members on TypeScript classes with the static keyword. Let's introduce a static field userType to our User class:
class User {
  public static userType: string = "Guest";

  username = "randomString";
  protected age!: number;
}

console.log(User.userType); // "Guest"
// As it happens in JavaScript, static fields in TypeScript represent class properties. One thing to note is that while declaring static fields, we have to place privacy modifiers (public here, which we technically don't need, but just to make a point) before the static keyword. Otherwise, TypeScript feels uncomfortable:
'public' modifier must precede 'static' modifier.(1029)

//Abstract Classes & Methods

// Define an abstract class in Typescript using the abstract keyword. Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.

// An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods.

// The following abstract class declares one abstract method find and also includes a normal method display



class BankAccount {
  constructor(private _balance: number, public owner: string) {}

  deposit(amount: number) {
    if (amount > 0) {
      this._balance += amount; 
    }
  }

  getBalance() {
    return this._balance; 
  }
}

let myAccount = new BankAccount(1000, "Hitesh");


myAccount.deposit(500);
console.log(`${myAccount.owner}'s balance is ${myAccount.getBalance()}`); 


class Animal {
  constructor(protected species: string) {}

  getSpecies() {
    return `I am a ${this.species}.`;
  }
}

class Dog extends Animal {
  constructor(public name: string) {
    super("Canine"); 
  }

  introduce() {
    
    console.log(`Hello, my name is ${this.name} and I am a ${this.species}.`);
  }
}
 
let buddy = new Dog("Buddy");
buddy.introduce(); 
console.log(buddy.species); 


class UserProfile {
  constructor(public readonly userId: string, public username: string) {}

  changeUsername(newName: string) {
    this.username = newName; 
     this.userId = "new-id-123"; 
  }
}

let user1 = new UserProfile("123", "Hitesh");


class Product {
  constructor(private _price: number) {}

  get price(): string {
    return `$${this._price.toFixed(2)}`;
  }


  set price(newPrice: number) {
    if (newPrice >= 0) {
      
      this._price = newPrice;
    } else {
      console.error("Price cannot be negative!");
    }
  }
}

let coffee = new Product(5.0);

console.log(coffee.price); 

coffee.price = 7.5; 
console.log(coffee.price); 

coffee.price = -2;

class AppConfig {
  public static appName: string = "Super Editor";
  public static instanceCount: number = 0;

  constructor() {
    // Access the static property using the class name
    AppConfig.instanceCount++;
  }
}

console.log(`App Name: ${AppConfig.appName}`); // Access directly via the class

let config1 = new AppConfig();
let config2 = new AppConfig();

console.log(`Instances created: ${AppConfig.instanceCount}`); // Output: 2


abstract class Shape {
  constructor(public color: string) {}

  displayColor() {
    console.log(`This shape's color is ${this.color}.`);
  }

  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color); 
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number, color: string) {
    super(color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}


let myCircle = new Circle(10, "Red");
let myRectangle = new Rectangle(5, 10, "Blue");

myCircle.displayColor(); 
console.log(`Circle Area: ${myCircle.calculateArea()}`); 

myRectangle.displayColor(); 
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`); 
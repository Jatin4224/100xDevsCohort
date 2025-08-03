interface UserInterface {
  name: string;
  age: number;
}

class Person implements UserInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Not possible with types
type UserType = {
  name: string;
  age: number;
};

// This will throw an error

type UserOrAdmin = User | Admin; // Union: Either User or Admin

type ExtendedUser = User & {
  isAdmin: boolean;
}; // Intersection: Combines User and additional properties

type BookInfo = {
  title: string;
  author: string;
};

const completeBook: BookInfo = {
  title: "A Wizard of Earthsea",
  author: "Ursula K. Le Guin",
};

const incompleteBook: BookInfo = {
  title: "The Left Hand of Darkness",
};

type BookWithDate = {
  publicationDate: Date;
};

const bookWithBadDate: BookWithDate = {
  publicationDate: "2025-06-20",
};

type Book = {
  title: string;
  author: {
    firstName: string;
    lastName: string;
  };
  pages: number;
};

const bookMatch: Book = {
  title: "The Fellowship of the Ring",
  author: {
    firstName: "J.R.R.",
    lastName: "Tolkien",
  },
  pages: 423,
};

const bookMismatch: Book = {
  title: "The Hobbit",
  author: {
    name: "J.R.R. Tolkien",
  },
  pages: 310,
};

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  title: string;
  author: Author;
  pages: number;
};

const bookMismatch: Book = {
  title: "The Hobbit",
  author: {
    name: "J.R.R. Tolkien",
  },
  pages: 310,
};

// // Type:
// // {
// //   title: string;
// //   pages: number;
// //   issueDate?: undefined;
// // } | {
// //   title: string;
// //   pages?: undefined;
// //   issueDate: string;
// // }

const media =
  Math.random() > 0.5
    ? { title: "Dune", pages: 412 }
    : { title: "National Geographic", issueDate: "October 2023" };

type BookWithPages = {
  title: string;
  pages: number;
};

type MagazineWithDate = {
  title: string;
  issueDate: string;
};

type Publication = BookWithPages | MagazineWithDate;

const publication: Publication =
  Math.random() > 0.5
    ? { title: "The Lord of the Rings", pages: 1178 }
    : { title: "Time Magazine", issueDate: "January 1, 2024" };

if ("pages" in publication) {
  console.log(`It has pages: ${publication.pages}`);
} else {
  console.log(`It was published on: ${publication.issueDate}`);
}

type Book = {
  title: string;
  pages: number;
  type: "book";
};

type Magazine = {
  title: string;
  issueDate: string;
  type: "magazine";
};

type Publication = Book | Magazine;

const publication: Publication =
  Math.random() > 0.5
    ? { title: "Dune", pages: 412, type: "book" }
    : { title: "Vogue", issueDate: "September 2024", type: "magazine" };

if (publication.type === "book") {
  console.log(`It's a book with ${publication.pages} pages.`);
} else {
  console.log(`It's a magazine from the issue date: ${publication.issueDate}.`);
}

// let getUserNames: () => string[];

// getUserNames = () => {
//   return ["Hitesh", "ELon", "Zuck"];
// };

// let greetingGenerators: (() => string)[];

// greetingGenerators = [() => "Hello!", () => "Hi there!", () => "Greetings!"];

let stringOrArrayOfNumbers: string | number[];

stringOrArrayOfNumbers = "Hello";
stringOrArrayOfNumbers = [1, 2, 3];

let arrayOfStringOrNumbers: (string | number)[];

arrayOfStringOrNumbers = [1, "two", 3, "four"];

const namesMaybe = ["Hitesh", "Elon", undefined];
let name2: string | undefined = namesMaybe[0];

const fruits = ["apple", "banana"];
const numbers = [1, 2, 3];

const mixedArray = [...fruits, ...numbers];

function greet(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}

const userNames = ["Hitesh", "Elon"];
greet("Hello", ...userNames);

const ages = [25, 30];
greet("Age:", ...ages);

// // const movieInfo = ["welcome", "three idiots"];

// // const movieTuple: [string, string] = movieInfo;

function getMovieInfo(title: string): [string, number] {
  return [title, title.length];
}

const [movieTitle, titleLength] = getMovieInfo("Inception");

//
const movieTuple = ["Forrest Gump", 1994] as const;

movieTuple[0] = "Singham";

function greet(person: string): string {
  return `Hello, ${person}! Welcome to Chai aur Code.`;
}

const username: string = "TypeScript Learner";
console.log(greet(username));

type Book = {
  title: string;
  author: string;
  pages: number;
};

let bookLater: Book;

bookLater = {
  title: "The Hobbit",
  author: "J.R.R Tolkien",
  pages: 310,
};

bookLater = "A journey to the Lonely Mountain";

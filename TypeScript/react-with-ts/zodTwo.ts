// import { z } from "zod";

// type ChaiOrder = {
//   customerName: string;
//   sugarLevel: number;
//   orderTime: Date;
// };

// const chaiOrderSchema = z.object({
//   customerName: z.string(),
//   sugarLevel: z.number(),
//   orderTime: z.date(),
// });

// const chaiOrder: ChaiOrder = {
//   customerName: "Hitesh",
//   sugarLevel: 2,
//   orderTime: new Date(),
// };

// console.log(chaiOrderSchema.parse(chaiOrder));

import { z } from "zod";

// const userSchema = z.object({
//   name: z.string(),
//   email: z.email(),
// });

// const goodUser = { name: "Hitesh", email: "Hitesh@example.com" };
// const badUser = { name: "Elon", email: "note-Elon-gmail" };

// console.log(userSchema.safeParse(goodUser));
// console.log(userSchema.safeParse(badUser));

const userProfileSchema = z.object({
  username: z
    .string()
    .min(2, "Username too short! Needs at least 2 characters, like 'RK'")
    .max(
      10,
      "Username too long! Keep it under 10 characters, like 'ChaiLover'"
    ),
  age: z
    .number()
    .int()
    .positive("Age must be a whole, positive number!")
    .min(18, "You must be 18+ to sign up for this chai club."),
  email: z
    .string()
    .email("Hmm, that doesn't look like a real email. Check again!"),
  joinDate: z.date(),
  isChaiLover: z.boolean().optional(),
  favoriteMug: z.void(),
  secretSpice: z.never(),
  isProgrammer: z.boolean().nullable(),
});

const userAttempt1 = {
  username: "hitesh",
  age: 35,
  email: "hitesh@example.com",
  joinDate: new Date(),
};
console.log(userProfileSchema.parse(userAttempt1));

const orderSchema2 = z.object({
  teaType: z.string().default("Darjeeling"),
  sugarCubes: z.number().int().min(0).default(2),
});

console.log(orderSchema.parse({}));
console.log(orderSchema.parse({ teaType: "Assam" }));

const specialOrderSchema = z.object({
  customerName: z.string(),
  drink: z.literal("chai"),
});

console.log(specialOrderSchema.parse({ customerName: "Priya", drink: "chai" }));
specialOrderSchema.parse({ customerName: "Raj", drink: "coffee" });

const chaiFlavors = ["Masala", "Ginger", "Cardamom"] as const;

const orderSchema = z.object({
  customerName: z.string(),
  flavor: z.enum(chaiFlavors),
});

console.log(orderSchema.parse({ customerName: "Hitesh", flavor: "Masala" }));
orderSchema.parse({ customerName: "Arjun", flavor: "Mint" });

const userSchema = z.object({
  username: z.string(),
  age: z.number(),
  birthday: z.date(),
  isOld: z.boolean().optional(),
  test: z.void(),
  key: z.never(),
});

const user = { username: "hitesh", age: 35, birthday: new Date() };

console.log(userSchema.shape.age);

const completeChaiRecipe = z.object({
  teaLeaves: z.string(),
  milk: z.string(),
  sugar: z.number(),
  ginger: z.boolean(),
});

const quickTasteTest = { teaLeaves: "Assam" };
console.log(completeChaiRecipe.partial().parse(quickTasteTest));

const userDetailsSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  passwordHash: z.string(),
});

const publicUserSchema = userDetailsSchema.pick({
  username: true,
  email: true,
});

console.log(
  publicUserSchema.parse({
    username: "Hitesh",
    email: "chai@example.com",
    passwordHash: "123",
  })
);
const safeUserSchema = userDetailsSchema.omit({ passwordHash: true });
console.log(
  safeUserSchema.parse({
    id: "abc",
    username: "Hitesh",
    email: "chai@example.com",
  })
);

const simpleSchema = z.object({
  name: z.string(),
});

const dataWithExtra = { name: "Hitesh", extraField: "hello" };
console.log(simpleSchema.parse(dataWithExtra));

console.log(simpleSchema.parse(dataWithExtra));

console.log(simpleSchema.strict().parse(dataWithExtra));

`// A list of strings (your favorite chai spices)
const spiceListSchema = z.array(z.string());

console.log(spiceListSchema.parse(["ginger", "cardamom", "cinnamon"]));
// spiceListSchema.parse(["ginger", 123]); // This would fail!`;

const spiceListSchema = z.array(z.string());
console.log(spiceListSchema.parse(["ginger", "cardamom", "cinnamon"]));
spiceListSchema.parse(["ginger", 123]); // This would fail!

const coordinatesSchema = z.tuple([z.number(), z.number(), z.number()]);

console.log(coordinatesSchema.parse([77.2, 28.6, 200]));
coordinatesSchema.parse([1, "two", 3]); // This would fail!

const contactSchema = z.union([z.string().email(), z.string().min(10).max(15)]);

console.log(contactSchema.parse("user@example.com"));
console.log(contactSchema.parse("9876543210"));

const spiceInventorySchema = z.map(z.string(), z.number());

console.log(
  spiceInventorySchema.parse(
    new Map([
      ["ginger", 50],
      ["cardamom", 10],
    ])
  )
);

spiceInventorySchema.parse(new Map([["cumin", "twenty"]])); // Fails because value is not a number!

const userIdPromiseSchema = z.promise(z.string().uuid());

async function fetchUserId() {
  return "a1b2c3d4f";
}

const userIdPromise = fetchUserId();
console.log(userIdPromiseSchema.parse(userIdPromise));

const PositiveNumber = z.number().refine((num) => num > 0, {
  message: "Number must be positive.",
});

console.log(PositiveNumber.parse(5));

const EmailSchema = z
  .string()
  .email()
  .refine(
    async (email) => {
      const takenEmails = await Promise.resolve([
        "test@example.com",
        "admin@example.com",
      ]);
      return !takenEmails.includes(email);
    },
    {
      message: "Email already taken.",
    }
  );

async function validateEmail() {
  console.log(await EmailSchema.safeParseAsync("new@example.com"));
  console.log(await EmailSchema.safeParseAsync("test@example.com"));
}

validateEmail();

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  zipCode: z.string().length(6),
});

type DeliveryAddress = z.infer<typeof AddressSchema>;

const validateDeliveryAddress = (address: DeliveryAddress) => {
  const isValidAddress = AddressSchema.parse(address);
  console.log("Delivery address looks good!", isValidAddress);
  return isValidAddress;
};

const myDelivery = {
  street: "Raja Park",
  city: "Jaipur",
  zipCode: "323001",
};
validateDeliveryAddress(myDelivery);

const UserAddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  pincode: z.string().length(6),
});
const UserContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
});

const UserProfileSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  contact: UserContactSchema,
  address: UserAddressSchema,
  age: z.number().int().positive().min(18),
});

const myProfile = {
  id: "a1b2c3d",
  name: "Hitesh",
  contact: { email: "Hitesh@example.com", phone: "3211433" },
  address: {
    street: "Lane 5, Gandhi Nagar",
    city: "Jaipur",
    pincode: "302001",
  },
  age: 35,
};

console.log(UserProfileSchema.parse(myProfile));

const BasicChaiSchema = z.object({
  teaLeaves: z.string(),
  milkType: z.enum(["cow", "oat", "almond"]),
  sugarAmount: z.number().int().min(0),
});

const CustomerChaiSchema = BasicChaiSchema.extend({
  loyaltyPoints: z.number().int().nonnegative(),
});

const customerOrder = {
  teaLeaves: "Assam",
  milkType: "cow",
  sugarAmount: 2,
  loyaltyPoints: 150,
};

console.log(CustomerChaiSchema.parse(customerOrder));

import * as ts from "typescript";

const program = ts.createProgram(files, opts);
const checker = program.getTypeChecker();
program.emit();

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Hitesh"));

/**
 * Performs a painter painting a particular painting.
 *
 * @param {Painting} painter
 * @param {string} painting
 * @returns {boolean} Whether the painter painted the painting.
 */
function paintPainting(painter, painting) {
  /* ... */
}

paintPainting();

import { initialValue } from "../value";
export const doubledValue = initialValue * 2;

import { z } from "zod";

const userSchema = z.object({
  usernmae: z.string(),
});

const user = { username: "hitesh" };

console.log(userSchema.parse(user));

//other great thing is zod is the way it integrates with ts noramally u write this is

type User = {
  username: string;
};

const userSchema = z.object({
  username: z.string(),
  age:z.number(),
  birthday:z.date(),
  isOld:z.boolean().optional(),
  test:z.void(),
  key:z.never(),
});

const user: User = { username: "hitesh" };

console.log(userSchema.parse(user));

ur defining the exact same dat twice on type nnd schema 
when in zod we dont have to to that 


//using safeParse case

//in zod everyfiled u defined is requred if ur not sure u ahve to make them option by adding .optional() in the end
//few other tupes are undefined null

//basic validation
zod has many differnet validations like min max EventCounts
import { z } from "zod";
import { is } from "zod/locales";
import { omit } from "zod/mini";

const userSchema = z.object({
  username: z.string().min(2).max(10),
    age:z.number(),
    email:z.email(),
  birthday:z.date(),
  isOld:z.boolean().optional(),
  test:z.void(),
  key:z.never(),
  isProgrammer:z.boolean().nullable(),
});

const user = { username: "hitesh" };

console.log(userSchema.parse(user));

another really cool thing we can do with ts is we can define default values 

isProgrammer:z.boolean().nullable().default(true);

//we can also define somethign called literal
 isProgrammer:z.literal(true);


 //u want to make sure that u have a list of values
//  like hobbies list of values int hat case using an enum is very important
 hobby:z.enum(["code","weight","Guitar"])


 const user = { hobby:"Programming" };

now i can also do this 

 const hoobies = ["code","weight","Guitar"]

  hobby:z.enum(hoobies)


 const user = { hobby:"Programming" };
  but now typescript will complain becasue the array cna change and i dont know what types it containt so 
  we have to do
   const hoobies = ["code","weight","Guitar"] as const;
   that its values cant change 


//object type



const userSchema = z.object({
  username: z.string(),
  age:z.number(),
  birthday:z.date(),
  isOld:z.boolean().optional(),
  test:z.void(),
  key:z.never(),
});

const user: User = { username: "hitesh" };

//instead of parsing individual we can use shape shape
console.log(userSchema.shape.age);

another thing we can do is - partial it makes eveything optional
console.log(userSchema.partial().parse(user));



we can also use pick  or omit


//the default behvaior of zod is it gets rid of the undefined keys in shcema 
u can use strict() so if the key is not there it gives error



//another types array

z.array(z.string())


//tuple very similar to array 
cordinates:z.tuple([z.number,z.number(),z.number()])

cordinates:[1,2,"aj"]



//union with zod

//map type


//promise
u can actually define promise and it return in zod
z.promise(z.string())



//Advanced valdiation
custom validation using refine method
Custom validations in Zod
You might need to create your own custom validations in scenarios where you need to combine and compare different data together to create custom validations.

Zod’s refinement API allows you to pass a custom validator within the schema using the refine method, which takes in two arguments, the first being a function and the second one accepting different configuration options.

In the example below, we are using refine to define a schema for positive numbers by checking if the number in question is greater than zero:

const PositiveNumberSchema = z.number().refine(n => n > 0, {
  // Return the error message here
  message: "Number must be positive"
});
Note that with the refine method, the validation message will only be thrown when the function in the first argument returns false.

In cases where the function returns a promise, refine can be asynchronous too. Here’s an example showing dummy-loading an array of existing user emails from a database, and then returning whether or not the email in question is present in that array, indicating its uniqueness:

const UniqueEmailSchema = z.string().email().refine(
  async (email) => {
    /*
     * Replace this simulation with a real 
     * async operation (e.g., database check)
     */
    const existingUserEmails = await getExistingUserEmails();
    return !existingUserEmails.includes(email);
  },
  {
    message: "Email already in use!",
  }
);

//error handling

ype inference in Zod
In the last section, it wasn’t possible to enforce schema validation at runtime using only TypeScript, so we had to provide unknown type to address in the validateAddress function.

In such cases, we can extract types from data schemas using Zod’s infer method, and then use those types instead of the unknown type:

// Previous code...

type Address = z.infer<typeof AddressSchema>;

const validateAddress= (address: Address) => {
  const isValidAddress = AddressSchema.parse(address);
  return isValidAddress;
};

//
Handling complex schema objects
Certain Zod methods can help you compose and manage complex scheme objects effectively. We’ll cover this in three phases: nesting small schemas to form a big yet manageable schema object, deriving a new schema from an existing one, and then merging different schemas to create a new one.

Nesting schemas
Let’s say you have a Zod object that dictates the schema for a complex form containing multiple fields inside it. Each of the properties of this object is another Zod object in itself. In such cases, we should define all these properties as separate schemas and then later we can assign these as properties to the parent Zod object.

Consider an example of a user’s details, where we collect name, email, address, and age. Here’s how we will structure the Zod object for this:

const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: UserEmailSchema,
  address: AddressSchema,
  age: PositiveNumberSchema,
});
As you may have noticed, we skipped defining the schema structure for the email, address, and age. This is because we defined them separately in the earlier examples, and we can use those schemas directly here without redefining things.

Extending schemas
There can be cases where the schema object design is nearly the same for a couple of forms/fields, apart from a few extra or missing types. In those situations, you don’t need to keep duplicating the same object schema over and over again. Instead, you can prevent duplication by using the extend() method.

The UserSchema we defined in the last segment can be further extended without declaring its existing types, we only have to declare the new properties as shown below:

const CustomerSchema = UserSchema.extend({
  loyaltyPoints: z.number().int().nonnegative(),
});
The above approach can be a better way to have maintainable code and avoid data duplication. One thing to be mindful of while using extend() is that it mutates the schema objects, i.e., overwrites them.

Merging schemas
Zod also provides a method to merge schemas, which should not be confused with extending schemas. The merge() method is quite useful for combining two schema objects, which defines the union of two different schemas rather than an extension of any of them:

const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: PositiveNumberSchema,
});

const InventoryItemSchema = z.object({
  quantity: z.number().int().nonnegative(),
  location: z.string(),
});

const StockItemSchema = ProductSchema.merge(InventoryItemSchema);
Now, if we validate the newly formed StockItemSchema using the appropriate data, it should follow the validation rules defined for each property of ProductSchema and InventoryItemSchema. Otherwise, it should throw an error mentioning the data that failed the validation test.

Unlike extend(), Zod’s merge() property doesn’t mutate the field


Dynamic form validation with Zod
With all the knowledge we’ve gathered about Zod, let’s mimic a login form functionality that reflects the validation provided by Zod on the frontend. I’m using React to demonstrate this, as it’s a widely used framework.

Setting up Zod schema
After setting up a React app, install Zod as we discussed at the start. Our login form is supposed to carry mainly three inputs: username, password, and a gender select box. It should also have a submit button by the end.

Keeping that in mind, let’s create a LoginForm component. We will define user schema using Zod objects and primitives, and use the refinement API to manage a custom validation for password confirmation:

import { z } from "zod";

const genderOptions = ["male", "female", "other"]; 
type Gender = typeof genderOptions[number];

const userFormSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    gender: z.enum(genderOptions, {
      errorMap: () => ({ message: "Please select a gender" })
    })
  });
Parsing the data using Zod schema
After declaring some state variables to manage form data and errors, let’s define a function to parse and validate the form data with the help of Zod’s parse method:

import { useState } from "react";
import { z } from "zod";

// Previous code ...

type FormData = z.infer<typeof userFormSchema>;
type FormErrors = Partial<Record<keyof FormData, string[]>>;

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    gender: "" as Gender
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: FormData): FormErrors => {
    try {
      userFormSchema.parse(data);
      return {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.flatten().fieldErrors;
      }
      return {};
    }
  };

  // TODO: Submission and Input change handlers
}
Defining event handlers
Next, let’s define event handlers for form submission and field changes. These handlers will use the validation function we defined in the last step, update the state variables accordingly, and log the data in the console if no errors are observed:

import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

// Previous code ...

function LoginForm() {
  // Previous data ...

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    // Validate form on each change
    const newErrors = validateForm(updatedFormData);
    setErrors(newErrors);
  };

  // TODO: Construct a form
}
Returning the form JSX
Finally, let’s write some JSX to construct our form and provide its input elements with appropriate handlers and values. We can easily add an input and password field and provide them with the change handler and appropriate values. To populate the select box, we can loop through the genderOptions variable and create options:

import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

// Previous code ...

function LoginForm() {
  // Previous code ...

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <span>{errors.username[0]}</span>}
      </div>
      <div className="form-row">
        <select
          name="gender"
          className="form-field"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          {genderOptions.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        {errors.gender && errors.gender.length > 0 && (
          <div className="form-msg">{errors.gender[0]}</div>
        )}
      </div>
      <!-- Other fields -->
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default LoginForm;



import { z } from "zod";

const userSchema = z.object({
  usernmae: z.string(),
});

const user = { username: "hitesh" };

console.log(userSchema.parse(user));

//other great thing is zod is the way it integrates with ts noramally u write this is

type User = {
  username: string;
};

const userSchema = z.object({
  username: z.string(),
  age:z.number(),
  birthday:z.date(),
  isOld:z.boolean().optional(),
  test:z.void(),
  key:z.never(),
});

const user: User = { username: "hitesh" };

console.log(userSchema.parse(user));

ur defining the exact same dat twice on type nnd schema 
when in zod we dont have to to that 


//using safeParse case

//in zod everyfiled u defined is requred if ur not sure u ahve to make them option by adding .optional() in the end
//few other tupes are undefined null

//basic validation
zod has many differnet validations like min max EventCounts
import { z } from "zod";
import { is } from "zod/locales";
import { omit } from "zod/mini";

const userSchema = z.object({
  username: z.string().min(2).max(10),
    age:z.number(),
    email:z.email(),
  birthday:z.date(),
  isOld:z.boolean().optional(),
  test:z.void(),
  key:z.never(),
  isProgrammer:z.boolean().nullable(),
});

const user = { username: "hitesh" };

console.log(userSchema.parse(user));

another really cool thing we can do with ts is we can define default values 

isProgrammer:z.boolean().nullable().default(true);

//we can also define somethign called literal
 isProgrammer:z.literal(true);


 //u want to make sure that u have a list of values
//  like hobbies list of values int hat case using an enum is very important
 hobby:z.enum(["code","weight","Guitar"])


 const user = { hobby:"Programming" };

now i can also do this 

 const hoobies = ["code","weight","Guitar"]

  hobby:z.enum(hoobies)


 const user = { hobby:"Programming" };
  but now typescript will complain becasue the array cna change and i dont know what types it containt so 
  we have to do
   const hoobies = ["code","weight","Guitar"] as const;
   that its values cant change 


//object type



const userSchema = z.object({
  username: z.string(),
  age:z.number(),
  birthday:z.date(),
  isOld:z.boolean().optional(),
  test:z.void(),
  key:z.never(),
});

const user: User = { username: "hitesh" };

//instead of parsing individual we can use shape shape
console.log(userSchema.shape.age);

another thing we can do is - partial it makes eveything optional
console.log(userSchema.partial().parse(user));



we can also use pick  or omit


//the default behvaior of zod is it gets rid of the undefined keys in shcema 
u can use strict() so if the key is not there it gives error



//another types array

z.array(z.string())


//tuple very similar to array 
cordinates:z.tuple([z.number,z.number(),z.number()])

cordinates:[1,2,"aj"]



//union with zod

//map type


//promise
u can actually define promise and it return in zod
z.promise(z.string())



//Advanced valdiation
custom validation using refine method
Custom validations in Zod
You might need to create your own custom validations in scenarios where you need to combine and compare different data together to create custom validations.

Zod’s refinement API allows you to pass a custom validator within the schema using the refine method, which takes in two arguments, the first being a function and the second one accepting different configuration options.

In the example below, we are using refine to define a schema for positive numbers by checking if the number in question is greater than zero:

const PositiveNumberSchema = z.number().refine(n => n > 0, {
  // Return the error message here
  message: "Number must be positive"
});
Note that with the refine method, the validation message will only be thrown when the function in the first argument returns false.

In cases where the function returns a promise, refine can be asynchronous too. Here’s an example showing dummy-loading an array of existing user emails from a database, and then returning whether or not the email in question is present in that array, indicating its uniqueness:

const UniqueEmailSchema = z.string().email().refine(
  async (email) => {
    /*
     * Replace this simulation with a real 
     * async operation (e.g., database check)
     */
    const existingUserEmails = await getExistingUserEmails();
    return !existingUserEmails.includes(email);
  },
  {
    message: "Email already in use!",
  }
);

//error handling

ype inference in Zod
In the last section, it wasn’t possible to enforce schema validation at runtime using only TypeScript, so we had to provide unknown type to address in the validateAddress function.

In such cases, we can extract types from data schemas using Zod’s infer method, and then use those types instead of the unknown type:

// Previous code...

type Address = z.infer<typeof AddressSchema>;

const validateAddress= (address: Address) => {
  const isValidAddress = AddressSchema.parse(address);
  return isValidAddress;
};

//
Handling complex schema objects
Certain Zod methods can help you compose and manage complex scheme objects effectively. We’ll cover this in three phases: nesting small schemas to form a big yet manageable schema object, deriving a new schema from an existing one, and then merging different schemas to create a new one.

Nesting schemas
Let’s say you have a Zod object that dictates the schema for a complex form containing multiple fields inside it. Each of the properties of this object is another Zod object in itself. In such cases, we should define all these properties as separate schemas and then later we can assign these as properties to the parent Zod object.

Consider an example of a user’s details, where we collect name, email, address, and age. Here’s how we will structure the Zod object for this:

const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: UserEmailSchema,
  address: AddressSchema,
  age: PositiveNumberSchema,
});
As you may have noticed, we skipped defining the schema structure for the email, address, and age. This is because we defined them separately in the earlier examples, and we can use those schemas directly here without redefining things.

Extending schemas
There can be cases where the schema object design is nearly the same for a couple of forms/fields, apart from a few extra or missing types. In those situations, you don’t need to keep duplicating the same object schema over and over again. Instead, you can prevent duplication by using the extend() method.

The UserSchema we defined in the last segment can be further extended without declaring its existing types, we only have to declare the new properties as shown below:

const CustomerSchema = UserSchema.extend({
  loyaltyPoints: z.number().int().nonnegative(),
});
The above approach can be a better way to have maintainable code and avoid data duplication. One thing to be mindful of while using extend() is that it mutates the schema objects, i.e., overwrites them.

Merging schemas
Zod also provides a method to merge schemas, which should not be confused with extending schemas. The merge() method is quite useful for combining two schema objects, which defines the union of two different schemas rather than an extension of any of them:

const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: PositiveNumberSchema,
});

const InventoryItemSchema = z.object({
  quantity: z.number().int().nonnegative(),
  location: z.string(),
});

const StockItemSchema = ProductSchema.merge(InventoryItemSchema);
Now, if we validate the newly formed StockItemSchema using the appropriate data, it should follow the validation rules defined for each property of ProductSchema and InventoryItemSchema. Otherwise, it should throw an error mentioning the data that failed the validation test.

Unlike extend(), Zod’s merge() property doesn’t mutate the field


Dynamic form validation with Zod
With all the knowledge we’ve gathered about Zod, let’s mimic a login form functionality that reflects the validation provided by Zod on the frontend. I’m using React to demonstrate this, as it’s a widely used framework.

Setting up Zod schema
After setting up a React app, install Zod as we discussed at the start. Our login form is supposed to carry mainly three inputs: username, password, and a gender select box. It should also have a submit button by the end.

Keeping that in mind, let’s create a LoginForm component. We will define user schema using Zod objects and primitives, and use the refinement API to manage a custom validation for password confirmation:

import { z } from "zod";

const genderOptions = ["male", "female", "other"]; 
type Gender = typeof genderOptions[number];

const userFormSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    gender: z.enum(genderOptions, {
      errorMap: () => ({ message: "Please select a gender" })
    })
  });
Parsing the data using Zod schema
After declaring some state variables to manage form data and errors, let’s define a function to parse and validate the form data with the help of Zod’s parse method:

import { useState } from "react";
import { z } from "zod";

// Previous code ...

type FormData = z.infer<typeof userFormSchema>;
type FormErrors = Partial<Record<keyof FormData, string[]>>;

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    gender: "" as Gender
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: FormData): FormErrors => {
    try {
      userFormSchema.parse(data);
      return {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.flatten().fieldErrors;
      }
      return {};
    }
  };

  // TODO: Submission and Input change handlers
}
Defining event handlers
Next, let’s define event handlers for form submission and field changes. These handlers will use the validation function we defined in the last step, update the state variables accordingly, and log the data in the console if no errors are observed:

import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

// Previous code ...

function LoginForm() {
  // Previous data ...

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    // Validate form on each change
    const newErrors = validateForm(updatedFormData);
    setErrors(newErrors);
  };

  // TODO: Construct a form
}
Returning the form JSX
Finally, let’s write some JSX to construct our form and provide its input elements with appropriate handlers and values. We can easily add an input and password field and provide them with the change handler and appropriate values. To populate the select box, we can loop through the genderOptions variable and create options:

import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

// Previous code ...

function LoginForm() {
  // Previous code ...

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <span>{errors.username[0]}</span>}
      </div>
      <div className="form-row">
        <select
          name="gender"
          className="form-field"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          {genderOptions.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        {errors.gender && errors.gender.length > 0 && (
          <div className="form-msg">{errors.gender[0]}</div>
        )}
      </div>
      <!-- Other fields -->
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default LoginForm;



import { z } from "zod";


const userSchema = z.object({
  username: z.string(), 
});

// Let's try it with some data!
const user = { username: "chaiLover7" };

console.log(userSchema.parse(user)); 
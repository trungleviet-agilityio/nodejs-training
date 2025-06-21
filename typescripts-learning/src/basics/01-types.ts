// Basic TypeScript Types Example
// This file demonstrates fundamental TypeScript concepts

// 1. Basic Type Annotations
let name: string = "TypeScript";
let age: number = 25;
let isStudent: boolean = true;
let hobbies: string[] = ["coding", "reading", "gaming"];

// 2. Type Inference (TypeScript can infer types)
let inferredString = "Hello World"; // TypeScript infers this as string
let inferredNumber = 42; // TypeScript infers this as number
let inferredArray = [1, 2, 3, 4, 5]; // TypeScript infers this as number[]

// 3. Union Types
let id: string | number = "ABC123";
id = 12345; // This is also valid

// 4. Object Types
let person: {
  name: string;
  age: number;
  email?: string; // Optional property
} = {
  name: "John Doe",
  age: 30,
  // email is optional, so we can omit it
};

// 5. Function Types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with optional parameters
function createUser(name: string, age?: number): { name: string; age?: number } {
  const user: { name: string; age?: number } = { name };
  if (age !== undefined) {
    user.age = age;
  }
  return user;
}

// 6. Type Aliases
type Point = {
  x: number;
  y: number;
};

let coordinates: Point = { x: 10, y: 20 };

// 7. Enums
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

let favoriteColor: Color = Color.Blue;

// 8. Tuples
let rgb: [number, number, number] = [255, 0, 128];

// 9. Any and Unknown
let anyValue: any = "This can be anything";
let unknownValue: unknown = "This is safer than any";

// 10. Void and Never
function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

// Example usage
console.log("=== TypeScript Basics Examples ===");
console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Greeting: ${greet("TypeScript")}`);
console.log(`Person: ${JSON.stringify(person)}`);
console.log(`Coordinates: (${coordinates.x}, ${coordinates.y})`);
console.log(`Favorite Color: ${favoriteColor}`);
console.log(`RGB: [${rgb.join(", ")}]`);

// Type checking examples
function demonstrateTypeChecking() {
  // TypeScript will catch these errors at compile time
  // Uncomment the lines below to see TypeScript errors
  
  // name = 123; // Error: Type 'number' is not assignable to type 'string'
  // age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'
  // hobbies.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
  
  console.log("Type checking prevents runtime errors!");
}

demonstrateTypeChecking();

export {
  name,
  age,
  isStudent,
  hobbies,
  person,
  greet,
  createUser,
  coordinates,
  favoriteColor,
  rgb,
  inferredString,
  inferredNumber,
  inferredArray,
  id,
  anyValue,
  unknownValue,
  logMessage,
  throwError,
}; 
//The call method in JavaScript is used to invoke a function with a specific this value and arguments passed individually.
/*Method borrowing: Using methods from one object on another.
Setting the context: Ensuring functions operate within a specific object context.
Using constructor functions: Creating new instances with specified properties.
Passing arguments: Invoking functions with specific arguments directly.*/
/* let name1 = {
  firstname: "sabir",
  lastname: "ali",
};

let fullname = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + "," + state
  );
};
//name1.fullname();

let name2 = {
  firstname: "Yusha",
  lastname: "ali",
};
fullname.call(name1, "Muzaffarnagar", "Uttar Pradesh");
fullname.call(name2, "Laxminagar", "Delhi"); */
//1.Method Borrowing
/* const person1 = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const person2 = {
  name: "Bob",
};
 */
// Borrowing the greet method
//person1.greet.call(person2); // Output: Hello, Bob

//2. Invoking function with specific context
/* function introduce(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

const user = {
  name: "Charlie",
}; */

//introduce.call(user, "Hi"); // Output: Hi, I'm Charlie

//handling contructor function
/* function Person(name) {
  this.name = name;
}

const user1 = new Person("Dave");
const user2 = new Person.call(null, "Eva");

console.log(user1.name); // Output: Dave
console.log(user2.name); // Output: Eva
 */
//function arguments
/* function add(a, b) {
  return a + b;
}

const result = add.call(null, 5, 3); // Output: 8
console.log(result); */
let name1 = {
  firstname: "sabir",
  lastname: "ali",
};

let fullname = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + "," + state
  );
};
//name1.fullname();

let name2 = {
  firstname: "Yusha",
  lastname: "ali",
};
fullname.apply(name1, ["Muzaffarnagar", "Uttar Pradesh"]);
fullname.apply(name2, ["Laxminagar", "Delhi"]);

//call()
/* const person = {
  fullName: function (greet, ex) {
    return greet + " " + this.firstName + " " + this.lastName + ex;
  },
};

const person1 = {
  firstName: "Sabir",
  lastName: "Ali",
};
console.log(person.fullName.call(person1, "Hi", "!"));
 */

//apply()
/* function fullName(greet, fullStop) {
  return greet + " " + this.firstname + " " + this.lastname + fullStop;
}
const person = {
  firstname: "sabir",
  lastname: "ali",
};
console.log(fullName.apply(person, ["Hello", "."])); */

//bind()
function fullName(invite, relation) {
  return invite + " " + this.firstName + " " + this.lastName + " " + relation;
}
const person = {
  firstName: "Sabir",
  lastName: "Ali",
};
const getFullName = fullName.bind(person, "Welcome");
console.log(getFullName("brother"));

//ARC
/* class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("Walk");
  }
} */
//Flatten object
/* const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let flatenedArr = arr.reduce((prev, curr) => prev.concat(curr), []);
console.log(result); */
/* var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);//1undefined */
/* function foo1() {
  return {
    bar: "hello",
  };
}
function foo2() {
  return
  {
    bar: "hello",
  };
}
console.log(foo1());
console.log(foo2()); */
//console.log(typeof NaN === NaN); //false
//console.log(typeof NaN === "number"); //true
//console.log(false == "0");//true
//console.log(false === "0");//false
//console.log(1 < 2 < 3); //true
//console.log(3 > 2 > 1); //false
//clone obj
/* var obj = { a: 1, b: 2 };
var objClone = { ...obj }; //Object.assign({}, obj);
console.log(objClone);
 */

//length of an array
/* const arr = ["a", "b", "c", "d", "e"];
delete arr[2];
console.log(arr.length); */

//How to find duplicate elements in a given array?
/* const dupArray = [5, 7, 9, 12, 6, 6, 7, 8, 12, 14, 14];
const result = dupArray.filter((ele, index, arr) => {
  console.log(arr.indexOf(ele));
  console.log("inx", index);
  return arr.indexOf(ele) !== index;
});
console.log(result); */

//How to find the count of duplicates in an array?
/* const dupArray = [5, 7, 9, 12, 6, 6, 7, 8, 12, 14, 14, 14, 6];
const result = dupArray.reduce((obj, val) => {
  //console.log(obj[val]);
  //console.log(obj);
  if (obj[val] == undefined) {
    obj[val] = 1;
    return obj;
  } else {
    obj[val]++;
    return obj;
  }
}, {});
console.log(result); */

//how to check if a given number is an integer?
/* const validNum = "number"; //10.5;
console.log(!isNaN(validNum)); */

//diff between Object.freeze() vs const
/* const val = 10;
val = 15;
console.log(val); */ //TypeError: Assignment to constant variable.
/* "use strict";
const obj = {
  name: "sabir",
  email: "sabir@gmail.com",
  age: 28,
};
Object.freeze(obj);
obj["name"] = "ali";
console.log(obj); */ //TypeError: Cannot assign to read only property 'name' of object

//remove all duplicate element
//how to find unique values in an array
/* const dupArray = [5, 7, 9, 12, 6, 6, 7, 8, 12, 14, 14, 13];
const result = dupArray.filter((ele, index, arr) => {
  return arr.indexOf(ele) === index;
});
console.log(result); */

//sort an array
/* const dupArray = [5, 7, 9, 12, 6, 6, 7, 8, 12, 14, 14, 13];
const sortedArr = dupArray.sort((a, b) => a - b);
console.log(sortedArr); */
/* const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const sortedMonths = months.sort();
console.log(sortedMonths);
 */
//find unique and sorted value

/* const uniqueSortedValue = dupArray
  .filter((ele, index, arr) => {
    return arr.indexOf(ele) === index;
  })
  .sort((a, b) => a - b);
console.log(uniqueSortedValue);
 */
//Find max value and min value
//const dupArray = [5, 7, 9, 12, 6, 6, 7, 8, 12, 14, 14, 13, 32, 12, 11];
/* const maxValue = dupArray.sort((a, b) => b - a)[0];
console.log(maxValue); */
/* function findMaxVal(arr) {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
}
console.log(findMaxVal(dupArray));
 */
/* function findMinVakue(arr) {
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
}
console.log(findMinVakue(dupArray));
 */
//How to find the average of the numbers in the numbered array?
/* function findAvarage(arr) {
  const total = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  const result = total / arr.length;
  return result;
}
console.log(findAvarage(dupArray)); */

//How can you uppercase the first character in string array?
/* const stringArr = ["javascript", "html", "reactjs", "nodejs", "java", "css"];
let result = stringArr.map(
  (ele) => ele.charAt(0).toUpperCase() + ele.substring(1)
);
console.log(result); */

//how to make sentence out of a given array?
/* const arr = ["welcome", "to", "india"];
console.log(arr.join(" "));
 */
//How to check if an array contains any element of another array?
/* const arrSId = [1, 3, 5, 17, 18, 93];
const arrPId = [2];

const result = arrSId.some((ele) => arrPId.includes(ele));
console.log(result); */

//Given two strings,how can you check if the strings are anagram for each other.

/* let string1 = "Mary";
//let string2 = "Armi";
let string2 = "Army";

function checkAnagram(string1, string2) {
  let a = string1.toLowerCase();
  let b = string2.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;
}
console.log(checkAnagram(string1, string2)); */
/* let arr = [1, 2, 35, 4, 8, 3];
let result = arr
  .sort((a, b) => {
    a - b;
  })
  .join("");
//how can you extract a few fields from the given JSON object and form a new array?


console.log(result); */

/* var inputObj = {
  students: [
    { name: "sabir", age: 28, email: "sabir@gmail.com" },
    { name: "ali", age: 24, email: "ali@gmail.com" },
    { name: "haider", age: 28, email: "haider@gmail.com" },
  ],
};
const result = inputObj.students.map((item) => {
  const obj = {
    name: item.name,
    email: item.email,
  };
  return obj;
}); */
//console.log(result);

//filter a given object based on certain conditions and return the corresponding object?
/* inputObj = {
  students: [
    { name: "sabir", age: 19, email: "sabir@gmail.com" },
    { name: "ali", age: 24, email: "ali@gmail.com" },
    { name: "haider", age: 20, email: "haider@gmail.com" },
  ],
};

const result = inputObj.students.filter((item) => {
  return item.age > 20;
});
console.log(result); */

//how to check if the variable passed is an array or not?
/* const arr = [5, 46, 7, 5, 9, 7, 45];
console.log(Array.isArray(arr)); */
//Given array of strings,reverse each word in the sentence?
/* const arr = ["welcome", "to", "Javascript", "programming"];
const newArr = arr.join(" ").split("").reverse().join("");

console.log(newArr); */

//IIFE(Immediately Invoked Function Expressions)
//console.log(((a, b) => a + b)(3, 2));
/* (function (a, b) {
  console.log(a + b);
})(5, 6); */
//let arr = [5, 46, 7, 5, 9, 7, 45];
//console.log(arr);
//arr = [];
//arr.length = 0;
//arr.splice(0, arr.length);
/* while (arr.length > 0) {
  //console.log(arr.pop());
}
console.log(arr);
 */

//write a function to check it a given string is Palindrome or not?

/* function checkPalindrome(str) {
  let reverseStr = str.toLowerCase();
  return str === reverseStr.split("").reverse().join("");
}
console.log(checkPalindrome("level")); //madam*/

//How can you combine two arrays into a third Array using spread operator?
/* const A1 = [1, 2, 3];
const A2 = [4, 5, 6];
const A3 = [...A1, ...A2];
console.log(A3);
 */
//How do you sort and reverse an array without changing the orignal array?
/* const Arr = [5, 7, 9, 12, 6, 6, 7, 8, 12, 14, 14, 13];
//[...Arr];
const newArr = Arr.slice()
  .sort((a, b) => a - b) //
  .reverse();
console.log(Arr);
console.log(newArr); */

//How can we replace an element at specific index in an Array?
/* const Arr = [2, 3, 5, 6, 7, 8, 9];
//const newArr = Arr.splice(1, 1, 15);
//console.log(newArr);
const replaceAt = 1;
const ele = 15;
const newArr = [...Arr.splice(0, replaceAt), ele, ...Arr.splice(replaceAt + 1)];
console.log(newArr);
 */
//How can we insert an element at specific index in an Array?
/* const Arr = [2, 3, 5, 6, 7, 8, 9];
const newArr = [...Arr];
newArr.splice(2, 0, 4);
console.log(Arr);
console.log(newArr); */
/* const Arr = [2, 3, 5, 6, 8, 9];
const insertedAt = 4;
const ele = 7;
const newArr = [...Arr.slice(0, insertedAt), ele, ...Arr.slice(insertedAt)];
console.log(newArr); */
//How can we delete an element at specific index in an Array?
/* const Arr = [2, 3, 4, 5, 5, 6, 8, 9];
const deletedAt = 4;
const newArr = [...Arr.slice(0, deletedAt), ...Arr.slice(deletedAt + 1)];
console.log(newArr); */
//How can we delete an specific element in an Array?

/* const Arr = [1, 2, 3, 4, 5];
const deletedItem = 3;
const newArr = Arr.filter((item) => item !== deletedItem);
console.log(newArr); */

//How can we clone an Object?
//2 ways to do - Object.assign , Spread Operator
/* const obj = {
  name: "sabir",
  age: 28,
  email: "sabir@gmail.com",
  address: {
    village: "Bilaspur",
    district: "Muzaffarnagar",
  },
};
//const newObj = Object.assign({}, obj);
const newObj = { ...obj };
//newObj.address.village = "Tissa";
console.log(newObj);
console.log(obj); */

//How to add an element at the beginning of Array?
//we can do using spread operator and unshift() method
/* const Arr = [2, 3, 4, 5];
//Arr.unshift(1, 2, 7, 9, 8);
newArr = [1, ...Arr];
console.log(newArr); */

//How to remove an element at the end of Array?

//const newArr = Arr.pop();
//const newArr = Arr.splice(-1);
/* const newArr = Arr.slice(0, -1); //recommend way
console.log(newArr);
console.log(Arr);
 */

//How to split a sentence into Array?
/* const str = "welcome to javascript tutorial";
const arr = str.split(" ").reverse();
console.log(arr); */

//How can you replace and add an existing element in an Object?
/* const Obj = {
  name: "sabir",
  age: 20,
  email: "sabir@gmail.com",
};
const newObj = {
  ...Obj,
  age: 28,
  address: "bilaspur",
};
console.log(Obj);
console.log(newObj); */

//How to remove an element at beginning of an array?
/* const Arr = [1, 2, 3, 4, 5];
//let newArr = Arr.shift();
let newArr = Arr.slice(1);
console.log(newArr); */
//console.log(Arr);

//How can you combine two objects?
/* const objA = {
  name: "sabir",
};
const objB = {
  age: 28,
};
const obj = { ...objA, ...objB };
console.log(obj);
 */

//Write a method which takes x number of parameters?
//...args - Rest operator
/* function getParams(...args) {
  console.log(...args);
}
getParams(1);
getParams(1, 2, 3);
getParams(1, 3, 4, 5, 6, 7);
getParams(1, 2); */

//Convert a given number into exact decimal points to right side?
/* const num = 563733.7383988943;
const number = num.toFixed(4);
console.log(number); */

//How can you return a character from a string at a specific index?
/* const char = "javascript";
const newChar = char.charAt(3);

console.log(newChar);
 */

//Explain WeakSet in js with ex?
/* const obj = {
  name: "sabir",
  age: 28,
}; */
//const obj = 10;//error with this value
/* const obj = "javascript";
const weakSetObj = new WeakSet([obj]);
console.log(weakSetObj); */

//write an add method using javasript currying concept?
/* function add(x) {
  let sum = x;
  function resultFn(y) {
    return (sum += y);
    //return sum;
  }
  /* resultFn.valueOf = function () {
    return sum;
  };
  return resultFn; */
//return resultFn;
//}
//console.log(add(2)(3).valueOf());
//console.log(add(2)(3)(9));
/* function add(x) {
  let sum = x;
  function resultFn(y) {
    sum += y;
    return resultFn;
  }
  resultFn.valueOf = function () {
    return sum;
  };
  return resultFn;
}
console.log(add(5)(7)(6).valueOf()); */

//How to replace string value inside the given array?
/* let arr = ["ban", "banana", "bangaluru"];
arr = arr.map((x) => x.replace(/ban/g, ""));

 console.log(arr);*/
//How to create an Array out of a sentence?
/* const str = "welcome to our home";
const newStr = str.split(" ");
console.log(newStr); */

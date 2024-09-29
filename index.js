//let arr = [3, 4, 1, 2, 5];
/* let newArr = arr.forEach((val) => {
  return val * val;
});
console.log(arr);
console.log(newArr) */ //original array does not change or modify and does not return an array

/* let newArr = arr.map((val) => {
  return val * val;
});
console.log(newArr);
console.log(arr); */ //original array does not change or modify

/* let filterArr = arr.filter((val) => {
  return val % 2 === 0;
}); */

//console.log(filterArr); //[2,4]
//console.log(arr); //original array does not change or modify

//const ARR = arr.sort().slice(0, 2);
//console.log([ARR[0], ARR[1]]);
//console.log(ARR);

/* var arr = [1, 1, 3, 3, 2, 3, 2];

function remDups(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i] != sortedArr[i - 1]) {
      newArr.push(sortedArr[i]);
    }
  }
  return newArr;
}
console.log(remDups(arr));
 */

/* function twoSum(nums, target) {
  // Create an empty object to store the number and its index
  const numToIndex = {};

  // Iterate through the list with index
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    // Calculate the difference needed to reach the target
    const difference = target - num;

    // Check if the difference is already in the object
    if (numToIndex.hasOwnProperty(difference)) {
      // If found, return the indices of the two numbers
      return [numToIndex[difference], index];
    }

    // Store the index of the current number
    numToIndex[num] = index;
  }

  // If no solution is found (though the problem guarantees a solution), return null
  return null;
}

// Example usage
const nums = [0, 2, 3, 4]; //[2, 7, 11, 15];
const target = 6;
console.log(twoSum(nums, target)); // Output: [0, 1] */

/* let arr = [0, 2, 3, 4];
let target = 6;

function twoSum(nums, target) {
  const result = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    //console.log(num);
    const diff = target - num;
    console.log(diff);
    if (result.hasOwnProperty(diff)) {
      return [result[diff], i];
    }
    return (result[num] = i);
  }
  return null;
};
console.log(twoSum(arr, target)); */

/* function twoSum(nums, target) {
  const numToIndex = {}; // Object to store the number and its index
  console.log(numToIndex);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log("Num", num);

    const complement = target - num;
    console.log("complement", complement);

    // Check if the complement exists in the object
    if (numToIndex[complement] !== undefined) {
      console.log(numToIndex[complement]);

      return [numToIndex[complement], i];
    }

    // Store the index of the current number
    numToIndex[num] = i;
    console.log(numToIndex[num]);
  }

  // Return null if no solution is found (though the problem guarantees a solution)
  return null;
}

// Example usage
const nums = [0, 2, 3, 4];
const target = 6;
console.log(twoSum(nums, target)); // Output: [0, 1]
 */
//1
/* const arrNumber = [1, 2, 8, 2, 9, 8, 4];
const duplicates = arrNumber.filter((ele, inx, arr) => {
  console.log(arr.indexOf(ele));
  console.log("Index", inx);
  return arr.indexOf(ele) !== inx;
});
console.log(duplicates); */

//2
//const arrNumber = [1, 9, 87, 65, 55];
/* const max = arrNumber.sort((a, b) => b - a)[0];
const min = arrNumber.sort((a, b) => a - b)[0];
console.log(min); */

/* function maxFun(arr) {
  return arr.reduce((pre, curr) => {
    return pre > curr ? pre : curr;
  });
}
console.log(maxFun(arrNumber)); */
/* function minFun(arr) {
  return arr.reduce((pre, cur) => {
    return pre < cur ? pre : cur;
  });
}
console.log(minFun(arrNumber)); */

//const arrNumber = [1, 9, 87, 65, 55];
/* const removeFirstValue = arrNumber.sort((a, b) => b - a).splice(1, 1);
console.log(removeFirstValue);
console.log(arrNumber);
 */
/* const removeFirstValue = arrNumber.sort((a, b) => b - a).splice(0, 1);
console.log(removeFirstValue); */

/* function largestValue(arr) {
  firstLargestValue = Math.max(...arr);
  const index = arr.indexOf(firstLargestValue);
  arr.splice(index, 1);
  console.log(arr);
  secondLargestValue = Math.max(...arr);
  return secondLargestValue;
}
console.log(largestValue(arrNumber)); */

const arr = [1, 2, 3, 4, 5, 6, 9, 10];

function misingValue(arr) {
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  let result = [];
  for (let i = minValue; i < maxValue; i++) {
    console.log(i);
    if (arr.indexOf(i) < 0) {
      console.log(arr.indexOf(i));
      result.push(i);
    }
  }
  return result;
}
console.log(misingValue(arr));

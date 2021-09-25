// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [3, 8, 9, 12];
const target = 15;

const sumTwo = function (array, target) {
  var map = {};

  for (let i = 0; i < array.length; i++) {
    map[array[i]] = i;

    const balance = target - array[i];

    if (balance in map) {
      //map index is always smaller than the actual index. 
      return [map[balance], i];
    }
  }
};

let result = sumTwo(nums, target);

// // console.log(nums);
// // console.log(target);

console.log(result);

// const sumTwo = function (array, target) {
//   for(let i = 0; i < array.length - 1; i++) {
//     for(let j = i + 1; j < array.length; j++ ) {
//       if(array[i] + array[j] === target) {
// 		  return [i, j];
//         // outcome.push[i];
//         // outcome.push[j];
//       }
//     }
//   }
// 	// return outcome;
// }

sumTwo(nums, target);
// console.log(outcome);
console.log(sumTwo(nums, target));

// const nums = [3,8,9,12];
// const target = 15;
// const outcome = [];

// const sumTwo = function (array, target) {
//   for(let i = 0; i < array.length - 1; i++) {
//     for(let j = i + 1; j < array.length; j++ ) {
//       if(array[i] + array[j] === target) {
//         outcome.push(i);
//         outcome.push(j);
//       }
//     }
//   }

// }

// sumTwo(nums, target);
// console.log(outcome);

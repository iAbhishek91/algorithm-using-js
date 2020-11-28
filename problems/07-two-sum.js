/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(arr, target) {

  const result = [];

  for(let i = 0; i < arr.length ; i += 1) {

    let diff = Math.abs(arr[i] - target);
    let secondIndex = arr.indexOf(diff, i+1);

    if (secondIndex !== -1) {
      result.push(i);
      result.push(secondIndex);
      break;
    }
  }

  return result;
}


module.exports = twoSum;

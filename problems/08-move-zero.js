/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/
[0,1,0,3,12]
[1,1,0,3,12]

function moveZero(arr) {

  let nextAvailableIndex = 0;

  for(let i = 0; i < arr.length ; i += 1) {

    if (arr[i] !== 0) {
      if(i !== nextAvailableIndex) {
        let temp = arr[nextAvailableIndex];
        arr[nextAvailableIndex] = arr[i];
        arr[i] = temp;
      }
      
      nextAvailableIndex += 1;

    }
  }

  return arr;
}

module.exports = moveZero;

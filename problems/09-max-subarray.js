/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

function subArray(keys) {
  
  if (keys.length === 1) return keys[0];

  let result = keys[0];
  let currentSum=0;

  for(let i = 0; i < keys.length; i += 1) {
    currentSum += keys[i];
    if (keys[i] >= currentSum) {
      currentSum = keys[i];
      if (currentSum > result) result = currentSum;
      continue;
    }

    if (currentSum > result) result = currentSum
  }

  return result

}

module.exports = subArray;


/*
            |-2|1|-3|4|-1|2|1|-5|4|
current sum |-2|1|-2|4|3 |5|6|1 |5|
result      |-2|1|1 |4|3 |5|6|6 |6|


            |-2|-1|
current sum |-2|-1|
result      |-2|-1|

*/

// [-2] = -2
// [-2,1] = 1
// [-2,1,-3] = -4
// [-2,1,-3,4] = 0
// [-2,1,-3,4,-1] = -1
// [-2,1,-3,4,-1,2] = 1
// [-2,1,-3,4,-1,2,1] = 2
// [-2,1,-3,4,-1,2,1,-5] = -3
// [-2,1,-3,4,-1,2,1,-5,4] = 1
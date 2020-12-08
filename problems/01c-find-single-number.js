/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory? 
*/


function findSingleNumber(nums) {

  nums.sort();

  for(let i = 0; i < nums.length ; i += 1) {

    if (nums[i] === nums[i - 1] || nums[i] === nums[i + 1]) continue;
    else return nums[i];

  }

}


console.log(findSingleNumber([2,2,1]));
console.log(findSingleNumber([4,1,2,1,2]));
console.log(findSingleNumber([1]));
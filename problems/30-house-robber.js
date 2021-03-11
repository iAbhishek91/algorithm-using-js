/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

function houseRobber(nums) {
  let even = 0, odd = 0;

  if(nums.length >= 0) {
  even = _backtrack(nums, 0, 0);
  if(nums.length > 1) odd = _backtrack(nums, 1, 0);
  }

  return even > odd? even : odd;
}

function _backtrack(nums, start, total) {
  console.log(start, total)
  if(start > nums.length - 1) return total;

  if(((nums[start+2] | 0) + (nums[start+4] | 0)) > (nums[start+3] | 0)) {
    console.log(nums[start+2] | 0 + (nums[start+4] | 0), nums[start+3] | 0, '2nd house')
    return _backtrack(nums, start+2, total + nums[start]);
  } else {
    console.log(nums[start+2] | 0 + nums[start+4] | 0, nums[start+3] | 0, '3rd house')
    return _backtrack(nums, start+3, total + nums[start]);
  }
}




console.log(houseRobber([1,2,3,1]));
console.log('--------------------');
console.log(houseRobber([2,1,1,2]));
console.log('--------------------');
console.log(houseRobber([5]));
console.log('--------------------');
console.log(houseRobber([1,2,1,0]));
console.log('--------------------');
console.log(houseRobber([8,9,9,4,10,5,6,9,7,9]))
/* 

- ARRAY is sorted,
- In place replacement

- Returns the length of the array after removal of duplicates
- Also remember that the element in the array should be removed.
*/

/*
- working with duplicate can be started from 1 or second index
- solved using two pointers
*/

function removeDuplicateFromArray(nums) {
  let length = 1;
  let currInsert = 1; // valid index where we can insert

  for(let i = 1; i < nums.length ; i += 1) {

    if (nums[i] !== nums[i - 1]) {
      nums[currInsert] = nums[i];
      length += 1;
      currInsert += 1;
    }
  }

  
  while(nums.length > length) nums.pop();


  console.log(nums)
  return length;
}


console.log(removeDuplicateFromArray([0,0,0,0,1,1,2,2,2,2,3,4,6,9]));
console.log(removeDuplicateFromArray([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicateFromArray([1,1,2]));

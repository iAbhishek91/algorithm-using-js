/*

 > given sum is not available 

 given two array we need to find the target is available
 [-1, 3, 8, 2, 9, 4]
 [4, 1, 2, 10, 5, 20]

 find 25

- sort both the array
- navigating from top - right to left - bottom
  - down if found number is less than target (keep track of the number)
  - left if found number is greater than target (keep track of the number)
- return the number which are close to target.
*/
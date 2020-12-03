/* 
 > sum available 

 given two array we need to find the target is available
 [-1, 3, 8, 2, 9, 5]
 [4, 1, 2, 10, 5, 20]

 find 25
*/

function sum(arr1, arr2, target) {

  const temp = new Set(arr1);

  for(let i = 0; i < arr2.length; i += 1) {
    if (temp.has(target - arr2[i])) {
      return true;
    }
  }

  return false;
}

module.exports = sum;

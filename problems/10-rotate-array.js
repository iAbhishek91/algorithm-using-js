// Given an array, rotate the array to the right by k steps, where k is non-negative.

// can be solved using O(1)
function rotateArray(arr, position) {
  const result = [];
  const length = arr.length;


  arr.forEach((e,i) => {
    let correctPosition = (i + position) % length;
    result[correctPosition] = e
  });

  return result;
}


module.exports = rotateArray;

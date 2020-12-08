// Given an array, rotate the array to the right by k steps, where k is non-negative.

// space complexity is high as we are using another array to store
function rotateArray(arr, position) {
  const result = [];
  const length = arr.length;


  arr.forEach((e,i) => {
    let correctPosition = (i + position) % length;
    result[correctPosition] = e
  });

  return result;
}


// in place replacement, no separate array
function rotateArrayInPlace(arr, position) {

  position %= arr.length;
  // reverse the full array
  reverse(0, arr.length - 1);

  // reverse the first k element of the array
  reverse(0, position - 1);

  // reverse the last k element of the array
  reverse(position , arr.length - 1);

  function reverse(start, end) {
    while(start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  return arr;
}

console.log(rotateArrayInPlace([2], 2));


console.log(rotateArrayInPlace([0,1,2,3], 0));
console.log(rotateArrayInPlace([0,1,2,3], 1));
console.log(rotateArrayInPlace([0,1,2,3], 2));
console.log(rotateArrayInPlace([0,1,2,3], 3));
console.log(rotateArrayInPlace([0,1,2,3], 4));

module.exports = rotateArray;

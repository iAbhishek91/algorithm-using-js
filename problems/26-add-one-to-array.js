/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

*/

function addOneToArr(arr) {
  const originalLength = arr.length;
  let number = parseInt(arr.join(''));
  let extraZero = '';

  number += 1;

  for(let i = 0; i < originalLength - number.toString().length; i +=1) {
    extraZero += '0';
  }

  const finalArry = extraZero.concat(number.toString()).split('');

  return finalArry;
}

function addOneToArr1(arr) {
  let carry = 0;
  for(let i = arr.length - 1; i >= 0; i -=1) {
    arr[i] += 1;
    if (arr[i] === 10) {
      arr[i] = 0;
      carry = 1;
      continue;
    } else {
      carry = 0;
      break;
    }
  }

  if (carry === 1) {
    arr = '1'.concat(arr.join('')).split('').map(Number)
  }

  return arr;
}


console.log(addOneToArr1([0]));// 1
console.log(addOneToArr1([0,0])); // 0,1
console.log(addOneToArr1([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));// 6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4
console.log(addOneToArr1([9,9,9])); //1000
console.log(addOneToArr1([1,2,3]));
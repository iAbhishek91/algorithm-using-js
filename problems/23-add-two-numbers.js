/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
EG
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

// first solution
// complexity is O(max(m,n))
function addTwoNumbers(arr1, arr2) {
  const result = [];

  const maxArr = arr1.length > arr2.length ? arr1.length : arr2.length;

  for(let i = 0; i < maxArr; i += 1) { // O(m)
    const carry = result[i] | 0;
    const addResult = (arr1[i] | 0) 
      + (arr2[i] | 0)
      + carry;
    const mod = addResult % 10;
    const remainder = Math.floor(addResult / 10); // no need to save this, here kept for understanding
  
    
    //console.log(mod + " " + remainder + " " + carry + " | " + result);
    result[i] = mod;
    if (remainder) result[i+1] = remainder;
  }

  // console.log(result);
  return result;
}


//second solution: better when linked list is NOT in reversely sorted
// O(result)

function addTwoNumbers2(arr1, arr2) {

  const revOfArr1 = arr1.reverse(); //rev is O(n/2)
  const revOfArr2 = arr2.reverse();

  const arr1ToStr = revOfArr1.join(''); //join O(n)
  const arr2ToStr = revOfArr2.join('');

  // add, 
  return((((parseInt(arr1ToStr) + parseInt(arr2ToStr))
    .toString())
    .split(''))
    .map(e => parseInt(e))
    .reverse());
}

console.log(addTwoNumbers2([9,9,9,9,9,9,9], [9,9,9,9]))

module.exports = { addTwoNumbers, addTwoNumbers2} ;

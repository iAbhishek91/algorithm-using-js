/*
MATHEMATICAL solution:
--------------------------
number of one in ones position: 
till 10: 1
till 20: 2
till 30: 3
till 90: 9
till 100: 10
till 150: 15  ... number of one: ceil(n/10)
--------------------------
number of one in ten position: 
till 0: 0
till 100: 10(10,11,12...19)
till 200: 20(10,11,12...19)
till 900: 90
till 1000: 100
till 1500: 150  ... number of one: ceil(n/100)
*/

function no1InOnesPlace(num) {
  return Math.ceil(num/10);
}

function no1InHundredsPlace(num) {
  const mod100 = num%100;
  let removeNoOfOnes;

  if (mod100 > 19) {
    removeNoOfOnes = 0; // more than 19 all ones are considered
  } else if (mod100 < 10) {
    removeNoOfOnes = 10; // less than 10, there is NO 1's in the last hundred, hence removing 10
  } else {
    // calculate no of 1's need to be removed,
    // subtracts from 10 as we need to remove not add
    // + 1 as we 1's are zero indexed
    removeNoOfOnes = 10 - ((mod100 % 10) + 1); 
  }
  //console.log(removeNoOfOnes);
  return Math.ceil(num/100)*10 - removeNoOfOnes;
}

// console.log(no1InHundredsPlace(13));
// console.log(no1InOnesPlace(13));

module.exports = no1InOnesPlace;

// refer: https://leetcode.com/problems/number-of-digit-one/solution/

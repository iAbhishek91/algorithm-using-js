/*
Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out a way you can make one square by using up all those matchsticks. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Your input will be several matchsticks the girl has, represented with their stick length. Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.

Example 1:
Input: [1,1,2,2,2]
Output: true

Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:
Input: [3,3,3,3,4]
Output: false

Explanation: You cannot find a way to form a square with all the matchsticks.
*/

function makeSquare(arr) {

  const sum = arr.reduce((prev, curr) => prev + curr);
  
  if (sum % 4 !== 0) return false;

  const squareLength = sum / 4;

  arr = arr.sort((a, b) => b-a);
  //console.log(arr);

  // save the value of each side
  const currentStatus = [0,0,0,0];
  const matchStickUsed = [];
  

  for (let i = 0; i < arr.length; i += 1) {
    if (
      currentStatus[0] === squareLength
      && currentStatus[1] === squareLength
      && currentStatus[2] === squareLength
    ) return true;
    
    if (arr[i] > squareLength) return false;

    assignMatchStick(arr[i]);
  }

  function assignMatchStick(stick) {
    //console.log(stick);
    for(let i = 0; i < currentStatus.length; i += 1) {
      //console.log(currentStatus, squareLength - currentStatus[i] );
      if (squareLength - currentStatus[i] >= stick) {
        //console.log(`${stick} added to ${i}`);
        currentStatus[i] += stick;
        return;
      }
    }
  }

  return false;
}


console.log(makeSquare([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]));
module.exports = makeSquare;

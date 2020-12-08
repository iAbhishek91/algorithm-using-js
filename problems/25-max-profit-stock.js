/* 

Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

*/

/*
objective: Buy at lowest point and sell at greater price.
714721 = buy at 2nd day with $1 and sell it on 4th day with $7
[7,1,5,3,6,4] = Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
*/

function findMax(arr) {
  const highs = []; // store all the highs
  const lows = []; // store all the lows

  // find the low and high
  for(let i = 0; i < arr.length; i += 1) {
    while(i < arr.length && arr[i] >= arr[i + 1]) i++;
    lows.push(i);
    while(i < arr.length && arr[i] <= arr[i + 1]) i++;
    highs.push(i);
  }

  // calculate the result
  let result = 0
  for(let i = 0; i < highs.length && i < lows.length; i += 1) {
    result += arr[highs[i]] - arr[lows[i]];
  }
  console.log(lows);
  console.log(highs);

  return result;
}

console.log(findMax([7,1,4,7,2,1]));
console.log(findMax([7,1,5,3,6,4]));
console.log(findMax(([1,2,3,4,5])));



function findMaxOptimized(arr) {
  let result = 0

  // find the add to result, if current element greater than previous
  // highest and lowest are not required
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i - 1]) {
      result += arr[i]- arr[i - 1];
    }
  }

  return result;
}

console.log(findMaxOptimized([7,1,4,7,2,1]));
console.log(findMaxOptimized([7,1,5,3,6,4]));
console.log(findMaxOptimized([1,2,3,4,5]));

function solution(N) {
  
  // covert int to string of array
  let numberArr = (Math.abs(N).toString()).split('');
  let indexToInsert = 0;

  // find the correct index of 5
  // for positive number if number[i] is less than 5
  // for negative number if number[i] is greater than 5
  // time complexity "O(number of digit)"
  for(let i = 0; i < numberArr.length; i += 1) {
    indexToInsert = i;
    if (N >= 0) {
      // for positive number
      if (numberArr[i] < 5) break;
    } else {
      // for negative number
      if (numberArr[i] > 5) break;
    }
  }

  // inserting 5 in the correct pos
  let leftArr = numberArr.slice(0, indexToInsert);
  let rightArr = numberArr.slice(indexToInsert, numberArr.length);

  // 
  let result = parseInt([...leftArr, 5, ...rightArr].join(''));
  
  return N >= 0 ? result : result * -1;
}


console.log(solution(268));
console.log(solution(670));
console.log(solution(0));
console.log(solution(5000));
console.log(solution(-5000));
console.log(solution(-999));
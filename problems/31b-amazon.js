function solution(A) {
  // sorting the array so that the loop will runs until the number is not found
  // assuming "nlog(n)" as time complexity
  A.sort((a,b) => a - b);
  
  for(let i = 1; i < A.length; i += 1) {
      if(Math.abs(A[i] - A[i-1]) === 1) return true 
  }

  return false;
}


console.log(solution([
  11,1,8,120,14
]));

console.log(solution([
  
]));


console.log(solution([
  1,1,1,1,1,1,1,1,1,1,1,1,1
]));

console.log(solution([
  -1000000, -99999,-99997,-99994,-99992,0, 99,2,96,94,5,999999999,1000000000
]));

console.log(solution([
  2,4,6,8,10,12,14,16,18,
  98,96,94,92,90,88,86,84,85
]));
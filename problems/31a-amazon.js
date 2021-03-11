function solution(A) {
  // sorting the array so that the loop will runs until the number is not found
  // assuming "nlog(n)" as time complexity
  A.sort((a,b) => a - b);
  console.log(A);
  let min = 1;
  
  for(let i = 0; i < A.length; i += 1) {
      if(A[i] <= 0) continue; // minimum remains 1
      if(A[i] === min) min++; // increment minimum if its available
      if(A[i] >= min) return min; // return if minimum is not available
  }
  
  return min;
}

//extreme min max value
console.log(solution([-1000000, -99999,-99998,-99997,-99996,-99995,-99994,-99993,-99992,0, 1,2,3,4,5,1000000]));
// shuffled b/w 0..100 and 102..200
console.log(solution([
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
]));
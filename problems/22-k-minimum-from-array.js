// Find k minimum from a given array

// input: array to search, and k as positive integer
// output: array of length k which are minimum in the give array

// eg: 
// input: [9,8,4,4,34,90,0,34,2] | 3
// output: [0, 2, 4]

// first solution
function sortArrayReturnMin(arr, k) {
  // you can sort using any algo, (nlogn for merge and quick sort)
  arr.sort();

  return arr.slice(0, k - 1);
}


// second solution
function useOfHeap(arr, k) {
  // need to implement b min heap
  // need to insert all the element in heap
  // delete/remove parent add in a result array
  // return result array
}
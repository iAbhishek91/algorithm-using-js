function sortArrays(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];
  let noOfSwap = -1;// -1 to indicate start

  // implementing bubble sort
  while(noOfSwap != 0) {

    noOfSwap = 0;

    for(let j = 0; j < mergedArray.length; j += 1) {

      let firstElement = mergedArray[j];
      let secondElement = mergedArray[j+1];

      if (firstElement > secondElement) {
        mergedArray[j] = secondElement;
        mergedArray[j+1] = firstElement;
        noOfSwap += 1;
      }

    }

  }

  return mergedArray;
}


module.exports = sortArrays;

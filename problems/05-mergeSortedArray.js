function mergeSortedArray(arr1, arr2) {

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergeArray = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length || arr2Index < arr2.length) {

    const arr1Element = arr1[arr1Index];
    const arr2Element = arr2[arr2Index];

    if (arr1Element === arr2Element) {
      mergeArray.push(arr1Element);
      mergeArray.push(arr2Element);
      arr1Index += 1;
      arr2Index += 1;
    } else if (arr1Element < arr2Element) {
      mergeArray.push(arr1Element);
      arr1Index += 1;
    } else {
      mergeArray.push(arr2Element);
      arr2Index += 1;
    }
  
  }

  return mergeArray;

}


module.exports = mergeSortedArray;

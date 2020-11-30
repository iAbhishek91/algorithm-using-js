function commonBetweenTwoArray(arr1, arr2) {
  const firstArray = new Set(arr1);
  let result = false;
  
  arr2.forEach(e => {
    if (firstArray.has(e)) {
      result = true
      return;
    }
  });

  return result;
}

module.exports = commonBetweenTwoArray;

function firstCharacterWhichHasDuplicate(arr) {
  const myMap = new Map();

  for(let i = 0; i < arr.length ; i += 1) {
    if (myMap.has(arr[i])) {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
    } else {
      myMap.set(arr[i], 1);
    }
  }

  for(let i = 0; i < arr.length ; i += 1) {
    if (myMap.get(arr[i]) >  1) {
      return arr[i]
    }
  }

  return -1;
}


module.exports = firstCharacterWhichHasDuplicate;

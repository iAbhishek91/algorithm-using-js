function firstRecurring(arr) {
  const countEachChar = new Map();

  for(let i = 0 ; i < arr.length ; i += 1) {
    if(countEachChar.get(arr[i])) return arr[i];
    countEachChar.set(arr[i], 1);
  }

  return -1;
}

module.exports = firstRecurring;

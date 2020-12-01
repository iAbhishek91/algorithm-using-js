function findDuplicate(arr) {
  const uniqElement = new Set();
  let duplicateFound = false;

  arr.forEach(e => {
    if(uniqElement.has(e)) {
      duplicateFound = true;
      return;
    }
    uniqElement.add(e)
  });

  return duplicateFound;
}

module.exports = findDuplicate;
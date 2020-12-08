// if size of array is too huge, try to sort the array and then return true or false.
// however for small array this is ok.
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
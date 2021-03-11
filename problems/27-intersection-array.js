/*
common element in both the array
*/

//using Map, faster if we use simple object
function intersection(arr1, arr2) {
  const map = new Map();
  arr1.forEach(e => {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1);
    } else {
      map.set(e, 1);
    }
  });
  const result = [];

  for(let i = 0; i < arr2.length; i += 1){
    if (map.has(arr2[i])) {
      result.push(arr2[i]);
      if(map.get(arr2[i]) === 1) map.delete(arr2[i]);
      else map.set(arr2[i], (map.get(arr2[i]) - 1));
    }
  }

  return result
}


console.log(intersection([1,2,2,1], [2,2])); // 2,2
console.log(intersection([1,2], [1,1]));
console.log(intersection([4,9,5], [9,4,9,8,4]));


function intersection2(arr1, arr2) {
  const map = {};
  arr1.forEach(e => {
    if (map[e]) {
      map[e] += 1;
    } else {
      map[e] = 1;
    }
  });
  // console.log(map);
  const result = [];

  for(let i = 0; i < arr2.length; i += 1){
    if(map[arr2[i]] > 0) {
      result.push(arr2[i]);
      map[arr2[i]]--;
    }
  }

  return result
}

console.log(intersection2([1,2,2,1], [2,2])); // 2,2
console.log(intersection2([1,2], [1,1]));
console.log(intersection2([4,9,5], [9,4,9,8,4]));
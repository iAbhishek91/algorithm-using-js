// with help of Map
function firstUnique(str) {
  const map = new Map();

  for(let i = 0; i < str.length; i += 1) {
    if(map.has(str[i])) {
      map.set(str[i], false);
    } else {
      map.set(str[i], true);
    }
  }
  
  for(let a of map) {
    if(a[1]) return str.indexOf(a[0]);
  }

  return -1;
}

console.log(firstUnique("leetcode"));
console.log(firstUnique("haha"));
console.log(firstUnique("dddccdbba"));
function validAnagram(str1, str2) {
  if (str1.length !==str2.length) return false;
  
  const map1 = {};
  const map2 = {};

  for(let i = 0; i < str1.length; i += 1) {
    if(map1[str1[i]]) map1[str1[i]] += 1;
    else map1[str1[i]] = 1;
  }

  for(let i = 0; i < str2.length; i += 1) {
    if(map2[str2[i]]) map2[str2[i]] += 1;
    else map2[str2[i]] = 1;
  }

  for(let [char, count] of Object.entries(map1)) {
    if(map2[char] !== count) return false;
  }

  return true;
}


console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('car', 'rat'));
console.log(validAnagram('a', 'ab'));

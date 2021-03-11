/*

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Input: haystack = "hello", needle = "ll"
Output: 2

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Input: haystack = "", needle = ""
Output: 0
*/


function strStr(haystack, needle){
  if(needle.length < 1) return 0;
  console.log('>>',haystack.length, needle.length)
  if(haystack.length < needle.length) return -1;

  let index = 0;
  while(index + needle.length <= haystack.length) {
    if(haystack.substr(index, needle.length) === needle) {
      return index;
    }
    index++;
  }

  return -1;
}

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('', ''));
console.log(strStr('', 'a'));
console.log(strStr('a', 'a'));
